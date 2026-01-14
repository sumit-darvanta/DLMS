import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star,
  ShieldCheck
} from "lucide-react";

const assets = {
  // Main Hero Image
  lms_img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  
  // Reliable Avatar Images from Unsplash
  avatar1: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
  avatar2: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
  avatar3: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
};

const HeroGeneral = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      {/* 1. Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:py-16 lg:pt-20 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ============================================================== */}
          {/* LEFT COLUMN: Text Content */}
          {/* ============================================================== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-sm font-semibold text-indigo-700 mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              New Projects Added Weekly
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              Premium Projects for <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Every Discipline
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-600 mb-6 max-w-lg leading-relaxed"
            >
              From Engineering and Computer Science to Management and Arts. 
              Get source code, documentation, and expert guidance for your next big project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link to="/projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2">
                  Explore Projects <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/categories" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 flex items-center justify-center">
                   View Categories
                </button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-200 w-full grid grid-cols-3 gap-4"
            >
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 font-medium">Projects Ready</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">20+</p>
                <p className="text-sm text-slate-500 font-medium">Domains</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 font-medium">Verified Docs</p>
              </div>
            </motion.div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT COLUMN: SIMPLIFIED UDEMY STYLE */}
          {/* ============================================================== */}
          <div className="relative z-10 order-1 lg:order-2">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={assets.lms_img} 
                  alt="Students studying together" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Decoration 1: The "Success Card" */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 max-w-[200px]"
              >
                 <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Quality</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">Verified Source Code</p>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Decoration 2: The "Rating/Social Proof" Card */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 md:top-8 md:-right-8 bg-white p-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[assets.avatar1, assets.avatar2, assets.avatar3].map((avatarUrl, i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src={avatarUrl} alt={`Student ${i}`} className="w-full h-full object-cover"/>
                    </div>
                  ))}
                </div>
                <div>
                   <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-slate-800">4.9</span>
                      <Star size={12} className="fill-yellow-400 text-yellow-400" />
                   </div>
                   <p className="text-xs text-slate-500">Happy Students</p>
                </div>
              </motion.div>

              {/* Background Blob/Dot Decoration */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl opacity-50"></div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroGeneral;