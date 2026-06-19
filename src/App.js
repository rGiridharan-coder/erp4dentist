import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './layouts/Header';
import LandingHeader from './layouts/LandingHeader';
import Footer from './layouts/Footer';
import LandingFooter from './layouts/LandingFooter';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfServices from './pages/TermsOfServices';
import RefundAndCancellationPolicy from './pages/RefundAndCancellationPolicy';
import Patient_Management_System from './pages/Patient_Management_System';
import PatientManagementSoftware from './pages/PatientManagementSoftware';
import SearchDentist from './pages/SearchDentist';
import ThankYou from './pages/ThankYou';
import LandingThankYou from './pages/LandingThankYou';
import LoginModal from './components/LoginModal';
import SignUp from './components/SignUp';
import OtpModal from './components/OtpModal';
import { Toaster } from 'react-hot-toast';
import LandingForm from './components/LandingForm';
import Tutorials from './pages/Tutorials';
import AppointmentScheduling from './pages/features/AppointmentScheduling';
import TreatmentPlanning from './pages/features/TreatmentPlanning';
import PatientManagement from './pages/features/PatientManagement';
import DrugCatalog from './pages/features/DrugCatalog';
import EPrescription from './pages/features/EPrescription';
import LabManagement from './pages/features/LabManagement';
import BillingPayments from './pages/features/BillingPayments';
import ReportsAnalytics from './pages/features/ReportsAnalytics';
import UnlimitedUsers from './pages/features/UnlimitedUsers';
// import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [showTrial, setShowTrial] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleLoginOpen = () => setShowLogin(true);
  const handleTrialOpen = () => setShowTrial(true);
  const handleLoginClose = () => setShowLogin(false);
  const handleTrialClose = () => setShowTrial(false);

    const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const landingPages = [
  "/patient-management-system",
  "/patient-management-software",
  "/search-dentist",
  ];

const isLandingPage = landingPages.includes(location.pathname);

  // const isLandingPage = location.pathname === "/patient-management-software";



  return (
    <>
       <Toaster position="top-right" />
      {/* Header based on route */}
      {isLandingPage ? (
        <LandingHeader onSignupClick={handleOpen} />
      ) : (
        <Header onLoginClick={handleLoginOpen} onTrialClick={handleTrialOpen} />
      )}

      <LoginModal show={showLogin} handleClose={handleLoginClose} />
      {/* <OtpModal show={showOtpModal} handleClose={() => setShowOtpModal(false)} /> */}
      <SignUp show={showTrial} handleClose={handleTrialClose} />
       <LandingForm show={showModal} handleClose={handleClose}  />

      {/* Main content */}
      <Routes>
        <Route path="/" element={<Home onTrialClick={handleTrialOpen} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features onTrialClick={handleTrialOpen} />} />
        <Route path="/pricing" element={<Pricing onTrialClick={handleTrialOpen} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-services" element={<TermsOfServices />} />
        <Route path="/refund-and-cancellation" element={<RefundAndCancellationPolicy />} />
        <Route path="/patient-management-system" element={<Patient_Management_System onTrialClick={handleTrialOpen}  />} /> 
        <Route path="/patient-management-software" element={<PatientManagementSoftware onTrialClick={handleTrialOpen}  />} />
        <Route path="/search-dentist" element={<SearchDentist onTrialClick={handleTrialOpen}  />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/landing-thank-you" element={<LandingThankYou />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="*" element={<Home />} />
        <Route path="/features/appointment-scheduling" element={<AppointmentScheduling onTrialClick={handleTrialOpen} />} />
        <Route path="/features/treatment-planning" element={<TreatmentPlanning onTrialClick={handleTrialOpen} />} />
        <Route path="/features/patient-management" element={<PatientManagement onTrialClick={handleTrialOpen} />} />
        <Route path="/features/drug-catalog" element={<DrugCatalog onTrialClick={handleTrialOpen} />} />
        <Route path="/features/ePrescription" element={<EPrescription onTrialClick={handleTrialOpen} />} />
        <Route path="/features/lab-management" element={<LabManagement onTrialClick={handleTrialOpen} />} />
        <Route path="/features/billing-payments" element={<BillingPayments onTrialClick={handleTrialOpen} />} />
        <Route path="/features/reports-analytics" element={<ReportsAnalytics onTrialClick={handleTrialOpen} />} />
        <Route path="/features/unlimited-users" element={<UnlimitedUsers onTrialClick={handleTrialOpen} />} />
        {/* <Route path="/NotFound.jsx" element={<NotFound />} /> */}
      </Routes>

      {/* Footer based on route */}
      {isLandingPage ? <LandingFooter /> : <Footer />}
    </>
  );
}

export default App;
