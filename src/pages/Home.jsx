import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  {" "}
                  Travelllll opens the door to creating
                  <span className="highlight"> Memories</span>
                </h1>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box ">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"explore"} />
              <h2 className="featured__tour-title">Our feature Tour</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="experience__content text-center">
            <Subtitle subtitle={"Experience"} />
          </div>
          <div className="counter__wrapper d-flex gap-4">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Trip</h6>
            </div>
            <div className="counter__box">
              <span>12k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>12k+</span>
              <h6>Years Experience</h6>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What is fans</h2>
            </Col>
            <Col lg="12" className="fixlayout">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
