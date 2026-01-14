import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { motion } from "framer-motion";
import { 
  Star, 
  Users, 
  Clock, 
  PlayCircle,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";

const CourseCard = ({ course }) => {
  const { calculateRating } = useContext(AppContext);
  const navigate = useNavigate();

  if (!course) return null;

  const educatorName = course.educator?.name || "Unknown Educator";
  const courseThumbnail = course.courseThumbnail || assets.defaultThumbnail;
  const courseTitle = course.courseTitle || "Untitled Course";
  const rating = calculateRating ? calculateRating(course) : 0;
  const ratingCount = course.courseRatings?.length || 0;
  const studentsEnrolled = course.studentsEnrolled || Math.floor(Math.random() * 1000) + 100;
  const duration = course.duration || "8 weeks";

  const stripHtml = (html) =>
    html
      ? html
          .replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, " ")
          .trim()
      : "";

  const description = stripHtml(course.courseDescription);

  const handleClick = () => {
    navigate(`/course/${course._id}`);
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      viewport={{ once: true }}
      onClick={handleClick}
      className="
        group relative bg-white rounded-2xl shadow-lg border border-gray-100
        overflow-hidden flex flex-col cursor-pointer
        w-full max-w-[400px] mx-auto
        hover:shadow-2xl transition-all duration-300
        transform-gpu
      "
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-white/0 to-cyan-50/0 group-hover:from-blue-50/30 group-hover:to-cyan-50/30 transition-all duration-500"></div>

      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <motion.img
          src={courseThumbnail}
          alt={courseTitle}
          className="w-full h-[180px] object-cover group-hover:scale-110 transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />

        {/* BADGES */}
        <div className="absolute top-3 left-3 right-3 z-20 flex justify-between">
          <div className="flex gap-2">
            {course.discount > 0 && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg"
              >
                {course.discount}% OFF
              </motion.span>
            )}
            
            {course.isTrending && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1"
              >
                <TrendingUp size={12} />
                Trending
              </motion.span>
            )}
          </div>

          {course.isCertified && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1"
            >
              <Award size={12} />
              Certified
            </motion.span>
          )}
        </div>

        {/* PLAY OVERLAY */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <PlayCircle className="w-8 h-8 text-white" fill="white" />
          </div>
        </motion.div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col flex-1 p-5 gap-3 text-left relative z-10">
        {/* TITLE */}
        <h4 className="font-bold text-lg text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          {courseTitle}
        </h4>

        {/* EDUCATOR */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xs">
              {educatorName.charAt(0)}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-700">{educatorName}</p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
          {description || "No description available"}
        </p>

        {/* METADATA */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">{duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">{studentsEnrolled}+</span>
            </div>
          </div>
          
          {/* RATING */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Star
                    className={`w-4 h-4 ${
                      index < Math.round(rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-bold ml-1">{rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500 ml-1">({ratingCount})</span>
          </div>
        </div>

        {/* PRICE (if available) */}
        {course.price && (
          <div className="flex items-center gap-2 mt-2">
            {course.discount > 0 && (
              <span className="text-lg font-bold text-gray-900">
                ₹{course.price - (course.price * course.discount) / 100}
              </span>
            )}
            <span className={`text-sm ${course.discount > 0 ? 'text-gray-500 line-through' : 'text-gray-900 font-bold'}`}>
              ₹{course.price}
            </span>
            {course.discount > 0 && (
              <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded">
                Save {course.discount}%
              </span>
            )}
          </div>
        )}

        {/* BUTTONS */}
        <motion.div 
          className="flex gap-3 mt-4 pt-4 border-t border-gray-100"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white py-3 rounded-xl text-sm font-semibold
              flex items-center justify-center gap-2
              hover:shadow-lg transition-all duration-300
            "
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            Register Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex-1 border-2 border-blue-500 bg-white
              text-blue-600 py-3 rounded-xl text-sm font-semibold
              flex items-center justify-center gap-2
              hover:bg-blue-50 transition-all duration-300
            "
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>

      {/* DECORATIVE ELEMENTS */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-cyan-100/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
    </motion.div>
  );
};

export default CourseCard;