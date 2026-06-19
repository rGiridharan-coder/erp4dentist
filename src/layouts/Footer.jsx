import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/main.css';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="ftr-tp">
        <div className="container">
            <div className="row">
                <aside className="col-xl-3">
                    <div className='logo'><a href="https://bleapdigital.com/" target='_blank'>
  <img src="/images/logo-bleap-digital.webp" alt="Logo" height={120} /></a>
</div>
                    <div className='logo'><a href="/">
  <img src="/images/logo2.webp" alt="Logo" height={120} /></a>
</div>
    <div className='soc'>
        <h3>Follow Us On</h3>
        <ul>
            <li><a href="https://www.facebook.com/profile.php?id=61565928414162" target='_blank'><img src="/icons/facebook.svg" alt="Facebook" /></a></li>
            <li><a href="https://www.instagram.com/erp4dentist/" target='_blank'><img src="/icons/instagram.svg" alt="Instagram" /></a></li>
            <li><a href="https://www.youtube.com/@ERP4Dentist" target='_blank'><img src="/icons/youtube.svg" alt="YouTube" /></a></li>
        </ul>
    </div>
</aside>                 
   
                <aside className="col-xl-6">
                        <ul className='links'> 
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/features'>Features</a></li>
                            <li><a href='/pricing'>Pricing</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                        </ul>
                <div className='created'>
  <img src="/images/created-img.webp" alt="Created" />
</div>
                </aside>
                <aside className="col-xl-3">
                    <div className='get-touch-blk'>
                    <h3>Get in Touch</h3>
                    {/* <h4>Call</h4> */}
                        <div className='phone'><a href='tel:918056437743' target='_blank'>+91 80564 37743</a></div>                   
                        <div className='mail'><a href='mailto:support@erp4dentist.com' target='_blank'>support@erp4dentist.com</a></div>
                    </div>
                </aside>
            </div>
        </div>
    </div>

    <div className="ftr-btm">
        <div className="container">
            <div className="row">
                <aside className="col-md-4">Copyright © 2026 erp4dentist.com</aside>
                <aside className="col-md-8 ftr-btm-link"><Link to="/privacy-policy">Privacy Policy</Link> &nbsp;&nbsp;|&nbsp;&nbsp; <Link to="/refund-and-cancellation">Refund and Cancellation Policy</Link> &nbsp;&nbsp;|&nbsp;&nbsp; <Link to="/terms-of-services">Terms Of Services</Link></aside>
            </div>
        </div>
    </div>
    </footer>
    </>
  );
};

export default Footer;
