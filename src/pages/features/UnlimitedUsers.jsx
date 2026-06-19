import React, { useState, useEffect,  useRef  } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs";
import FAQ from '../../components/Faq'
import { unltdFaq } from '../../data/unltdFaq';
import Header from '../../layouts/Header';
import { Helmet } from 'react-helmet';
import SmarterDental from '../../components/SmarterDental';
import WorksUnltd from '../../components/WorksUnltd';
import GetInTouchModal from '../../components/GetInTouchModal';

const UnlimitedUsers = ({ onTrialClick }) => {

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
        <title>Dental Unlimited User Access Software | No User Limits</title>
        <meta name="description" content="Eliminate per-user costs with dental unlimited user access software that gives full system access to your entire dental team." />
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
                                <h2>Keyword</h2>
                                <p>Unlimited logins, seamless access</p>
                                <div className="btn-wrap">
                                    <a className='btnRad blue mr20' href='#' onClick={handleDemoClick}>Schedule Demo</a>
                                    <a className='btnRad wht' href='/contact'>Contact Us</a>
                                </div>
                            </Col>
                            <Col lg={5} className='text-center'>
                            <figure><iframe width="100%" height="315" src="https://www.youtube.com/embed/9iqI7sB5EHo?si=fuS0mAVVDrH2CKKH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></figure>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
    <div className="section-wrap features cloud">
      <Container>
        <h2 className='text-center'>Unlimited Users</h2>
        <p className='fw-bold text-center'>Add unlimited doctors and staff without extra cost.</p>
        <p className='small text-center'>ERP4 Dentist enables clinics to create an unlimited number of user accounts, making it easy to onboard doctors, assistants, and administrative staff. With flexible access controls, every team member can collaborate efficiently while the clinic grows, without worrying about added subscription charges.</p>
      </Container>
    </div>

    <div className="section-wrap helpsU">
      <Container>
        <Row className='align-items-center'>
            <Col lg={6}>
                <figure><Image src='/images/helpsU_unltd.png' alt="" fluid /></figure>
            </Col>
            <Col lg={6}>
            <h2 className='text-left'>How Unlimited Users Help You</h2>
            <ul>
                <li>
                    <label>Enables Teamwide Access:</label>
                    <p>Every member of your dental practice can have their own login.</p>
                </li>
                <li>
                    <label>Supports Clinic Growth:</label>
                    <p>Add new users anytime without worrying about extra license costs or user limits.</p>
                </li>
                <li>
                    <label>Improves Accountability:</label>
                    <p>Track activities and maintain clear accountability across your team.</p>
                </li>
                <li>
                    <label>Streamlines Operations:</label>
                    <p>Billing and clinical teams can work simultaneously in the system without bottlenecks.</p>
                </li>
                <li>
                    <label>Enhances Data Security:</label>
                    <p>Each user can have role-based permissions, ensuring that sensitive data is only accessible to authorized staff.</p>
                </li>
                <li>
                    <label>Promotes Multi-Clinic Management:</label>
                    <p>Each branch can have its own set of users under a single ERP4 Dentist account.</p>
                </li>
            </ul>
            
            </Col>
        </Row>
      </Container>
    </div>
    <div className="section-wrap-btm benfits">
      <Container>
        <h2>Benefits of Unlimited Users</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/easyScheduling.svg' alt="" /></figure>
                            <h3>Team collaboration</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/automated.svg' alt="" /></figure>
                            <h3>Role based access</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/optimizedClinic.svg' alt="" /></figure>
                            <h3>Activity tracking</h3>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className='bx shd  text-center'>
                            <figure><Image src='/icons/smartInsights.svg' alt="" /></figure>
                            <h3>Scalable growth</h3>
                        </div>
                    </Col>
                </Row>
       </Container>
    </div>

    <div className="section-wrap ash-bg howWorks">
        <h2>How it works</h2>
        <WorksUnltd />
    </div>
    
        <div className='section-wrap other-features'>
            <div className='container'>
            <h2>We also have other features</h2>
                <Row className='justify-content-center'>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/tmtPlanning.svg' alt="" /></figure>
                            <h3>Treatment Planning</h3>
                            <a href='/features/treatment-planning' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/patientMgt.svg' alt="" /></figure>
                            <h3>Appointment scheduling</h3>
                            <a href='/features/appointment-scheduling' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                    <Col lg={3} md={4}>
                        <div className='bx shd text-center'>
                            <figure><Image src='/icons/unlimited-users.svg' alt="" /></figure>
                            <h3>Patient Management</h3>
                            <a href='/features/patient-management' className='btn-oval'>Know More</a>
                        </div>
                    </Col>
                </Row>
                <div className='btn-wrap'><a href='/features' className='btn-oval big'>Discover All Features</a></div>
            </div>
        </div>
    <div className="section-wrap ash-bg">
        <h2>Frequently Asked Questions</h2>
        <FAQ faqs={unltdFaq} />
    </div>
    <div className='section-wrap'>
        <SmarterDental onTrialClick={onTrialClick}/>
    </div>
    <GetInTouchModal show={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default UnlimitedUsers;