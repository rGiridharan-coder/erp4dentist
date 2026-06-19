import { useEffect, useRef, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col } from "react-bootstrap";

export default function AptTab() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  const [activeHeading1, setActiveHeading1] = useState("t1sec1");
  const [activeHeading2, setActiveHeading2] = useState("t2sec1");
  const [activeHeading3, setActiveHeading3] = useState("t3sec1");

  const [imgVisible1, setImgVisible1] = useState(true);
  const [imgVisible2, setImgVisible2] = useState(true);
  const [imgVisible3, setImgVisible3] = useState(true);

  // ----- IMAGE SOURCES -----
  const tab1Images = {
    t1sec1: "/images/works_aptSchd_t11.png",
    t1sec2: "/images/works_aptSchd_t12.png",
    t1sec3: "/images/works_aptSchd_t13.png",
  };

  const tab2Images = {
    t2sec1: "/images/works_aptSchd_t21.png",
    t2sec2: "/images/works_aptSchd_t22.png",
    t2sec3: "/images/works_aptSchd_t23.png",
  };

  const tab3Images = {
    t3sec1: "/images/works_aptSchd_t31.png",
    t3sec2: "/images/works_aptSchd_t32.png",
  };

  // ----- CONTENT ARRAYS -----
  const tab1Content = [
    { id: "t1sec1", title: "1", description: "Click on the calendar on the required appointment date." },
    { id: "t1sec2", title: "2", description: "Fill out the Appointment booking form, which displays on a single click on the calendar. Fill in the details. Click 'Book Appointment' to confirm." },
    { id: "t1sec3", title: "3", description: "Appointment confirmation is displayed on the calendar by just hovering over the entry. Patient and Doctor receive appointment confirmation messages through WhatsApp and Email." },
  ];

  const tab2Content = [
    { id: "t2sec1", title: "1", description: "Hover over the confirmed appointment on the calendar. Click 'Edit' to reschedule the appointment." },
    { id: "t2sec2", title: "2", description: "'Update Appointment Info' form opens up. Make changes and click 'Update" },
    { id: "t2sec3", title: "3", description: "Rescheduled Appointment displayed on the calendar by just hovering over the entry. Patient and Doctor receive appointment reschedule messages through WhatsApp and Email." },
  ];

  const tab3Content = [
    { id: "t3sec1", title: "1", description: "Hover over the confirmed appointment on the calendar. Click 'Delete' to cancel the appointment." },
    { id: "t3sec2", title: "2", description: "Appointment deleted from the database. Patient and Doctor receive appointment cancellation messages through WhatsApp and Email." },
  ];

  // ----- FADE IMAGE EFFECT -----
  const fadeEffect = (setImgVisible) => {
    setImgVisible(false);
    const timer = setTimeout(() => setImgVisible(true), 50);
    return () => clearTimeout(timer);
  };

  useEffect(() => fadeEffect(setImgVisible1), [activeHeading1]);
  useEffect(() => fadeEffect(setImgVisible2), [activeHeading2]);
  useEffect(() => fadeEffect(setImgVisible3), [activeHeading3]);

  // ----- SCROLL LOGIC -----
  const initScrollLogic = (box, setActiveHeading) => {
    if (!box) return;
    const headings = box.querySelectorAll("h3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHeading(entry.target.id);
        });
      },
      { root: box, rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = box.scrollTop;

      if (box.scrollTop + box.clientHeight >= box.scrollHeight - 5) {
        setActiveHeading(headings[headings.length - 1].id);
        return;
      }

      if (st < lastScrollTop) {
        let closest = null;
        let minDist = Infinity;
        headings.forEach((h) => {
          const rect = h.getBoundingClientRect();
          const boxRect = box.getBoundingClientRect();
          const dist = Math.abs(rect.top - boxRect.top);
          if (dist < minDist) {
            closest = h;
            minDist = dist;
          }
        });
        if (closest) setActiveHeading(closest.id);
      }

      lastScrollTop = st;
    };

    box.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      box.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(() => initScrollLogic(scrollRef1.current, setActiveHeading1), []);
  useEffect(() => initScrollLogic(scrollRef2.current, setActiveHeading2), []);
  useEffect(() => initScrollLogic(scrollRef3.current, setActiveHeading3), []);

  return (
    <Container className="mt-4">
      <Tabs defaultActiveKey="tab1">
        {/* TAB 1 */}
        <Tab eventKey="tab1" title="Appointment Booking">
          <Row className="mt-3">
            <Col lg={6}>
             <figure>
                <img
                  src={tab1Images[activeHeading1] || "/images/default.jpg"}
                  alt="Section visual"
                  className={`img-fluid fade-img ${imgVisible1 ? "show" : ""}`}
                />
              </figure>
            </Col>
            <Col lg={6}>
              <div className="scroll-box" ref={scrollRef1}>
                {tab1Content.map((item) => (
                  <div className="cnt-wrap" key={item.id}>
                    <h3 id={item.id} className={activeHeading1 === item.id ? "active-heading" : ""}>
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Tab>

        {/* TAB 2 */}
        <Tab eventKey="tab2" title="Appointment Rescheduling">
          <Row className="mt-3">
            <Col lg={6}>
             <figure>
              <img
                src={tab2Images[activeHeading2] || "/images/default.jpg"}
                alt="Section visual"
                className={`img-fluid fade-img ${imgVisible2 ? "show" : ""}`}
              />
              </figure>
            </Col>
            <Col lg={6}>
              <div className="scroll-box" ref={scrollRef2}>
                {tab2Content.map((item) => (
                  <div className="cnt-wrap" key={item.id}>
                    <h3 id={item.id} className={activeHeading2 === item.id ? "active-heading" : ""}>
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Tab>

        {/* TAB 3 */}
        <Tab eventKey="tab3" title="Appointment Cancellation">
          <Row className="mt-3">
            <Col lg={6}>
             <figure>
              <img
                src={tab3Images[activeHeading3] || "/images/default.jpg"}
                alt="Section visual"
                className={`img-fluid fade-img ${imgVisible3 ? "show" : ""}`}
              />
              </figure>
            </Col>
            <Col lg={6}>
              <div className="scroll-box" ref={scrollRef3}>
                {tab3Content.map((item) => (
                  <div className="cnt-wrap" key={item.id}>
                    <h3 id={item.id} className={activeHeading3 === item.id ? "active-heading" : ""}>
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
}
