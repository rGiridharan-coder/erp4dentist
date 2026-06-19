import React, { useState, useEffect, useRef  } from "react";
import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaBars, FaSearch, FaThList, FaThLarge, FaMobileAlt, FaBriefcase, FaDog, FaTshirt, FaBuilding } from "react-icons/fa";
import LandingForm from "../components/LandingForm";
import { Modal, Container,Form, Row, Col, Card, Button, Image } from "react-bootstrap";
import LandingHeader from "../layouts/LandingHeader";
import '../components/SearchDentist.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

const SearchDentist = ({ onTrialClick }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);
  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
   const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");
  const [keyword, setKeyword] = useState("");
   const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

     const [show, setShow] = useState(false);

  // 🔹 Location states
  const [userArea, setUserArea] = useState("");
  const [locError, setLocError] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [areaSuggestions, setAreaSuggestions] = useState([]);

       // Form 2 data
  const [form2Data, setForm2Data] = useState({
    state: "",
    city: "",
  });

  const [form2Cities, setForm2Cities] = useState([]);

 const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showLandingForm, setShowLandingForm] = useState(false);
const [showAppointmentModal, setShowAppointmentModal] = useState(false);

   // Appointment form state
  const [formData, setFormData] = useState({
    ldate: "",
    first_name: "",
    age: "",
    contact_number: "",
    email: "",
    status: "",
    pincode: "",
    reason: "",
  });

   const inputWrapRef = useRef(null);

   const handleSearch = () => {
    alert(`Category: ${category}, Location: ${location}, Keyword: ${keyword}`);
  };

     const handleSelectArea = (area) => {
    setUserArea(area);
    setShowDropdown(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = async () => {
    try {
      const response = await fetch("https://dental.erp4dentist.com/api/appointmentsleads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Appointment saved successfully!");
        handleCloseModal();
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("Failed to save appointment");
    }
  };

  const handleSearchLocation = async (query) => {
  setUserArea(query);
  setShowDropdown(true);

  if (query.length < 3) return; // avoid too many calls

  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?city=${query}&format=json&addressdetails=1&limit=5`
    );
    const data = await res.json();

    const suggestions = data.map((place) => {
      let area =
        place.address.suburb ||
        place.address.neighbourhood ||
        place.address.village ||
        place.address.town ||
        place.address.city ||
        place.display_name.split(",")[0];
      return `${area}, ${place.address.state || place.address.county || ""}`;
    });

    setAreaSuggestions(suggestions);
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
  }
};

 // ✅ “Near Me” – no API key needed (Nominatim)
  const handleNearMe = () => {
    setLocError("");
    if (!navigator.geolocation) {
      setLocError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();

          const a = data.address || {};
          const area =
            a.suburb || a.neighbourhood || a.village || a.town || a.city || a.county || "";
          const city = a.city || a.town || a.village || a.state_district || a.state || "";
          const pretty = [area, city].filter(Boolean).join(", ");

          setUserArea(pretty || "My location");
          setShowDropdown(false);
        } catch (e) {
          setLocError("Failed to fetch location details.");
        }
      },
      (err) => {
        if (err.code === 1) setLocError("Permission denied for location access.");
        else setLocError("Unable to get your location.");
      }
    );
  };



  const handleSearchClick = () => {
  if (!userArea) {
    alert("Please select an area before searching");
    return;
  }

  setLoading(true);

  fetch(`https://testing.erp4dentist.com/api/clinics/search?area=${encodeURIComponent(userArea)}`)
    .then((res) => res.json())
    .then((data) => {
      setItems(data.data.profile);  // API returns already filtered clinics
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching clinics:", err);
      setLoading(false);
    });
};


    // Fetch API data
  useEffect(() => {
    fetch("https://testing.erp4dentist.com/api/clinics")   // <-- change to your API endpoint
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data.profile);  // assuming API returns array of products
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching API:", err);
        setLoading(false);
      });

    
  }, []);

    // close dropdown when clicking outside the input wrapper
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputWrapRef.current && !inputWrapRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Helmet>
        <title>Search Dentist</title>
      </Helmet>

 
      <LandingForm show={showLandingForm} handleClose={() => setShowLandingForm(false)} />

        <div className="hero-container">
      <h1 className="hero-title">Destination for Dental Health</h1>
      <h2 className="hero-subtitle">Find and Book</h2>

       {/* Search Box */}
        <div className="search-box" style={{ position: "relative", overflow: "visible"  }}>
          <div className="search-location" onClick={handleNearMe} style={{ cursor: "pointer" }}>
                  <FaMapMarkerAlt className="icon" />
                  <span>Search Your Location</span>
                </div>
           {/* Wrap the input so dropdown positions directly under it */}
          <div ref={inputWrapRef} style={{ position: "relative", flex: 1 }}>
            <input
              type="text"
              name="search-location"
              placeholder="Search Location"
              className="search-input"
              value={userArea}
              onChange={(e) => handleSearchLocation(e.target.value)}
              onFocus={() => setShowDropdown(true)}
            />

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderTop: "none",
                  zIndex: 1000,
                  maxHeight: 260,
                  overflowY: "auto",
                  color: "black",
                  borderRadius: "0 0 6px 6px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    padding: "12px 14px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                  onClick={handleNearMe}
                >
                  📍 Use my location
                </div>

                {areaSuggestions
                  .filter((a) => a.toLowerCase().includes(userArea.toLowerCase()))
                  .map((a, i) => (
                    <div
                      key={i}
                      style={{ padding: "12px 14px", cursor: "pointer", borderTop: "1px solid #f1f1f1" }}
                      onClick={() => handleSelectArea(a)}
                    >
                      {a}
                    </div>
                  ))}

                {locError && (
                  <div style={{ padding: "12px 14px", color: "red" }}>{locError}</div>
                )}
              </div>
            )}
          </div>
           <button type="button" class="btn btn-outline-primary"  onClick={handleSearchClick}>Search</button> 
        </div>
     

      </div>

      {/* WhatsApp Floating Button */}
      <div
        className="sticky whatsapp"
        onClick={() => window.open("https://wa.me/918056437743", "mywindow")}
      ></div>

  


     <Container className="mt-4">
      <Row>
        {items.map((item, index) => (
          <Col xs={12} key={index} className="mb-4">
            <Card className="h-100 search-den-bx">
              <Card.Img
                variant="top"
                src={
                      item.image
                        ? `https://dental.erp4dentist.com/hospital_logo/${item.image}`
                        : "images/10130.jpg"
                    }
                alt={item.hospitalname}
                style={{ height: "150px", objectFit: "contain", padding: "10px" }}
              />
              <Card.Body>
                <div className="item-desc">
                <Card.Title>{item.hospitalname}</Card.Title>
                <Card.Text>
                  <strong>📍 Location:</strong> {item.branchname} <br />
                  {/* <strong>📞 Phone:</strong> {item.phoneNumber} <br /> */}
                  <strong>🌍 Address:</strong> {item.city} | {item.state} | {item.pincode}
                </Card.Text>
                <div className="d-flex flex-ai-center">
                  <div className="tag"><Image src='/images/tag-asured.png' alt="" fluid /></div>
                  <div className="tag-rt-txt">{item.hospitalname}</div>
                </div>
                {/* <p className="fee">₹200 Consultation fee at clinic</p> */}
                {/* <div className="story-wrap">
                  <div className="o-label--success"><Image src='/icons/ic-like.png' alt="" /> 98%</div>
                  <div className="story-in"><a href="#">369 Patient Stories</a></div>
                </div> */}
                </div>
                <div className="apt-sec">
                <div className="calendar-bx">
                  <div className="ic-cal"></div><div className="ic-txt">Available Today</div>
                  </div>
                  <Button variant="outline-primary"  onClick={() => setShowAppointmentModal(true)} >Add Appointment</Button>                
                </div>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">{item.views} views</small>
              </Card.Footer> */}
            </Card>
          </Col>
        ))}
      </Row>

    </Container>

      {/* Appointment Modal */}
      <Modal show={showAppointmentModal} onHide={() => setShowAppointmentModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment for?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={4}>
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="ldate" onChange={handleChange} />
              </Col>

                    <Col md={4}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                />
                <Form.Control
                  type="hidden"
                  name="status"
                  value="0"
                />
              </Col>

                 <Col md={4}>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  onChange={handleChange}
                />
              </Col>

            
            </Row>



            <Row className="mb-3">
       
              <Col md={4}>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contact_number"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </Col>

                  <Col md={4}>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="pincode"
                  name="pincode"
                  onChange={handleChange}
                />
              </Col>

            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Label>Reason for Appointment</Form.Label>
                <Form.Control
                  type="text"
                  name="reason"
                  placeholder="Checkup"
                  onChange={handleChange}
                />
              </Col>
            </Row>

       
          </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAppointmentModal(false)}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Save Appointment
        </Button>
        </Modal.Footer>
      </Modal>

    
<div style={{ display: 'flex', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      {/* <div style={{ width: '250px', padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h3>ALL CATEGORIES</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {categories.map((cat, idx) => (
            <li key={idx} style={{ margin: '8px 0' }}>
              📦 {cat.name} ({cat.count})
            </li>
          ))}
        </ul>
      </div> */}

    
    </div>
  


    </>
  );
};

export default SearchDentist;
