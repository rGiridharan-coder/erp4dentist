import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { epresFaq } from '../../data/epresFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksEpres from '../../components/WorksEpres';
import GetInTouchModal from '../../components/GetInTouchModal';

const EPrescription = ({ onTrialClick }) => {

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
        <title>Dental e-Prescription Software | Secure Prescribing</title>
        <meta name="description" content="Create, manage, and track prescriptions digitally. Improve speed, reduce paperwork, and simplify prescribing workflows for clinics." />
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
                                <h2>Electronic Dental Prescription Management software</h2>
                                <p>Go Paperless with E-Prescriptions</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/ubPxjHUnWys?si=pDBTntf1S44NRM7H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Electronic Prescription Management Software</h2>
        <p className='fw-bold text-center'>Go paperless with secure, hassle-free digital prescriptions.</p>
        <p className='small text-center'>ERP4 Dentist enables dentists to generate and share prescriptions digitally in just a few clicks. With instant access to drug catalogues, dosage details, and patient records, e-prescriptions reduce errors, save time, and ensure safe and eco-friendly prescription management.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_ePrescpt.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How E-Prescriptions Help You</h2>
            <ul>
                <li>
                    <label>Paperless Convenience:</label>
                    <p>Eliminate handwritten prescriptions and go fully digital.</p>
                </li>
                <li>
                    <label>Time-Saving:</label>
                    <p>Generate and share prescriptions in just a few clicks.</p>
                </li>
                <li>
                    <label>Error Reduction:</label>
                    <p>Minimise mistakes with standardised drug names and dosage details.</p>
                </li>
                <li>
                    <label>PInstant atient Access:</label>
                    <p>Patients receive prescriptions via WhatsApp and email.</p>
                </li>
                <li>
                    <label>Secure Records:</label>
                    <p>Store and retrieve prescriptions safely within patient files.</p>
                </li>
                <li>
                    <label>Improved Patient Safety:</label>
                    <p>Ensure accuracy and clarity for better</p>
                </li>
            </ul>
            
            </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap-btm benfits">
      <Container>
        <h2>Benefits of E-Prescription</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/easyScheduling.svg' alt="" /></figure>
                            <h3>Paperless Convenience</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Quick & Easy</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/optimizedClinic.svg' alt="" /></figure>
                            <h3>Error-Free Prescriptions</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/smartInsights.svg' alt="" /></figure>
                            <h3>Secure & Accessible Records</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksEpres />
    </div>
    
        <div className='section-wrap other-features'>
            <div className='container'>
            <h2>We also have other features</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/tmtPlanning.svg' alt="" /></figure>
                            <h3>Reports and Analytics</h3>
                            <a href='/features/reports-analytics' className='btn-oval'>Know More</a>
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
                            <figure><Image src='/icons/billing-payment3.svg' alt="" /></figure>
                            <h3>Billing and Payments</h3>
                            <a href='/features/billing-payments' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                </Row>
                <div className='btn-wrap'><a href='/features' className='btn-oval big'>Discover All Features</a></div>
            </div>
        </div>
    <div className="section-wrap ash-bg">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={epresFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default EPrescription;