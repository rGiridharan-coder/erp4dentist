import React, { useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import SimplifyClinic from '../components/SimplifyClinic';
import FeatureCards from '../components/FeatureCards';
import Breadcrumbs from "../components/Breadcrumbs";
import FAQ from '../components/Faq';
import { pricingFaqs } from '../data/pricingFaq';
import GetInTouchModal from '../components/GetInTouchModal'; // <-- Import modal
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    
          const [showDemoModal, setShowDemoModal] = useState(false); // <-- Modal state
    
            const handleDemoClick = (e) => {
        e.preventDefault();
        setShowDemoModal(true);
      };
  return (
    <>
      <Helmet>
        <title>About ERP4Dentist | Building Software for Modern Clinics</title>
        <meta name="description" content="At ERP4, we design scalable software solutions focused on efficiency, clarity, and growth for clinics adapting to modern healthcare demands." />
        <meta name="robots" content="index, follow" />
      </Helmet>
        <Container>
            <Breadcrumbs />
         </Container>
    <div className='section-wrap'>
        <Container>
            <Row className='d-flex align-items-center abt-intro'>
                <Col md={4}>
                    <h1>Simplify Dental practice; make life easy!</h1>
                </Col>
                <Col md={8}>
                    <p>At ERP4 Dentist, we believe dental professionals should spend more time on patient care and less time managing their practice. That's why we created ERP4 Dentist, an All-in-One Dental Management Software designed to streamline every aspect of your practice, from appointment scheduling and patient records to billing and analytics.</p>
                </Col>
            </Row>   
         </Container>
    </div>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
    
<div className='section-wrap ash-bg'>
         <Container>
        <Row>
            <Col md={6}>
                <div className='bx brd mg'>
                    <figure><Image src='/icons/our-mission.svg' alt="" /></figure>
                    <h2>Our Mission</h2>
                    <p>To provide dentists with an all-in-one, user-friendly platform that streamlines operations, enhances patient experience, and supports practice growth.</p>
                </div>
            </Col>
            <Col md={6}>
                <div className='bx brd mg'>
                    <figure><Image src='/icons/our-vision.svg' alt="" /></figure>
                    <h2>Our Vision</h2>
                    <p>To be the leading Dental Patient Management solution that empowers dental clinics to deliver exceptional care through innovation, efficiency, and simplicity.</p>
                </div>
            </Col>
       </Row>
         </Container>
    </div>

    <div className='section-wrap'>
         <Container>
             <h2>Inspired by</h2>
            <Row>
                <Col lg={3} sm={6}>
                    <div className='inspired-bx'>
                        <figure><Image src='/images/roshan-rayen.webp' alt="" fluid /></figure>
                        <h3>Dr. Roshan Rayen
                        <span>Rayen Dental Centre</span></h3>
                    </div>
                </Col>
                <Col lg={3} sm={6}>
                    <div className='inspired-bx'>
                        <figure><Image src='/images/siva-prakash.webp' alt="" fluid /></figure>
                        <h3>Dr. Siva Prakash
                        <span>Dr. Smilez</span></h3>
                    </div>
                </Col>
                <Col lg={3} sm={6}>
                    <div className='inspired-bx'>
                        <figure><Image src='/images/manoj-rajan.webp' alt="" fluid /></figure>
                        <h3>Dr. Manoj Rajan
                        <span>Dr. Smilez</span></h3>
                    </div>
                </Col>
                <Col lg={3} sm={6}>
                    <div className='inspired-bx'>
                        <figure><Image src='/images/ramji.webp' alt="" fluid /></figure>
                        <h3>Dr. E. Ramji
                        <span>The Novelty Dental Clinic</span></h3>
                    </div>
                </Col>
            </Row>
         </Container>
    </div>

    <div className='section-wrap ash-bg'>
        <div className='container'>
            <Row>
                <div className='img-cnt-bx dentist'>
                    <Col md={6} className='abt-creat text-left'>
                       <h2>Created For Dentists, By Dentists!</h2>
                       <p>ERP4 Dentist is born out of a deep understanding of the unique challenges faced by practising Dentists. Whether running a solo practice or a multi-location clinic, our platform is customisable for your business growth.</p>
                       <a className='btns know' href='#' onClick={handleDemoClick}>Book Free Demo</a>
                    </Col>
                    <Col md={6} className='text-center'>
                      <Image src='/images/created-dentists.webp' alt="" fluid />                        
                    </Col>
                </div>
            </Row>
        </div>
    </div>
    
<div className='section-wrap'>
        <div className='container'>
      <h2>We Stand For</h2>
        <Row>
            <Col md={3}> 
                <div className='bx'>
                    <figure><Image src='/icons/apt-schedule.svg' alt="" /></figure>
                    <h3>Innovation</h3>
                    <p>We use modern technology to solve everyday problems in dental practice management.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='bx'>
                    <figure><Image src='/icons/treatment-planning.svg' alt="" /></figure>
                    <h3>Simplicity</h3>
                    <p>Our intuitive interface ensures your team can get started with minimal training.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='bx'>
                    <figure><Image src='/icons/pat-mgt.svg' alt="" /></figure>
                    <h3>Support</h3>
                    <p>Our dedicated customer success team is always ready to help you make the most of ERP4 Dentist.</p>
                </div>
            </Col>
            <Col md={3}>
                <div className='bx'>
                    <figure><Image src='/icons/drug-catalog.svg' alt="" /></figure>
                    <h3>Security  & Compliance</h3>
                    <p>Your data is highly secure on the cloud. Your data is Your data. We do not sell your data.</p>
                </div>
            </Col>
        </Row>
    </div>
    </div>

    <div className='section-wrap-btm'>
        <div className='container'>
             <h2>Our Team</h2>
             <figure><Image src='/images/our-team.webp' alt="" fluid /></figure>
        </div>
    </div>

    <div className='section-wrap-btm'>
        <div className='container'>
             <h2>Contact Us</h2>
            <Row className='justify-content-center'>
                <Col lg={3} md={4}>
                    <div className='bx brd ct'>
                        <figure><Image src='/icons/our-mission.svg' alt="" /></figure>
                        <h3>CALL</h3>
                        <p><a href="tel:918056437743" target="_blank">+91 80564 37743</a></p>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='bx brd ct'>
                        <figure><Image src='/icons/our-vision.svg' alt="" /></figure>
                        <h3>MAIL</h3>
                        <p><a href="mailto:support@erp4dentist.com" target="_blank">support@erp4dentist.com</a></p>
                    </div>
                </Col>
                <Col lg={3} md={4}>
                    <div className='bx brd ct'>
                        <figure><Image src='/icons/our-vision.svg' alt="" /></figure>
                        <h3>WEBSITE</h3>
                        <p><a href="/">www.erp4dentist.com</a></p>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
<GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default AboutUs;