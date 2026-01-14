import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";
import { 
  FaBullseye, 
  FaLightbulb, 
  FaChartLine, 
  FaUsers, 
  FaGlobeAmericas,
  FaHandshake
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const About = () => {
  const stats = [
    { value: "30+", label: "Technology Domains" },
    { value: "100+", label: "Industry Projects" },
    { value: "5000+", label: "Trained Professionals" },
    { value: "50+", label: "Partner Companies" },
  ];

  const values = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Excellence",
      description: "Commitment to delivering superior quality in everything we do",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Innovation",
      description: "Driving technological advancement through creative solutions",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Collaboration",
      description: "Fostering partnerships for mutual growth and success",
      color: "from-emerald-600 to-emerald-800"
    },
    {
      icon: <IoRocketSharp className="w-8 h-8" />,
      title: "Growth",
      description: "Empowering continuous learning and professional development",
      color: "from-orange-600 to-orange-800"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl mb-8 shadow-2xl">
              <img 
                src={assets.logo} 
                alt="Aparaitech Logo" 
                className="w-16 h-16 rounded-xl"
              />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aparaitech</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Leading the digital transformation through innovative technology solutions 
              and world-class education services across global markets.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-20"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Global Technology Solutions Provider
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Aparaitech is a premier technology and software development company 
                    specializing in bridging the gap between academic knowledge and 
                    practical industry requirements. Through our innovative Learning 
                    Management System, we deliver real-world project experiences across 
                    30+ technology domains.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to excellence and innovation has established us as a 
                    trusted partner for organizations worldwide, driving digital 
                    transformation and fostering technological advancement.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl mb-4">
                    <FaBullseye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To provide industry-level project experience that transforms learners into job-ready professionals.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl mb-4">
                    <FaChartLine className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Approach</h3>
                  <p className="text-gray-600 text-sm">
                    Hands-on learning through live projects guided by industry experts.
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl mb-4">
                    <FaLightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600 text-sm">
                    To lead technological innovation through AI-driven solutions and global partnerships.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-xl mb-4">
                    <FaGlobeAmericas className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600 text-sm">
                    Serving clients and learners across multiple continents with localized solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions, actions, and relationships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent group-hover:scale-[1.02]">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Journey?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals and organizations already benefiting 
              from our innovative solutions and world-class training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default About;