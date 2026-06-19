import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/main.css';

const LandingFooter = () => {
  return (
    <>
    <footer className='land'>
    <div className="ftr-tp">
        <div className="container">
            <div className='logo'>
                <img src="/images/landing-ftr-erp4dentist-logo.webp" alt="Logo" height={100} />
            </div>
                <ul className='links'>
                    <li><a href="#overview" onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // remove #faq from URL
      window.history.replaceState(null, "", window.location.pathname);
    }
  }}
>Overview</a></li>
                    <li><a href="#prdfeature" onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("prdfeature");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // remove #faq from URL
      window.history.replaceState(null, "", window.location.pathname);
    }
  }}
>Product Features</a></li>
                    <li><a href="#benefit" onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("benefit");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // remove #faq from URL
      window.history.replaceState(null, "", window.location.pathname);
    }
  }}
>Benefits</a></li>
                    <li><a
  href="#faq"
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // remove #faq from URL
      window.history.replaceState(null, "", window.location.pathname);
    }
  }}
>
  FAQ
</a></li>
                </ul> 
            <div className='get-touch-blk'>
                <div className='mail'><a href='mailto:support@erp4dentist.com' target='_blank'>support@erp4dentist.com</a></div> 
                <div className='phone'><a href='tel:918056437743' target='_blank'>+91 80564 37743</a></div>                  
            </div>
        </div>
    </div>

    <div className="ftr-btm">
        <div className="container">
            <div className="row">
                <aside className="col-md-4"><a href='#'>ERP4Dentist 2025</a></aside>
                <aside className="col-md-8 text-right"><Link to="/privacy-policy">Privacy Policy</Link> <Link to="/terms-of-services">Terms Of Services</Link></aside>
            </div>
        </div>
    </div>
    </footer>
    </>
  );
};

export default LandingFooter;
