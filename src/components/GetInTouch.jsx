import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast  from 'react-hot-toast';
import Loader from './Loader';

function GetInTouch() {
  const [formData, setFormData] = useState({
    usname: "",
    usmobile: "",
    usemail: "",
    message: "", // ✅ New field added
  });

  const [errors, setErrors] = useState({
    usname: "",
    usmobile: "",
    usemail: "",
    message: "", // keep for future use if needed
  });

  const [loadloading, setLoadloading] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateIndianPhoneNumber = (number) => /^[6-9]\d{9}$/.test(number);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadloading(true);

    const newErrors = { usname: "", usmobile: "", usemail: "", message: "" };
    let isValid = true;

    if (!formData.usname) {
      newErrors.usname = "User Name is required.";
      isValid = false;
    }

    if (!formData.usmobile || !validateIndianPhoneNumber(formData.usmobile)) {
      newErrors.usmobile = "Mobile number must be 10 digits and start with 6-9.";
      isValid = false;
    }

    if (!formData.usemail || !validateEmail(formData.usemail)) {
      newErrors.usemail = "Please enter a valid email address.";
      isValid = false;
    }

    // ✅ No validation required for message (it's optional)

    if (!isValid) {
      setErrors(newErrors);
      setLoading(false);
      setLoadloading(false);
      return;
    }

    try {
      const response = await fetch("https://erp4dentist.com/contact_next.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        toast.success('Thank you for your interest in ERP4Dentist! Our representative will reach out shortly.');
        setFormData({ usname: "", usmobile: "", usemail: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Network error. Please try again later.");
    }

    setLoadloading(false);
    setLoading(false);
  };

  return (
     
    <form id="getindemo" onSubmit={handleSubmit}>
           {loadloading && <Loader />}
      <div className="mb-4">
        <input
          type="text"
          className={`form-control ${errors.usname ? "is-invalid" : ""}`}
          placeholder="Name"
          name="usname"
          value={formData.usname}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.usname}</div>
      </div>

      <div className="mb-4">
        <input
          type="tel"
          className={`form-control ${errors.usmobile ? "is-invalid" : ""}`}
          placeholder="Mobile"
          name="usmobile"
          value={formData.usmobile}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.usmobile}</div>
      </div>

      <div className="mb-4">
        <input
          type="email"
          className={`form-control ${errors.usemail ? "is-invalid" : ""}`}
          placeholder="Email ID"
          name="usemail"
          value={formData.usemail}
          onChange={handleChange}
        />
        <div className="invalid-feedback">{errors.usemail}</div>
      </div>

      <div className="mb-4">
        <textarea
          className="form-control"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <motion.button
        type="submit"
        className="btn btn-primary ussubmit px-4 py-2 text-sm"
        disabled={loading}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {loading ? "Submitting..." : "Submit"}
      </motion.button>
    </form>
  );
}

export default GetInTouch;
