import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { aptSchedulingFaq } from '../../data/aptSchedulingFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import AptTab from '../../components/AptTab';
import SmarterDental from '../../components/SmarterDental';
import GetInTouchModal from '../../components/GetInTouchModal';
import ScrollToHash from '../../components/ScrollToHash';

const AppointmentScheduling = ({ onTrialClick }) => {

    const location = useLocation();
      const [scrollToId, setScrollToId] = useState(null);

  useEffect(() => {
    if (location.state?.scrollToId) {
      setScrollToId(location.state.scrollToId);
    }
  }, [location]);

        // ⛳ Used to avoid re-opening modal after it's closed once
        const hasShownModal = useRef(false);

        const [showDemoModal, setShowDemoModal] = useState(false); // <-- Modal state

        const handleDemoClick = (e) => {
        e.preventDefault();
        setShowDemoModal(true);
    };

  return (
    <>
    <Helmet>
        <title>Dental Appointment Scheduling Software | Easy Scheduling</title>
        <meta name="description" content="Powerful dental appointment scheduling software that helps clinics manage calendars, availability, and patient visits with ease." />
        <meta name="robots" content="index, follow" />
    </Helmet>
    <Container>
      <Breadcrumbs />
    </Container>
        <div className="sticky whatsapp" onClick={() => window.open('https://wa.me/918056437743', 'mywindow')}></div>
            
            <div className='section-wrap'>
                <div className='img-cnt-bx aptScd'>
                    <div className='container'>
                        <Row className='align-items-center aptScd-in'>
                            <Col lg={7} className='text-left'>
                                <h2>Dental Appointment Scheduling Software</h2>
                                <p>Simplify Scheduling, Enhance Patient Care</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/Aa4vnWVtD8M?si=e28VAsqmDaWLLrdh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Cloud-based dental scheduling software</h2>
        <p className='fw-bold text-center'>Smart appointment scheduling that saves time for both dentists and patients</p>
        <p className='small text-center'>With ERP4 Dentist, manage appointments effortlessly through an intuitive calendar system. Reduce no-shows with automated reminders and ensure smooth patient flow, helping your clinic stay organised and efficient every day.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_aptSchd.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Appointment Scheduling Helps You</h2>
            <ul>
                <li>
                    <label>Time Efficiency:</label>
                    <p>Streamlines booking, rescheduling, and cancellations.</p>
                </li>
                <li>
                    <label>Reduced No-Shows:</label>
                    <p>Automated reminders via WhatsApp/Email keep patients on track</p>
                </li>
                <li>
                    <label>Improved Patient Experience:</label>
                    <p>Quick and hassle-free scheduling enhances satisfaction.</p>
                </li>
                <li>
                    <label>Centralised Calendar View:</label>
                    <p>Dentists and staff get a clear overview of daily, weekly, and monthly schedules</p>
                </li>
                <li>
                    <label>Better Staff Coordination:</label>
                    <p>Helps manage multiple doctors, treatments, and time slots seamlessly.</p>
                </li>
                <li>
                    <label>Data Insights:</label>
                    <p>Track peak hours, cancellations, and appointment patterns for informed decision-making</p>
                </li>
            </ul>
            
            </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap-btm benfits">
      <Container>
        <h2>Benefits of Appointment Scheduling Software</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/easyScheduling.svg' alt="" /></figure>
                            <h3>Easy Scheduling</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Automated Reminders</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/optimizedClinic.svg' alt="" /></figure>
                            <h3>Optimized Clinic Workflow</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/smartInsights.svg' alt="" /></figure>
                            <h3>Smart Insights</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <AptTab />
    </div>
    
        <div className='section-wrap other-features'>
            <div className='container'>
            <h2>We also have other features</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/tmtPlanning.svg' alt="" /></figure>
                            <h3>Treatment planning</h3>
                            <a href='/features/treatment-planning' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/patientMgt.svg' alt="" /></figure>
                            <h3>Patient Management</h3>
                            <a href='/features/patient-management' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/drugCatalog.svg' alt="" /></figure>
                            <h3>Drug catalog</h3>
                            <a href='/features/drug-catalog' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                </Row>
                <div className='btn-wrap'><a href='/features' className='btn-oval big'>Discover All Features</a></div>
            </div>
        </div>
    <div className="section-wrap ash-bg">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={aptSchedulingFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default AppointmentScheduling;