import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Loader from './Loader';

function SendMsg() {
  const [formData, setFormData] = useState({
    fullname: "",
    clinicname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    clinicname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadloading, setLoadloading] = useState(false);

  const validateIndianPhoneNumber = (number) => /^[6-9]\d{9}$/.test(number);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadloading(true);

    const newErrors = {
      fullname: "",
      clinicname: "",
      phone: "",
      email: "",
      message: "",
    };

    let isValid = true;

    if (!formData.fullname) {
      newErrors.fullname = "Full Name is required.";
      isValid = false;
    }

    if (!formData.clinicname) {
      newErrors.clinicname = "Clinic Name is required.";
      isValid = false;
    }

    if (!formData.phone || !validateIndianPhoneNumber(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits and start with 6-9.";
      isValid = false;
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Optional: message validation can be added here if needed

    if (!isValid) {
      setErrors(newErrors);
      setLoading(false);
      setLoadloading(false);
      return;
    }

    try {
      const response = await fetch("https://erp4dentist.com/contactformreact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          usname: formData.fullname,
          usclinic: formData.clinicname,
          usmobile: formData.phone,
          usemail: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (response.ok) {
        toast.success('Thank you for your interest in ERP4Dentist! Our representative will reach out shortly.');
        setFormData({
          fullname: "",
          clinicname: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please try again later.");
    }

    setLoading(false);
    setLoadloading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {loadloading && <Loader />}
      <h2>Send Us a Message</h2>
      <p>Have a question or need support? Send us a message.</p>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name*</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              isInvalid={!!errors.fullname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullname}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Clinic Name*</Form.Label>
            <Form.Control
              type="text"
              name="clinicname"
              value={formData.clinicname}
              onChange={handleChange}
              isInvalid={!!errors.clinicname}
            />
            <Form.Control.Feedback type="invalid">
              {errors.clinicname}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number*</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>

        <Col md={12}>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <p className="small">
        Note: We are committed to your privacy. ERP4 Dentist uses your contact information to contact you about our products and services.
      </p>

      <Button variant="btn btn-sub" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </Button>
    </Form>
  );
}

export default SendMsg;
