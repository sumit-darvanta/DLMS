import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/student/Footer";
import { assets } from "../../assets/assets";
import CourseCard from "../../components/student/CourseCard";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/student/SearchBar";
import { motion } from "framer-motion";

const CoursesList = () => {
  const { input } = useParams();
  const { allCourses, navigate } = useContext(AppContext);

  const [filteredCourse, setFilteredCourse] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("All");

  // ✅ Extract unique domains
  const uniqueDomains = Array.from(
    new Set(allCourses?.map((course) => course.customDomain))
  );

  // ✅ Filter courses
  useEffect(() => {
    if (allCourses?.length > 0) {
      let tempCourses = [...allCourses];

      if (input) {
        tempCourses = tempCourses.filter((item) =>
          item.courseTitle.toLowerCase().includes(input.toLowerCase())
        );
      }

      if (selectedDomain !== "All") {
        tempCourses = tempCourses.filter(
          (item) => item.customDomain === selectedDomain
        );
      }

      setFilteredCourse(tempCourses);
    }
  }, [allCourses, input, selectedDomain]);

  // ✅ Group by domain
  const groupedByDomain = filteredCourse.reduce((acc, course) => {
    if (!acc[course.customDomain]) acc[course.customDomain] = [];
    acc[course.customDomain].push(course);
    return acc;
  }, {});

  // Card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 0.6
      }
    }
  };

  // Hover animation variant
  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.03,
      y: -6,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Container animation for staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  return (
    <>
      <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-50">
        {/* Background orbs */}
        <div className="absolute top-[-150px] left-[-80px] w-[300px] h-[300px] bg-blue-400/20 blur-3xl rounded-full animate-pulse -z-10"></div>
        <div className="absolute bottom-[-150px] right-[-80px] w-[350px] h-[350px] bg-cyan-400/30 blur-3xl rounded-full animate-pulse -z-10"></div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto md:px-10 px-6 pb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex md:flex-row flex-col gap-6 items-start justify-between pt-8"
          >
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Discover Projects
              </h1>
              <p className="text-gray-600 mt-2">
                <span
                  onClick={() => navigate("/")}
                  className="text-blue-600 font-medium cursor-pointer hover:underline"
                >
                  Home
                </span>{" "}
                / Browse Projects
              </p>
            </div>
            <div className="w-full md:w-auto">
              <SearchBar data={input} />
            </div>
          </motion.div>

          {/* Domain Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10 p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                <svg 
                  className="w-5 h-5 text-blue-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
                  />
                </svg>
              </div>
              <label className="text-gray-700 font-medium text-sm sm:text-base">
                Filter Projects by Domain
              </label>
            </div>
            
            <div className="relative flex-1 max-w-md">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-4 py-3 pl-11 rounded-xl border border-gray-200 bg-white/90 shadow-sm 
                         focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none 
                         text-gray-700 font-medium text-sm sm:text-base
                         appearance-none cursor-pointer
                         transition-all duration-200 hover:border-blue-300"
              >
                <option value="All" className="py-2">🌐 All Domains</option>
                {uniqueDomains.map((domain, index) => (
                  <option key={index} value={domain} className="py-2">
                    {domain}
                  </option>
                ))}
              </select>
              
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg 
                  className="w-5 h-5 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </div>
              
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg 
                  className="w-5 h-5 text-blue-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
                  />
                </svg>
              </div>
            </div>
            
            {selectedDomain !== "All" && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Active: {selectedDomain}
              </motion.div>
            )}
          </motion.div>

          {/* Active Search Tag */}
          {input && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-4 px-4 py-2 border mt-6 text-gray-600 bg-white/70 rounded-lg shadow backdrop-blur-md"
            >
              <p>Search: "{input}"</p>
              <img
                src={assets.cross_icon}
                alt="clear"
                onClick={() => navigate("/course-list")}
                className="w-4 h-4 cursor-pointer hover:rotate-90 transition-transform"
              />
            </motion.div>
          )}

          {/* Courses */}
          {Object.keys(groupedByDomain).length > 0 ? (
            Object.entries(groupedByDomain).map(([domain, courses]) => (
              <div key={domain} className="my-16">
                {/* Domain Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">{domain}</h2>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {courses.length} {courses.length === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                </motion.div>

           {/* Cards Grid */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className={`${
    courses.length === 1 
      ? 'flex justify-center' 
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
  }`}
>
  {courses.map((course, index) => (
    <motion.div
      key={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={() => navigate(`/course/${course._id}`)}
      className={`${
        courses.length === 1 
          ? 'w-full max-w-md' 
          : 'w-full'
      } flex justify-center relative cursor-pointer group`}
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        className="relative w-full" // REMOVED: bg-white, shadow, rounded classes
      >
        {/* Card content - NO WHITE OVERLAY */}
        <CourseCard course={course} />
      </motion.div>
    </motion.div>
  ))}
</motion.div>

                {/* REMOVED: Extra message below single project */}
              </div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Projects Found</h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any projects matching your criteria.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      setSelectedDomain("All");
                      navigate("/course-list");
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                  >
                    View All Projects
                  </button>
                  <p className="text-sm text-gray-400">
                    or try a different search term
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoursesList;