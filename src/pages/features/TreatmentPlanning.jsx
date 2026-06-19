import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { tmtPlanFaq } from '../../data/tmtPlanFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksTmt from '../../components/WorksTmt';
import GetInTouchModal from '../../components/GetInTouchModal';

const TreatmentPlanning = ({ onTrialClick }) => {

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
        <title>Dental Treatment Planning Software | Reduce Errors</title>
        <meta name="description" content="Avoid inconsistencies and missed details. Dental treatment planning software built for accurate, reliable, and consistent clinical planning." />
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
                                <h2>Dental Treatment Planning Software</h2>
                                <p>We simplify treatment plans personalised to your needs.</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/o-5AKLIgLkM?si=Eu8SlRN4VjUYqmV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Cloud-based Treatment Planning</h2>
        <p className='fw-bold text-center'>Streamline treatment planning with clarity and precision for better patient outcomes</p>
        <p className='small text-center'>ERP4 Dentist empowers dentists to create structured, personalised treatment plans with complete transparency. From diagnosis to procedure sequencing, track progress, share details with patients, and ensure informed decisions, making every treatment journey smooth and effective.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_tmtPlan.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Treatment Planning Helps You</h2>
            <ul>
                <li>
                    <label>Personalised Care Plans:</label>
                    <p>Tailor treatments based on each patient's unique needs.</p>
                </li>
                <li>
                    <label>Clear Procedure Sequencing:</label>
                    <p>Organise treatments step-by-step for better execution.</p>
                </li>
                <li>
                    <label>Progress Tracking:</label>
                    <p>Easily monitor completed and pending procedures.</p>
                </li>
                <li>
                    <label>Time & Cost Efficiency:</label>
                    <p>Avoid duplication of work and optimise resources.</p>
                </li>
                <li>
                    <label>Multi-Doctor Collaboration:</label>
                    <p>Enable smooth coordination between specialists within the clinic.</p>
                </li>
                <li>
                    <label>Data-Driven Decisions:</label>
                    <p>Access insights to refine treatment strategies and outcomes.</p>
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
                            <figure><Image src='/icons/easyScheduling.svg' alt="" /></figure>
                            <h3>Personalized Care</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Structured Workflow</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/optimizedClinic.svg' alt="" /></figure>
                            <h3>Progress Tracking</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/smartInsights.svg' alt="" /></figure>
                            <h3>Multi-Doctor Collaboration</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksTmt />
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
        <FAQ faqs={tmtPlanFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default TreatmentPlanning;