import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/main.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Header = ({ onLoginClick, onTrialClick }) => {
  const navRef = useRef(null); // Add ref for collapsible nav

  const handleNavLinkClick = () => {
    if (navRef.current && navRef.current.classList.contains('show')) {
      // Collapse navbar using Bootstrap's method
      const bsCollapse = new window.bootstrap.Collapse(navRef.current, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <>
      <div className="hd-top">
        <div className="container">
          <ul>
            <li className='mail'><a href="mailto:support@erp4dentist.com" target='_blank'>support@erp4dentist.com</a></li>
            <li className='phone'><a href="tel:918056437743">+91 80564 37743</a></li>
            <li>
            <div className="header-element header-whatsapp">
              <a
                href="https://whatsapp.com/channel/0029Vb6H6Fa9RZAOHjX2So3C"
                target="_blank"
                rel="noreferrer"
                className="header-link"
                title="Join Our WhatsApp Channel"
                style={{
                  display: "inline-block",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "25px",
                  textDecoration: "none",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#1EBE5D";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
                }}
              >
                💬 Join WhatsApp
              </a>
            </div>
          </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-xl navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="/"><img src="/images/logo.webp" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" onClick={() => {
            const bsCollapse = new window.bootstrap.Collapse(navRef.current, { toggle: false });
            if (navRef.current.classList.contains('show')) {
              bsCollapse.hide();
            } else {
              bsCollapse.show();
            }
          }}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
           <ul className="navbar-nav">
              {[
                { path: "/", label: "Home", exact: true },
                { path: "/about", label: "About Us" },
                { path: "/features", label: "Features" },
                { path: "/pricing", label: "Pricing" },
                { path: "/tutorials", label: "Tutorials" },
                { path: "https://erp4dentist.com/blog/", label: "Blog" },
                { path: "/contact", label: "Contact Us" }
              ].map(({ path, label, exact }) => (
                <li className="nav-item" key={path}>
                  {path === "#" ? (
                    <span className="nav-link disabled" style={{ cursor: "default" }}>
                      {label}
                    </span>
                  ) : path.startsWith("http") ? (
                    <a
                      href={path}
                      className="nav-link">
                      {label}
                    </a>
                  ) : (
                    <NavLink
                      to={path}
                      end={exact}
                      onClick={handleNavLinkClick}
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    >
                      {label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='hd-btn'>
            <a className='btns sec' href='https://dental.erp4dentist.com/' target='_blank'>Login</a>
            <a className='btns know' href='#' onClick={(e) => { e.preventDefault(); onTrialClick(); }}>Free Trial</a>        
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
