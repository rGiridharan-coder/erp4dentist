import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { patMgtFaq } from '../../data/patMgtFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksPat from '../../components/WorksPat';
import GetInTouchModal from '../../components/GetInTouchModal';

const PatientManagement = ({ onTrialClick }) => {

    const location = useLocation();
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
        <title>Dental Patient Management Software | Simplify Workflows</title>
        <meta name="description" content="Scalable dental patient management software designed to support growing practices and improve day-to-day patient operations." />
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
                                <h2>Dental Patient Management Software</h2>
                                <p>Complete Patient Records Made Easy</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/dn9ihP7xZ2c?si=R26V3MS7M9DKh9jd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Patient Management System</h2>
        <p className='fw-bold text-center'>Organise patient records with ease and efficiency.</p>
        <p className='small text-center'>ERP4 Dentist helps clinics manage complete patient histories, appointments, prescriptions, and communications in one place. With quick access to vital information, dentists can deliver personalised care, strengthen patient relationships, and improve overall clinic productivity</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_patMgt.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Patient Management Helps You</h2>
            <ul>
                <li>
                    <label>Centralised Records:</label>
                    <p>Maintain complete patient histories, treatments, and prescriptions in one place.</p>
                </li>
                <li>
                    <label>Quick Access:</label>
                    <p>Retrieve patient information instantly during consultations.</p>
                </li>
                <li>
                    <label>Better Communication:</label>
                    <p>Send reminders, updates, and follow-ups to patients with ease.</p>
                </li>
                <li>
                    <label>Personalized Care:</label>
                    <p>Use stored histories to provide tailored treatment plans.</p>
                </li>
                <li>
                    <label>Time Efficiency:</label>
                    <p>Reduce paperwork and administrative overhead for staff.</p>
                </li>
                <li>
                    <label>Data Security:</label>
                    <p>Keep patient information safe with secure digital storage.</p>
                </li>
            </ul>
            
            </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap-btm benfits">
      <Container>
        <h2>Benefits of Treatment Planning</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/patient-records.svg' alt="" /></figure>
                            <h3>Centralized Patient Records</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/quick-access.svg' alt="" /></figure>
                            <h3>Quick Access to Information</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/pat-comm.svg' alt="" /></figure>
                            <h3>Better Patient Communication</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/data-storage.svg' alt="" /></figure>
                            <h3>Secure Data Storage</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksPat />
    </div>
    
        <div className='section-wrap other-features'>
            <div className='container'>
            <h2>We also have other features</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/tmtPlanning.svg' alt="" /></figure>
                            <h3>E Prescription</h3>
                            <a href='/features/ePrescription' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/patientMgt.svg' alt="" /></figure>
                            <h3>Lab Management</h3>
                            <a href='/features/lab-management' className='btn-oval'>Know More</a>
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
        <FAQ faqs={patMgtFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default PatientManagement;