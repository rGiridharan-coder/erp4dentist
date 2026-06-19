import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./components.css";

function Testimonials() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "25%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      centerPadding: "15%",
    }
  },
  {
    breakpoint: 480,
    settings: {
      centerPadding: "10%",
    }
  }
]
 };

  return (
    <div className="slider-container">
      <h2>What our dentists say</h2>
      <Slider {...settings}>
        <div>
          <div className="quote"></div>
          <p>"You can go ahead with promoting erp4dentist as it a very detail oriented and a complete PMS that every dental clinic needs.. I hope a lot of dentists like me will benefit from this."</p>
          <div className="author-wrap">
            <aside className="author">
              Dr. Pavitraa Balaji<span>B.D.S, F.G.D.S</span>
            </aside>
            <aside className="stars"><Image src='/icons/stars.svg' alt="" /></aside>
          </div>
        </div>
        <div>
          <div className="quote"></div>
          <p>"ERP4Dentist has truly transformed the way I manage my clinic. Everything is so seamless and easy to use. It saves me time and helps me focus more on my patients. I'm really happy with this software and highly recommend it!"</p>
          <div className="author-wrap">
            <aside className="author">
              Dr. Kavita Sharma<span>B.D.S, F.G.D.S</span>
            </aside>
            <aside className="stars"><Image src='/icons/stars.svg' alt="" /></aside>
          </div>
        </div>
        <div>
          <div className="quote"></div>
          <p>"You can go ahead with promoting erp4dentist as it a very detail oriented and a complete PMS that every dental clinic needs.. I hope a lot of dentists like me will benefit from this."</p>
          <div className="author-wrap">
            <aside className="author">
              Dr. Pavitraa Balaji<span>B.D.S, F.G.D.S</span>
            </aside>
            <aside className="stars"><Image src='/icons/stars.svg' alt="" /></aside>
          </div>
        </div>
        <div>
          <div className="quote"></div>
          <p>"ERP4Dentist has truly transformed the way I manage my clinic. Everything is so seamless and easy to use. It saves me time and helps me focus more on my patients. I'm really happy with this software and highly recommend it!"</p>
          <div className="author-wrap">
            <aside className="author">
              Dr. Kavita Sharma<span>B.D.S, F.G.D.S</span>
            </aside>
            <aside className="stars"><Image src='/icons/stars.svg' alt="" /></aside>
          </div>
        </div>
        <div>
          <div className="quote"></div>
          <p>"You can go ahead with promoting erp4dentist as it a very detail oriented and a complete PMS that every dental clinic needs.. I hope a lot of dentists like me will benefit from this."</p>
          <div className="author-wrap">
            <aside className="author">
              Dr. Pavitraa Balaji<span>B.D.S, F.G.D.S</span>
            </aside>
            <aside className="stars"><Image src='/icons/stars.svg' alt="" /></aside>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonials;
