import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const logos = [
  assets.microsoft_logo,
  assets.walmart_logo,
  assets.accenture_logo,
  assets.adobe_logo,
  assets.paypal_logo,
  assets.amazon_logo,
  assets.meta_logo,
  assets.salesforce_logo,
  assets.oracle_logo,
  assets.qualcomm_logo,
];

// Split logos for two different orbital rings
const innerLogos = logos.slice(0, 5);
const outerLogos = logos.slice(5, 10);

const Companies = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-4 sm:px-8 md:px-16">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* ================= LEFT SIDE: TEXT CONTENT ================= */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 order-2 md:order-1">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wide uppercase text-sm"
          >
            Trusted Partners
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
          >
            Collaborating with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            We are proud to be trusted by professionals from top-tier organizations. 
            Our solutions empower teams to achieve more with greater efficiency.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
              View Case Studies
            </button>
          </motion.div>
        </div>

        {/* ================= RIGHT SIDE: ORBIT ANIMATION ================= */}
        <div className="relative w-full md:w-1/2 h-[450px] flex items-center justify-center order-1 md:order-2">
          
          {/* Background Gradient Blob */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-50 blur-3xl transform scale-75" />

          {/* --- Outer Ring (Clockwise - Slower) --- */}
          {/* Increased size slightly to accommodate bigger logos */}
          <motion.div
            className="absolute border border-gray-200 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }} // Duration increased to 80s
          >
            {outerLogos.map((logo, i) => (
              <div
                key={i}
                // Increased w/h from 14 to 20 for bigger logos
                className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-white shadow-md border border-gray-100 rounded-full flex items-center justify-center p-3"
                style={{
                  top: "50%",
                  left: "50%",
                  // Adjusted translate to match half of new ring size (approx 200px for desktop)
                  transform: `rotate(${i * (360 / outerLogos.length)}deg) translate(150px) rotate(-${i * (360 / outerLogos.length)}deg)`, 
                  // Note: On desktop the translate logic might need to be responsive if strict math is required, 
                  // but translate(150px) fits the mobile ring, we use a media query trick or fixed math usually.
                  // For simplicity here, 150px fits the sm:w-[400px] (radius 200) comfortably with inset.
                }}
              >
                <motion.img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }} // Match parent duration
                />
              </div>
            ))}
          </motion.div>

          {/* --- Inner Ring (Counter-Clockwise - Slower) --- */}
          <motion.div
            className="absolute border border-blue-100 rounded-full w-[180px] h-[180px] sm:w-[240px] sm:h-[240px]"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }} // Duration increased to 60s
          >
            {innerLogos.map((logo, i) => (
              <div
                key={i}
                // Increased w/h from 12 to 16
                className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center p-2.5"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * (360 / innerLogos.length)}deg) translate(90px) rotate(-${i * (360 / innerLogos.length)}deg)`,
                }}
              >
                <motion.img
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }} // Match parent duration
                />
              </div>
            ))}
          </motion.div>

          {/* Center Decoration */}
          <div className="absolute w-24 h-24 bg-blue-50/50 rounded-full blur-xl" />
          <div className="absolute w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

        </div>

      </div>
    </section>
  );
};

export default Companies;