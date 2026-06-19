import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function WorksSection({ images, content, defaultActiveId }) {
  const scrollRef = useRef(null);
  const [activeHeading, setActiveHeading] = useState(defaultActiveId || content[0].id);
  const [imgVisible, setImgVisible] = useState(true);

  // ----- FADE IMAGE EFFECT -----
  const fadeEffect = () => {
    setImgVisible(false);
    const timer = setTimeout(() => setImgVisible(true), 50);
    return () => clearTimeout(timer);
  };

  useEffect(() => fadeEffect(), [activeHeading]);

  // ----- SCROLL LOGIC -----
  const initScrollLogic = (box) => {
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

  useEffect(() => initScrollLogic(scrollRef.current), []);

  return (
    <Container className="mt-4">
      <Row className="mt-3 align-items-center">
        <Col lg={6}>
          <figure>
            <img
              src={images[activeHeading] || "/images/default.jpg"}
              alt="Section visual"
              className={`img-fluid fade-img ${imgVisible ? "show" : ""}`}
            />
          </figure>
        </Col>
        <Col lg={6}>
          <div className="scroll-box" ref={scrollRef}>
              {content.map((item) => (
                <div className="cnt-wrap" key={item.id}>
                  <h3
                    id={item.id}
                    className={activeHeading === item.id ? "active-heading" : ""}
                  >
                    {item.title}
                  </h3>
                  <div className="cnt-wrap-in">
                  {/* Top description (optional) */}
                  {item.description && <p>{item.description}</p>}
                  {item.descriptionTop && <p>{item.descriptionTop}</p>}

                  {/* Ordered List (optional) */}
                  {item.list && (
                    <ol>
                      {item.list.map((li, index) => (
                        <li key={index}>{li}</li>
                      ))}
                    </ol>
                  )}

                  {/* Bottom description (optional) */}
                  {item.descriptionBottom && <p>{item.descriptionBottom}</p>}
                 </div>
                </div>
              ))}
            </div>
        </Col>
      </Row>
    </Container>
  );
}
