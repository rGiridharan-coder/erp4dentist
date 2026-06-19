import { useState, useRef } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import toast from 'react-hot-toast';
import Loader from './Loader';
import './components.css';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ show, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);

 const phoneAuth = async () => {
  setLoading(true);
  const mobileNumber = document.getElementById("mobileNumber").value.trim();

  if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
    toast.error("Invalid 10-digit Indian mobile number.");
    setLoading(false);
    return;
  }

  try {
    const formData = new FormData();
    formData.append("pnumber", mobileNumber);
    const response = await fetch("https://api.erp4dentist.com/api/checkphone", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.data === "1") {
      toast.error("Mobile Number Already Registered.");
      setLoading(false);
      return;
    }

    const otpValue = generateOtp(); // 👈 your own function to generate 6-digit OTP
    setGeneratedOtp(otpValue);
    // setOtp(otpValue.split(""));

    // setOtp(["", "", "", "", "", ""]); // clears the inputs

    // ✅ Call your PHP backend proxy instead of Gallabox directly
    const sendOtpFormData = new FormData();
    sendOtpFormData.append("phone", mobileNumber);
    sendOtpFormData.append("otp", otpValue);

    const gallaboxRes = await fetch("https://api.erp4dentist.com/api/sendotp", {
      method: "POST",
      body: sendOtpFormData
    });

 

    const gallaboxResult = await gallaboxRes.json();

    console.log("Gallabox Response:", gallaboxResult); // Debug log



    if (gallaboxResult.status === true) {
      toast.success("OTP Sent via WhatsApp");
      document.getElementById("send").style.display = "none";
      document.getElementById("asideinput").style.display = "flex";
      document.getElementById("verify").style.display = "flex";
    } else {
      throw new Error("Gallabox OTP not sent");
    }

  } catch (error) {
    toast.error("Failed to send OTP");
  }

  setLoading(false);
};

  const codeverify = () => {
    setLoading(true);
    const enteredOtp = otp.join("").trim();

    if (enteredOtp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
    } else if (enteredOtp === generatedOtp) {
      toast.success("OTP Verified");
      document.getElementById("verify").style.display = "none";
      document.getElementById("validation").style.display = "flex";
      document.getElementById("mobileNumber").readOnly = true;
      document.getElementById("asideinput").style.display = "none";
    } else {
      toast.error("Incorrect OTP");
    }

    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.erp4dentist.com/api/registertrial", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result === "Email Already Registered") {
        toast.error(result);
        document.getElementById("hospitalEmail").classList.add("is-invalid");
      } else if (result === "Mobile Number Already Registered") {
        toast.error(result);
        document.getElementById("mobileNumber").classList.add("is-invalid");
      } else {
        toast.success("Registration Successful!");
        form.reset();
        document.getElementById("validation").style.display = "none";
        document.getElementById("send").style.display = "block";
        handleClose();
        navigate('/landing-thank-you');
      }
    } catch (error) {
      toast.error("Form submission failed");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Signup and OTP Verification</Modal.Title>
      </Modal.Header>

      <Modal.Body className="signin signup">
        <Row>
          <Col md={6}>
            <div className="sign-leftPanel blue-bg">
              <h2>Transform the Way You Manage Your Clinic</h2>
              <p>Join hundreds of dentists using ERP4Dentist to streamline your practice today!</p>
              <figure>
                <Image src="/images/popup-created-dentist.webp" alt="" fluid />
              </figure>
            </div>
          </Col>

          <Col md={6}>
            <Form id="registrationForm">
              <h3>Signup for a 30 day free trial!</h3>
              <p>Already have an account? <a href='https://dental.erp4dentist.com/login' target='_blank'>Log in</a></p>

              <Form.Group className="mb-3">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control type="text" id="username" name="username" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <input type="tel" id="mobileNumber" className="form-control" name="mobileNumber" placeholder="Mobile Number" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <input type="email" className="form-control" id="hospitalEmail" name="hospitalEmail" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3 password-field">
                <Form.Label>Create Password</Form.Label>
                <div className="position-relative">
                  <input type={showPassword ? "text" : "password"} className="form-control" id="password" name="password" value={password} onChange={handlePasswordChange} />
                  <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeSlash /> : <Eye />}
                  </span>
                </div>
              </Form.Group>

              <p className="small">Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <Form.Check type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} label={<>By creating an account, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.</>} />

              <button type="button" id="validation" className="btn btn-primary" style={{ display: "none" }} onClick={handleSubmit}>Submit</button>

              <Button variant="sub" type="button" id="send" className="mt-3 w-100" onClick={phoneAuth}>Get OTP and Continue</Button>

              <div className="otp-section" id="asideinput" style={{ display: "none" }}>
                <h3>Verify Your Mobile Number</h3>
                <p className="mb-3">We've sent a 6-digit code to your mobile.</p>

                <div className="col-md-12">
                  <aside>
                    {otp.map((value, index) => (
                      <input key={index} type="text" maxLength={1} value={value} onChange={(event) => handleChange(index, event)} onKeyDown={(event) => handleKeyDown(index, event)} ref={(el) => inputsRef.current[index] = el} autoFocus={index === 0} placeholder="_" className="otp-input" />
                    ))}
                  </aside>
                  <input type="text" className="form-control" id="verificationcode" value={otp.join("")} readOnly placeholder="OTP Code" style={{ display: "none" }} />
                </div>

                <Button variant="primary" className="w-100" id="verify" style={{ display: "none" }} onClick={codeverify}>Verify</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;