import { useEffect, useRef, useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col } from "react-bootstrap";

export default function WorksLabMgt() {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const [activeHeading1, setActiveHeading1] = useState("t1sec1");
  const [activeHeading2, setActiveHeading2] = useState("t2sec1");

  const [imgVisible1, setImgVisible1] = useState(true); 
  const [imgVisible2, setImgVisible2] = useState(true);

  // ----- IMAGE SOURCES -----
  const tab1Images = {
    t1sec1: "/images/works_labMgt_t11.png",
    t1sec2: "/images/works_labMgt_t12.png",
    t1sec3: "/images/works_labMgt_t13.png",
  };

  const tab2Images = {
    t2sec1: "/images/works_labMgt_t21.png",
    t2sec2: "/images/works_labMgt_t22.png",
    t2sec3: "/images/works_labMgt_t23.png",
    t2sec4: "/images/works_labMgt_t24.png",
  };


  // ----- CONTENT ARRAYS -----
  const tab1Content = [
    { id: "t1sec1", title: "1", description: "To add Lab Work, navigate to the Treatment tab under the EMR tab. Alongside the created treatment plan, find an action button with a dropdown menu. Click the dropdown menu and click 'Add Lab work'" },
    { id: "t1sec2", title: "2", description: "Observe that the Add lab work screen opens up. Enter all the required details. Order start date, expected completion date, doctor name, lab name, procedure outsourced. Observe that the teeth undergoing treatment are already preselected." },
    { id: "t1sec3", title: "3", description: "Fill in any special instructions and remarks, if necessary. Add all relevant details and click 'Save'" },
  ];

  const tab2Content = [
    { id: "t2sec1", title: "1", description: "To create a Lab, click on 'Lab' on the dashboard. Following this, click on the 'Create Lab' button to start adding labs to the database." },
    { id: "t2sec2", title: "2", description: "Please observe that the create lab form opens up. Fill in all the details related to the new lab. Lab name, contact number, their bank account details, and so on. Add procedures you are outsourcing to the lab and fill in the price/teeth. Click 'Create lab' once completed." },
    { id: "t2sec3", title: "3", description: "Fill in any special instructions and remarks, if necessary. Add all relevant details and click 'Save" },
    { id: "t2sec4", title: "4", description: "Please observe that the new lab has been created and displayed under the Labs menu." },
  ];

  // ----- FADE IMAGE EFFECT -----
  const fadeEffect = (setImgVisible) => {
    setImgVisible(false);
    const timer = setTimeout(() => setImgVisible(true), 50);
    return () => clearTimeout(timer);
  };

  useEffect(() => fadeEffect(setImgVisible1), [activeHeading1]);
  useEffect(() => fadeEffect(setImgVisible2), [activeHeading2]);

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

  return (
    <Container className="mt-4">
      <Tabs defaultActiveKey="tab1">
        {/* TAB 1 */}
        <Tab eventKey="tab1" title="Add Lab">
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
        <Tab eventKey="tab2" title="Add Lab Work">
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
       
      </Tabs>
    </Container>
  );
}
