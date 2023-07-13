import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 mt-2" alt="" />
          <div className="">
            <h6 className="mb-0 mt-3">John Snow</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 mt-2" alt="" />
          <div className="">
            <h6 className="mb-0 mt-3">John Snow</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2  mt-2" alt="" />
          <div className="">
            <h6 className="mb-0 mt-3">John Snow</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <p className="text-center">@@@@@@@@@@@@@@@</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2 mt-2 " alt="" />
          <div className="">
            <h6 className="mb-0 mt-3">John Snow</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
