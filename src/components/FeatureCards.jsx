import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const data = [
  {
    id: "appointment-scheduling",
    title: "Appointment Scheduling",
    description: "ERP4 Dentist offers seamless appointment scheduling with its intuitive calendar interface. Dentists and staff can quickly book, reschedule, or cancel appointments with just a few clicks. The smart scheduling system helps avoid overlaps and improves clinic efficiency.",
    image: "/images/apt-scheduling.webp",
    link: "/features/appointment-scheduling"
  },
  {
    id: "treatment-planning",
    title: "Treatment Planning",
    description: "ERP4 Dentist simplifies treatment planning with its integrated EMR system. Dentists can effortlessly create and track personalised treatment plans directly from patient records. Clinical notes and procedure history are easily accessible, addressing the patient's needs, all in one platform.",
    image: "/images/treatment-planning.webp",
    link: "/features/treatment-planning"
  },
  {
    id: "patient-management",
    title: "Patient Management",
    description: "ERP4 Dentist streamlines patient management with a centralised system for storing and accessing all patient information. From demographics and medical history to visit records and billing, all your patients’ data is organised and easy to manage. The intuitive interface ensures quick navigation, delivering a seamless experience for all levels of staff in your clinic.",
    image: "/images/patient-mgt.webp",
    link: "/features/patient-management"
  },
  {
    id: "drug-catalog",
    title: "Drug Catalog",
    description: "ERP4 Dentist features a customisable drug catalogue module, making it easy for dentists to add and manage medications used in their clinic. The intuitive interface allows quick entry, categorisation, and updates of drugs. This ensures accurate prescriptions, streamlines treatment workflows, and tailors the catalogue to each clinic’s unique needs.",
    image: "/images/drug-catalog.webp",
    link: "/features/drug-catalog"
  },
  {
    id: "e-prescription",
    title: "E-Prescription",
    description: "ERP4 Dentist simplifies e-prescription creation with an easy-to-use digital interface. Doctors can quickly generate prescriptions with their digital signatures, ensuring accuracy and authenticity. Prescriptions can be instantly shared with patients via email or WhatsApp, enhancing convenience, reducing errors, and streamlining communication between the clinic and the patient.",
    image: "/images/ePrescription.webp",
    link: "/features/ePrescription"
  },
  {
    id: "lab-management",
    title: "Lab Management",
    description: "ERP4 Dentist streamlines lab management by allowing users to add and manage multiple labs with ease. Track lab orders, monitor progress, and record payouts, all under one dashboard. The system ensures transparency, improves coordination, and simplifies financial tracking, making lab-related workflows efficient and error-free for dental practices.",
    image: "/images/lab-mgt.webp",
    link: "/features/lab-management"
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    description: "ERP4 Dentist makes billing and payments effortless with its user-friendly module. Generate invoices and track payments seamlessly, thereby ensuring accuracy and transparency. Capture payment advice made by your patients for treatments, making transactions smooth and efficient for both dentists and their patients.",
    image: "/images/billing-payments.webp",
    link: "/features/billing-payments"
  },
  {
    id: "reports-analytics",
    title: "Reports & Analytics",
    description: "ERP4 Dentist offers a powerful yet easy-to-use reports and analytics module. Generate detailed insights on appointments, treatments, revenue, and patient trends with just a few clicks. Customisable dashboards and real-time data help clinics make informed decisions, track performance, and improve efficiency, ensuring smarter management and better patient care.",
    image: "/images/reports-analytics.webp",
    link: "/features/reports-analytics"
  },
  {
    id: "unlimited-users",
    title: "Unlimited Users",
    description: "ERP4 Dentist supports unlimited user logins, making multi-location and multi-doctor management effortless. Easily create and manage logins for multiple doctors and staff across various clinics. Role-based access ensures secure data handling, while the centralised system enables smooth collaboration, real-time updates, and efficient workflow for the entire dental practice.",
    image: "/images/unlimited-users.webp",
    link: "/features/unlimited-users"
  }
];

const FeatureCards = () => {
  return (
    <Container className="features">
      
      {data.map((item, index) => (
<Row
  key={index}
  id={item.id} // This allows scroll to this section
  className={`align-items-center my-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
>

        {/* <Row 
          id={item.id} 
          key={item.id || index} 
          className={`align-items-center my-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
        > */}
          <Col md={5}>
            <img src={item.image} alt={item.title} className="img-fluid rounded" />
          </Col>
          <Col md={7}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          <Link to={item.link} className="nl mt-3">Know More</Link>
                     {/*  <a
            href={item.link}
            className="nl mt-3"
            onClick={(e) => {
              e.preventDefault(); 
              const el = document.getElementById(item.id); // 🔍 Find the section
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' }); // ✅ Smooth scroll to it
              }
            }}
          >
            Know More
          </a>*/}

          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default FeatureCards;
