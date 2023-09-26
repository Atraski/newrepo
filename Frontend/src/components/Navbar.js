/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo4 from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const subMenuRef = useRef(null);
  const subSubMenuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target) &&
        subSubMenuRef.current &&
        !subSubMenuRef.current.contains(event.target)
      ) {
        closeDropdowns();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
    setSubSubMenuOpen(false); // Close sub-submenu on submenu toggle
  };

  const toggleSubSubMenu = () => {
    setSubSubMenuOpen(!subSubMenuOpen);
  };

  const closeDropdowns = () => {
    setSubMenuOpen(false);
    setSubSubMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-dark  ${isNavOpen ? 'show' : ''}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/Atraski">
          <img
            src={logo4}
            alt="Your Logo"
            width="100px"
            height="100"
            className="d-inline-block align-text-top"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Atraski" onClick={handleNavClick}>
                Home
              </NavLink>
            </li>

            <li className={`nav-item dropdown ${subMenuOpen ? 'show' : ''}`} ref={subMenuRef}>
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                onClick={toggleSubMenu}
                style={{ color: '#808080' }}
              >
                Services
              </NavLink>
              <ul
                className={`dropdown-menu ${subMenuOpen ? 'show' : ''}`}
                aria-labelledby="navbarDropdownMenuLink"
                style={{width:'700px'}}
              >
                <div className="row">
                  <div className="col-4 ">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/services"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                      style={{color:'black'}}>
                        Digital Marketing
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Social Media Manage</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Running Ads</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Off Page SEO  and On Page SEO</p>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/event"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Public Relation
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Media Outreach</p>

                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/marketing"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Influential Marketing
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Influencers Campaign</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>College Ambassador</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Campaign / Youth Marketing</p>

                    </li>
                  </div>
                  <div className="col-4 adjust1">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/production"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        My City My Voice
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Goods or Services</p>

                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/web"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Travel
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Incetives Trips</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Travel Agency For Corporate</p>

                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/mice"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Book Our Stays
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> Incentives, Conferences</p>

                    </li>
                  </div>
                  <div className="col-4 adjust">
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/production"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Fashion
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Brand Collaboration</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Services</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Models</p>

                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/web"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Intellectual Properties
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Bloggers Mela</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>The Voice Fest</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}>Business E-Shower</p>

                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/mice"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Integrated Marketing
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> Incentives, Conferences</p>

                    </li>

                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/mice"
                        onClick={() => {
                          closeDropdowns();
                          handleNavClick();
                        }}
                        style={{color:'black'}}>
                        Events & Exhi
                      </NavLink>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> Events</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> Exhibition</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> Product Launches</p>
                      <p style={{ color: 'black', fontFamily:'serif', fontSize:'0.8rem',marginLeft:'20px', marginBottom:'10px' }}> ATL & BTL</p>

                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/OurWork" onClick={handleNavClick}>
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={handleNavClick}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="https://mycitymyvoice.in/" onClick={handleNavClick}>
                MCMV
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="https://atstay.in/" onClick={handleNavClick}>
                Atstay
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fashion" onClick={handleNavClick}>
                Fashion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogger" onClick={handleNavClick}>
                Blogger's Mela
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Eshower" onClick={handleNavClick}>
                E-Shower
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers" onClick={handleNavClick}>
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs" onClick={handleNavClick}>
                Contact us
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cartview" onClick={handleNavClick}>
              <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
          </ul>

          {/* Right part of the sub-menu */}
          <div className={`dropdown-menu ${subSubMenuOpen ? 'show' : ''}`} ref={subSubMenuRef} style={{width:'500px'}}>
            <div className="row">
              <div className="col-6">
                <NavLink
                  className="dropdown-item"
                  to="/production"
                  onClick={() => {
                    closeDropdowns();
                    handleNavClick();
                  }}
                >
                  Production
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink
                  className="dropdown-item"
                  to="/web"
                  onClick={() => {
                    closeDropdowns();
                    handleNavClick();
                  }}
                >
                  Web Development
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink
                  className="dropdown-item"
                  to="/mice"
                  onClick={() => {
                    closeDropdowns();
                    handleNavClick();
                  }}
                >
                  MICE
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
