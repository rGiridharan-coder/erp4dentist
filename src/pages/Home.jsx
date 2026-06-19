import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import FAQ from '../components/Faq';
import { homeFaqs } from '../data/homeFaq';
import { useLocation } from 'react-router-dom';
import SimplifyClinic from '../components/SimplifyClinic';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import GetInTouchModal from '../components/GetInTouchModal'; // <-- Import modal
import Header from '../layouts/Header';
import { Helmet } from 'react-helmet';
import CounterGrid from '../components/CounterGrid'; 

const Home = ({ onTrialClick }) => {

    const location = useLocation();

      // ⛳ Used to avoid re-opening modal after it's closed once
  const hasShownModal = useRef(false);

          const [showDemoModal, setShowDemoModal] = useState(false); // <-- Modal state

        const handleDemoClick = (e) => {
    e.preventDefault();
    setShowDemoModal(true);
  };



  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('message');

    // Only show modal ONCE for this session if message exists
    if (message && typeof onTrialClick === 'function' && !hasShownModal.current) {
      hasShownModal.current = true;
      onTrialClick(); // Show modal only once
    }
  }, [location.search, onTrialClick]);



  return (
    <>
      <Helmet>
        <title>Dental Practice Management Software | 30-Days Free Trial</title>
        <meta name="description" content="Start your 30-day free trial of dental practice management software built to simplify operations and enhance patient experiences." />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <div className='banner home'>
            <h1>Best Dental Practice<br />Management Software</h1>
            <p>Created for Dentists by Dentists</p>
            <div className='btn-wrap'><a className='btns pry' href='#' onClick={(e) => {
            e.preventDefault();
            onTrialClick(); // now this works!
          }}>FREE TRIAL</a> <a className='btns sec' href='#' onClick={handleDemoClick}>GET A DEMO</a></div>
        </div>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
         <div className='section-wrap-top'>
             <CounterGrid />
          </div>
    <div className='section-wrap ash-bg'>
        <div className='container'>
      <h2>Why is ERP4Dentist the Best for Your Dental Management?</h2>
        <section className='row'>
            <aside className='col-md-3 text-center'>
                <div className='bx'>
                    <figure><Image src='/icons/dentists.svg' alt="" /></figure>
                    <h3>Created for Dentists by Dentists</h3>
                </div>
            </aside>
            <aside className='col-md-3 text-center'>
                <div className='bx'>
                    <figure><Image src='/icons/all-in-one.svg' alt="" /></figure>
                    <h3>All-in-One Dental Management Software</h3>
                </div>
            </aside>
            <aside className='col-md-3 text-center'>
                <div className='bx'>
                    <figure><Image src='/icons/unlimited.svg' alt="" /></figure>
                    <h3>Unlimited Users</h3>
                </div>
            </aside>
            <aside className='col-md-3 text-center'>
                <div className='bx'>
                    <figure><Image src='/icons/call-support.svg' alt="" /></figure>
                    <h3>Whatsapp, Email, Call Support</h3>
                </div>
            </aside>
        </section>
        </div>
    </div>
    
    <div className='section-wrap'>
        <div className='container'>
            <section className='row'>
                <div className='img-cnt-bx'>
                    <aside className='col-lg-6 text-center'>
                    <Image src='/images/about-erp.webp' alt="" fluid />                        
                    </aside>
                    <aside className='col-lg-6 abt text-left'>
                       <h2>About ERP4Dentist</h2>
                       <p>An All-in-One Dental Management Software designed to streamline every aspect of your practice, from appointment scheduling and patient records to billing and analytics.</p>
                       <h3>Created for Dentists by Dentists!</h3>
                       <a className='btns know' href='/about'>Know More</a>
                    </aside>
                </div>
            </section>
        </div>
    </div>

    <div className='section-wrap ash-bg'>
        <div className='container'>
      <h2>Key Features</h2>
        <section className='row'>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/apt-schedule.svg' alt="" /></figure>
                    <h3>Appointment Scheduling</h3>
                    <p>Manage bookings and set your clinic schedule</p>
                    <Link to="/features/appointment-scheduling" state={{ scrollToId: "appointment-scheduling" }} className="nl mt-3">Know More</Link>

                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/treatment-planning.svg' alt="" /></figure>
                    <h3>Treatment Planning</h3>
                    <p>Manage patient records, clinical history, and treatment plans.</p>
                    <Link to="/features/treatment-planning" state={{ scrollToId: "treatment-planning" }} className="nl mt-3">Know More</Link>
                    {/* <a href='/Features#treatment-planning' className='nl'>Know More</a> */}
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/pat-mgt.svg' alt="" /></figure>
                    <h3>Patient Management</h3>
                    <p>Manage appointments, history and treatment plans</p>
                    <Link to="/features/patient-management" state={{ scrollToId: "patient-management" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/drug-catalog.svg' alt="" /></figure>
                    <h3>Drug Catalog</h3>
                    <p>Custom drug catalog for your clinic</p>
                    <Link to="/features/drug-catalog" state={{ scrollToId: "drug-catalog" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/ePrescription.svg' alt="" /></figure>
                    <h3>EPrescription</h3>
                    <p>Electronic Prescription along with digital signature</p>
                    <Link to="/features/ePrescription" state={{ scrollToId: "e-prescription" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/lab-mgt.svg' alt="" /></figure>
                    <h3>Lab Management</h3>
                    <p>Manage Vendors, track payouts all under one dashboard</p>
                    <Link to="/features/lab-management" state={{ scrollToId: "lab-management" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/billing-payment.svg' alt="" /></figure>
                    <h3>Billing & Payments</h3>
                    <p>Track payments, generate invoices and manage your clinic billing</p>
                    <Link to="/features/billing-payments" state={{ scrollToId: "billing-payments" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/reports.svg' alt="" /></figure>
                    <h3>Reports & Analytics</h3>
                    <p>Real Time Insights on your clinic performance</p>
                    <Link to="/features/reports-analytics" state={{ scrollToId: "reports-analytics" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx key'>
                    <figure><Image src='/icons/unlimited.svg' alt="" /></figure>
                    <h3>Unlimited Users</h3>
                    <p>Manage all your employees with Multi user access</p>
                    <Link to="/features/unlimited-users" state={{ scrollToId: "unlimited-users" }} className="nl mt-3">Know More</Link>
                </div>
            </aside>
        </section>
    </div>
    </div>

<div className='section-wrap'>
        <div className='container'>
      <h2>We Don't Just Power Your Practice, We Help You Grow!</h2>
        <section className='row'>
            <aside className='col-lg-3 col-md-6'>
                <div className='bx help'>
                    <figure><Image src='/images/no-website.png' alt="" fluid /></figure>
                    <h3>No Website, No Problem</h3>
                    <p>We'll create a 3 page  professional, mobile-friendly site to build your online presence.</p>
                </div>
            </aside>
            <aside className='col-lg-3 col-md-6'>
                <div className='bx help'>
                    <figure><Image src='/images/local-patients.png' alt="" fluid /></figure>
                    <h3>Local Patients Find You Faster</h3>
                    <p>We help set up your Google Business Profile. Local patients can find you easily.</p>
                </div>
            </aside>
            <aside className='col-lg-3 col-md-6'>
                <div className='bx help'>
                    <figure><Image src='/images/stay-social.png' alt="" fluid /></figure>
                    <h3>Stay Social, Stay Visible</h3>
                    <p>We create and share engaging social posts that boost your clinic's visibility and credibility.</p>
                </div>
            </aside>
            <aside className='col-lg-3 col-md-6'>
                <div className='bx help'>
                    <figure><Image src='/images/lead-bookings.png' alt="" fluid /></figure>
                    <h3>Leads That Turn Into Bookings</h3>
                    <p>Our digital marketing campaigns attract real patients, not just clicks.</p>
                </div>
            </aside>
        </section>
    </div>
    </div>

    <div className='section-wrap-btm'>
        <div className='container'>
             <h2>Quick Sign Up for a Free Trial</h2>
             <div className='bx numb'>
                <h4>01</h4>
                <h3>Sign Up Instantly</h3>
                <p>Fill in your Name, Email, Mobile number</p>
             </div>
             <div className='bx numb'>
                <h4>02</h4>
                <h3>Verify</h3>
                <p>Verify your Email & Mobile Number</p>
             </div>
             <div className='bx numb last'>
                <h4>03</h4>
                <h3>Dive Into Full Access</h3>
                <p>Login & Start using ERP4Dentist</p>
             </div>
        </div>
    </div>  
    
<div className='section-wrap-btm'>
        <div className='container get-in'>
             <Row className='d-flex align-items-center'>
                <Col lg={7}>
                    <h2 className='text-left'>What You'll Love During Your Trial</h2>
                    <ul className='star'>
                        <li>Scheduled your prospective patients with Appointment Scheduler</li>
                        <li>Choose from a list of pre-populated Treatment Plans</li>
                        <li>Manage your Vendors all from a single dashboard</li>
                        <li>Retrieve Patient Details from the cloud</li>
                        <li>Keep Track of Billing & Payments</li>
                        <li>Track Clinic Performance with Reports & Analytics</li>
                        <li>No credit card needed. No Strings Attached !</li>
                     </ul>
                     <p>No credit card needed. No Strings Attached !</p>              
                </Col>
                <Col lg={5}>
                    <div className='get-in-touch'>
                        <h3>Get in Touch</h3>
                        <GetInTouch />
                    </div>
                </Col>
             </Row>
        </div>
    </div>    
       
    <div className='section-wrap ash-bg'>
        <div className='container'>
      <h2>Why Do You Need Dental Practice Management Software?</h2>
        <section className='row d-flex justify-content-center'>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/no-paperwork.svg' alt="" /></figure>
                    <h3>No Paperwork</h3>
                    <p>Every record is digital and easy to access</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/easy-apt.svg' alt="" /></figure>
                    <h3>Easy Appointment Scheduling</h3>
                    <p>Appointment scheduling is simple and user-friendly</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/clinic-mgt.svg' alt="" /></figure>
                    <h3>Centralised Clinic Management</h3>
                    <p>All-in-one Dental Clinic Management</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/seamless.svg' alt="" /></figure>
                    <h3>Seamless Patient Communication</h3>
                    <p>Simple, smooth communication for patients</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/clinic-insights.svg' alt="" /></figure>
                    <h3>Clinic Insights</h3>
                    <p>Simple look at the clinic statistics</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/no-clearical.svg' alt="" /></figure>
                    <h3>No Clerical Errors</h3>
                    <p>All patient records are error-free</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/visibility.svg' alt="" /></figure>
                    <h3>Visibility On Financials</h3>
                    <p>Easy monitoring of clinic financials</p>
                </div>
            </aside>
            <aside className='col-md-4'>
                <div className='bx brd'>
                    <figure><Image src='/icons/pat-history.svg' alt="" /></figure>
                    <h3>Organised Patient History</h3>
                    <p>Streamlined comprehensive patient records</p>
                </div>
            </aside>
        </section>
    </div>
    </div>
    <Testimonials />
    <div className="section-wrap ash-bg">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={homeFaqs} />
    </div>
    <div className='section-wrap'>
        <SimplifyClinic onTrialClick={onTrialClick}/>
    </div>
      <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default Home;