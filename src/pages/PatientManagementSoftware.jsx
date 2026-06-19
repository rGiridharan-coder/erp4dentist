import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import FAQ from '../components/Faq';
import { landingFaqs } from '../data/landingFaq';
import SmarterDental from '../components/SmarterDental';
import GetInTouch from '../components/GetInTouch';
import LandingForm from '../components/LandingForm';
import LandingHeader from '../layouts/LandingHeader';


const PatientManagementSoftware = ({ onTrialClick }) => {
      const [showSignup, setShowSignup] = useState(false);

  const handleOpenSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <>

<LandingForm show={showModal} handleClose={handleClose} />
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
    <div className='landing'>
        <div className='banner landing'>
            <div className='bann-cont'>
                <h1><Image src='/images/hdg-launch.svg' alt="" fluid /></h1>
                <h1 className='mbl'><Image src='/images/hdg-launch-mbl.svg' alt="" fluid /></h1>
                <p>All-in-one Dental Patient Management System - Created for dentists starting their first clinic</p>
                <div className='btn-wrap-lft'><a className='btns land wht' href='#' onClick={handleOpen}>Get 1 Month Free Trial</a></div>
            </div>
        </div>
        <div className='section-wrap-top' id="overview">
            <Container>
                <Row className='d-flex align-items-center abt-intro land'>
                    <Col md={4}>
                        <div className='hdg-wrap lft'><div className='hdg'>Product Overview</div></div>
                        <h2>Transform Your Dream Dental Clinic into a Smart Practice</h2>
                    </Col>
                    <Col md={8}>
                        <p>Starting your first clinic can be overwhelming. ERP4Dentist simplifies clinic setup, streamlines daily operations, and empowers you with everything you need from patient bookings to billing all in one place. No tech skills needed.</p>
                    </Col>
                </Row>   
                </Container>
        </div>
    
    
    <div className='section-wrap' id="prdfeature">
        <Container>
            <div className='hdg-wrap'><div className='hdg'>What's Inside the Software (Product Features)</div></div>
      <h2>Comprehensive Services to Meet Your Evolving Needs</h2>
        <Row>    
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/apt-schedule2.svg' alt="" /></figure>
                        <h3>Appointment Scheduling</h3>
                    </div>
                    <p>Manage bookings and set your clinic schedule with ease.</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/treatment-planning2.svg' alt="" /></figure>
                        <h3>Treatment Planning</h3>
                    </div>
                    <p>Seamless process flow</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/pat-mgt2.svg' alt="" /></figure>
                        <h3>Patient Management</h3>
                    </div>
                    <p>Manage appointments, history, and treatment plans with ease.</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/drug-catalog2.svg' alt="" /></figure>
                        <h3>Drug Catalog</h3>
                    </div>
                    <p>Custom drug catalog for your clinic</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/ePrescription2.svg' alt="" /></figure>
                        <h3>EPrescription</h3>
                    </div>
                    <p>Electronic Prescription along with digital signature</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/lab-mgt2.svg' alt="" /></figure> 
                        <h3>Lab Management</h3>
                    </div>
                    <p>Manage Vendors, track payouts all under one dashboard</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/billing-payment2.svg' alt="" /></figure>
                        <h3>Billing & Payments</h3>
                    </div>
                    <p>Track payments, generate invoices, and manage your clinic's billing with ease.</p>
                </div>    
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/reports2.svg' alt="" /></figure>
                        <h3>Reports & Analytics</h3>
                    </div>
                    <p>Real Time Insights on your clinic's performance</p>
                </div>                
            </Col>
            <Col lg={4} md={6}>
                <div className='bx comp'>
                    <div className='wrap'>
                        <figure><Image src='/icons/ele-medical-records.svg' alt="" /></figure>
                        <h3>Electronic Medical Records</h3>
                    </div>
                    <p>All Records On the Cloud</p>
                </div>         
            </Col>
        <h4 className='try-free'>"Try free for 30 Days. No Credit Card Required!"</h4>
        </Row>
          <div className='btn-wrap-cen'><a className='btns land' href='#' onClick={handleOpen}>Try for 30 Days</a></div>
    </Container>
    </div>

    <div className='section-wrap ash-bg'>
        <Container>
            <Row>
                <div className='img-cnt-bx'>
                    <Col lg={6} className='text-center'>
                        <Image src='/images/built-it-lab-mgt.webp' alt="" fluid />     
                        <h3 className='blu-txt'>Created for Dentists by Dentists</h3>                   
                    </Col>
                    <Col lg={6} className='abt text-left'>
                        <h2>ERP4 Dentist</h2>
                        <p>Affordable, Reliable and Feature rich!</p>
                        <h3><strong>@ 999/ month (GST extra)</strong></h3>
                        <h2>Built-In Lab Management</h2>
                        <p>Easily record and track payments made to labs so you can manage lab expenses without a hassle.</p>
                        <h3>Manage Multiple Labs Across Multiple Branches</h3>
                    </Col>
                </div>
            </Row>
        </Container>
    </div>

<div className='section-wrap'>
        <Container>
      <h2>Who Is This For?</h2>
            <Row className='justify-content-center'>
              <Col lg={3} md={4}>
                <div className='bx who-is'>
                    <figure><Image src='/images/starting-first-clinic.webp' alt="" fluid /></figure>
                    <h3>Starting your first clinic?</h3>
                    <p>Launch smoothly without needing a tech team.</p>
                </div>
             </Col>
              <Col lg={3} md={4}>
                <div className='bx who-is'>
                    <figure><Image src='/images/managing-records.webp' alt="" fluid /></figure>
                    <h3>Tired of managing records?</h3>
                    <p>Organize patient data easily with ERP4Dentist.</p>
                </div>
             </Col>
              <Col lg={3} md={4}>
                <div className='bx who-is'>
                    <figure><Image src='/images/look-professional.webp' alt="" fluid /></figure>
                    <h3>Want to look professional?</h3>
                    <p>Run a polished, efficient clinic from day one.</p>
                </div>
             </Col>
        </Row>
          <div className='btn-wrap-cen'><a className='btns land' href='#' onClick={handleOpen}>Activate Free Trial </a></div>
       </Container>
    </div>    
       
    <div className='section-wrap'>
        <Container>
      <h2>Why Dentists Trust ERP4Dentist</h2>
        <Row className='d-flex justify-content-center'>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/no-paperwork2.svg' alt="" /></figure>
                    <h3>No Paperwork</h3>
                    <p>Every record is digital and easy to access</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/easy-apt2.svg' alt="" /></figure>
                    <h3>Easy Appointment Scheduling</h3>
                    <p>Appointment scheduling is simple and user-friendly</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/clinic-mgt2.svg' alt="" /></figure>
                    <h3>Centralised Clinic Management</h3>
                    <p>All-in-one Dental Clinic Management</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/seamless2.svg' alt="" /></figure>
                    <h3>Seamless Patient Communication</h3>
                    <p>Simple, smooth communication for patients</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/clinic-insights2.svg' alt="" /></figure>
                    <h3>Clinic Insights</h3>
                    <p>Simple look at the clinic statistics</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/no-clearical2.svg' alt="" /></figure>
                    <h3>No Clerical Errors</h3>
                    <p>All patient records are error-free</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/visibility2.svg' alt="" /></figure>
                    <h3>Visibility On Financials</h3>
                    <p>Easy monitoring of clinic financials</p>
                </div>
            </Col>
            <Col lg={3} md={4}>
                <div className='bx brd'>
                    <figure><Image src='/icons/pat-history2.svg' alt="" /></figure>
                    <h3>Organised Patient History</h3>
                    <p>Streamlined comprehensive patient records</p>
                </div>
            </Col>
        </Row>
    </Container>
    </div>

    <div className="section-wrap" id="benefit">
        <Container className='exclusive'>
            <div className='hdg-wrap'><div className='hdg'>Exclusive Benefits</div></div>
          <h2>Get More Than Just Managing Your Clinic<br />Grow with Our Smart Digital Marketing Package</h2>
          <Row>
            <Col md={6}><figure><Image src='/images/personalized.webp' alt="" fluid /></figure></Col>
            <Col md={6}><figure><Image src='/images/google-my-business.webp' alt="" fluid /></figure></Col>
            <Col md={6}><figure><Image src='/images/social-media-presence.webp' alt="" fluid /></figure></Col>
            <Col md={6}><figure><Image src='/images/lead-generation.webp' alt="" fluid /></figure></Col>
          </Row>
          <div className='btn-wrap-cen'><a className='btns land' href='#' onClick={handleOpen}>Get All the Benefits!</a></div>
        </Container>        
    </div>  
   
    <div className="section-wrap ash-bg" id="faq">
        <div className='hdg-wrap'><div className='hdg'>FAQ</div></div>
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={landingFaqs} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onClick={handleOpen} onTrialClick={onTrialClick} />
        {/* <SimplifyClinic onTrialClick={onTrialClick}/> */}
    </div>
    </div>

    </>
  );
};

export default PatientManagementSoftware;