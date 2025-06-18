import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenuLine, RiCloseLine, RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/Navbar.css";
import logo from "../../assets/images/logo_webiso.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    desktop: null,
    mobile: new Set(),
  });

  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsScrolled(window.scrollY > 20);
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAdminLoggedIn(!!token);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminLoggedIn(false);
    navigate("/");
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const menuItems = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About Us",
      path: "/about-us",
    },
    {
      title: "Services",
      path: "/services",
      // submenu: [
      //     { title: 'Detail service', path: '#' },
      //     { title: 'Pricing plan', path: '#' },
      // ]
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact us",
      path: "/contact-us",
    },
    // {
    //     title: 'Pages',
    //     path: '/pages',
    //     submenu: [
    //         { title: 'Team', path: '#' },
    //         { title: 'FAQ', path: '#' },
    //         { title: 'Blog Archieve', path: '#' },
    //         { title: 'Single post', path: '#' },
    //         { title: 'Error 404', path: '#' },
    //     ]
    // }
  ];

  const toggleMobileDropdown = (title) => {
    setOpenDropdowns((prev) => {
      const newMobileDropdowns = new Set(prev.mobile);
      if (newMobileDropdowns.has(title)) {
        newMobileDropdowns.delete(title);
      } else {
        newMobileDropdowns.add(title);
      }
      return {
        ...prev,
        mobile: newMobileDropdowns,
      };
    });
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileSubmenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <nav className={`navbar`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to={"/"} className="navbar-logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu desktop-menu">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="menu-item"
                onMouseEnter={() =>
                  setOpenDropdowns((prev) => ({ ...prev, desktop: item.title }))
                }
                onMouseLeave={() =>
                  setOpenDropdowns((prev) => ({ ...prev, desktop: null }))
                }
              >
                <Link
                  to={item.path}
                  className={`menu-link ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.title}
                  {item.submenu && (
                    <RiArrowDownSLine
                      className={`menu-icon ${
                        openDropdowns.desktop === item.title ? "rotated" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.submenu && (
                  <AnimatePresence>
                    {openDropdowns.desktop === item.title && (
                      <motion.div
                        className="submenu"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                      >
                        <div className="submenu-content">
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="submenu-link"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </button>
          </div>
          {/* CTA Button */}
          <div className="navbar-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {menuItems.map((item, index) => (
                <div key={index} className="mobile-menu-item">
                  <div
                    className="mobile-menu-link"
                    onClick={() =>
                      item.submenu && toggleMobileDropdown(item.title)
                    }
                  >
                    <Link
                      to={item.path}
                      className="mobile-menu-title"
                      onClick={{ isOpen: 0 }}
                    >
                      {item.title}
                      {item.submenu && (
                        <RiArrowDownSLine
                          className={`menu-icon ${
                            openDropdowns.mobile.has(item.title)
                              ? "rotated"
                              : ""
                          }`}
                        />
                      )}
                    </Link>
                  </div>

                  {item.submenu && (
                    <AnimatePresence>
                      {openDropdowns.mobile.has(item.title) && (
                        <motion.div
                          className="mobile-submenu"
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          variants={mobileSubmenuVariants}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.path}
                              className="mobile-submenu-link"
                            >
                              {subItem.title}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
