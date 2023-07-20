import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
const quick__links = [
  {
    path: "/home",
    display: "HOME",
  },
  {
    path: "/about",
    display: "ABOUT",
  },
  {
    path: "/tours",
    display: "TOURS",
  },
];
const quick__links2 = [
  {
    path: "/gallery",
    display: "GALLERY",
  },
  {
    path: "/login",
    display: "LOGIN",
  },
  {
    path: "/register",
    display: "REGISTER",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <section>
        <Container>
          <Row>
            <Col lg="3" className="paddingfix">
              <div className="social">
                <h5 className="text-center footer__link-title">SOCIAL</h5>
                <div className="social__links d-flex  justify-content-center gap-4 fixsocial__links">
                  <span>
                    <Link to="#">
                      <i className="ri-youtube-line"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-github-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-facebook-box-fill"></i>
                    </Link>
                  </span>
                  <span>
                    <Link to="#">
                      <i className="ri-instagram-fill"></i>
                    </Link>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title text-center">DISCOVER</h5>
              <ListGroup className="footer__quick-links">
                {quick__links.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 d-flex justify-content-center"
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg="3">
              <h5 className="footer__link-title text-center">QUICK LINK</h5>
              <ListGroup className="footer__quick-links">
                {quick__links2.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 d-flex justify-content-center"
                  >
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3">
              <h5 className="footer__link-title text-center">CONTACT</h5>
              <ListGroup className="footer__quick-links ">
                <ListGroupItem className=" border-0 d-flex  gap-2 contactrespon">
                  <h6 className="mb-0 d-flex align-items-center">EMAIL :</h6>
                  <p className="mb-0">60040161@kmitl.ac.th</p>
                </ListGroupItem>
                <ListGroupItem className="border-0 d-flex  gap-2 contactrespon">
                  <h6 className="mb-0 d-flex align-items-center">CALL :</h6>
                  <p className="mb-0">+66 945677543</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="12" className="text-center pt-5">
              <p className="copyright">
                Copyright {year}, design and develop by MILO
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
