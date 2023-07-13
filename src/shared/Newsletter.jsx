import React from "react";
import "./newsletter.css";
import { Container } from "reactstrap";

const Newsletter = () => {
  return (
    <section className="newsletter text-center">
      <Container>
        <div className="BGnew">
          <div className="newsletter__content">
            <h2>Subscribe info</h2>
            <div className="newsletter__input">
              <input type="email" placeholder="Enter your name" />
              <button className="btn newsletter__btn">Subscribe</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
