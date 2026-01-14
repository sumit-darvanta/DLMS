import React, { useContext, useEffect, useState, createContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const AllProjectsContext = createContext();

const Navbar = () => {
  const location = useLocation();
  const { navigate } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isAllProjectsOpen, setIsAllProjectsOpen } =
    useContext(AllProjectsContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const userRole = user?.publicMetadata?.role || "student";

  const handleEducatorAccess = () => {
    if (userRole === "educator" || userRole === "admin") {
      navigate("/educator");
    } else {
      toast.info("You need educator access to open this dashboard.");
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 py-3">
        
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={assets.logo}
            alt="Aparaitech"
            className="w-10 sm:w-12"
          />
          <span className="font-bold text-lg sm:text-xl text-gray-900">
            Aparaitech
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/course-list" className="hover:text-blue-600">Projects</Link>

          <button
            onClick={() => setIsAllProjectsOpen(true)}
            className={`px-4 py-2 rounded-lg border transition ${
              isAllProjectsOpen
                ? "bg-blue-600 text-white border-blue-600"
                : "border-blue-500 text-blue-600 hover:bg-blue-50"
            }`}
          >
            All Projects
          </button>

          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {user && (
            <>
              {(userRole === "educator" || userRole === "admin") && (
                <button
                  onClick={handleEducatorAccess}
                  className="hover:text-blue-600"
                >
                  Admin Dashboard
                </button>
              )}

              {userRole === "student" && (
                <Link to="/my-enrollments" className="hover:text-blue-600">
                  My Enrollments
                </Link>
              )}
            </>
          )}

          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={openSignIn}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full shadow"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-5 space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/course-list" onClick={() => setMenuOpen(false)}>Projects</Link>

          <button
            onClick={() => {
              setIsAllProjectsOpen(true);
              setMenuOpen(false);
            }}
            className="w-full text-left px-4 py-2 border border-blue-500 text-blue-600 rounded-lg"
          >
            All Projects
          </button>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          {user && (
            <>
              {(userRole === "educator" || userRole === "admin") && (
                <button onClick={handleEducatorAccess}>
                  Admin Dashboard
                </button>
              )}

              {userRole === "student" && (
                <Link to="/my-enrollments">My Enrollments</Link>
              )}
            </>
          )}

          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={() => {
                openSignIn();
                setMenuOpen(false);
              }}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </motion.nav>
  );
};

export const AllProjectsProvider = ({ children }) => {
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  return (
    <AllProjectsContext.Provider value={{ isAllProjectsOpen, setIsAllProjectsOpen }}>
      {children}
    </AllProjectsContext.Provider>
  );
};

export default Navbar;
