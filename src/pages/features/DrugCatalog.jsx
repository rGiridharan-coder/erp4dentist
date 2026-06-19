import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { drugFaq } from '../../data/drugFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksDrug from '../../components/WorksDrug';
// import GetInTouch from '../../components/GetInTouch';
import GetInTouchModal from '../../components/GetInTouchModal';

const DrugCatalog = ({ onTrialClick }) => {    

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
        <title>Dental Drug Catalog Software | Medication Records</title>
        <meta name="description" content="A trusted dental drug catalog software solution that helps clinics maintain up-to-date drug references and consistent standards." />
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
                                <h2>Dental Drug Catalog</h2>
                                <p>Smart Drug Catalog for Dentists</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/a3_vSzNnhCU?si=uk8gZK_uZ-5DGTsH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Drug Catalog</h2>
        <p className='fw-bold text-center'>Centralised drug catalog for faster, safer prescriptions</p>
        <p className='small text-center'>ERP4 Dentist provides a well-structured drug catalog that simplifies prescription writing and reduces errors. Dentists can access updated medication details and dosage guidelines instantly, ensuring accurate prescriptions and enhanced patient safety.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_drugCat.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Drug Catalog Helps You</h2>
            <ul>
                <li>
                    <label>Centralised Database:</label>
                    <p>Access all medicines and drug details in one place.</p>
                </li>
                <li>
                    <label>Faster Prescriptions:</label>
                    <p>Quickly search and select drugs while writing prescriptions.</p>
                </li>
                <li>
                    <label>Error Reduction:</label>
                    <p>Minimise mistakes with accurate drug names and dosage references.</p>
                </li>
                <li>
                    <label>Standardisation:</label>
                    <p>Ensure consistency in prescriptions across the clinic.</p>
                </li>
                <li>
                    <label>Improved Patient Safety:</label>
                    <p>Right drug, right dosage, every time.</p>
                </li>
                <li>
                    <label>Time-Saving:</label>
                    <p>Reduce manual lookup and speed up the prescription process.</p>
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
                            <h3>Centralised Drug Database</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Faster Prescription Writing</h3>
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
                            <h3>Enhanced Patient Safety</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksDrug />
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
        <FAQ faqs={drugFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default DrugCatalog;