import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function WorksSection() {
  const scrollRef1 = useRef(null);

  const [activeHeading1, setActiveHeading1] = useState("t1sec1");
  const [imgVisible1, setImgVisible1] = useState(true);

  // ----- IMAGE SOURCES -----
  const tab1Images = {
    t1sec1: "/images/placeHolder2.jpg",
    t1sec2: "/images/placeHolder2.jpg",
    t1sec3: "/images/placeHolder2.jpg",
  };

  // ----- CONTENT ARRAYS -----
  const tab1Content = [
    {
      id: "t1sec1",
      title: "1",
      description: "Click on the calendar on the required appointment date.",
    },
    {
      id: "t1sec2",
      title: "2",
      description:
        "Fill out the Appointment booking form, which displays on a single click on the calendar. Fill in the details. Click 'Book Appointment' to confirm.",
    },
    {
      id: "t1sec3",
      title: "3",
      description:
        "Appointment confirmation is displayed on the calendar by just hovering over the entry. Patient and Doctor receive appointment confirmation messages through WhatsApp and Email.",
    },
  ];

  // ----- FADE IMAGE EFFECT -----
  const fadeEffect = (setImgVisible) => {
    setImgVisible(false);
    const timer = setTimeout(() => setImgVisible(true), 50);
    return () => clearTimeout(timer);
  };

  useEffect(() => fadeEffect(setImgVisible1), [activeHeading1]);

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

  return (
    <Container className="mt-4">
      <Row className="mt-3 align-items-center">
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
                <h3
                  id={item.id}
                  className={activeHeading1 === item.id ? "active-heading" : ""}
                >
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
