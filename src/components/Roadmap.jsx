import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import roadmap1img from "../assets/images/roadmap-1.png";
import roadmap2img from "../assets/images/roadmap-2.png";

const Roadmap = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="my-5 py-sm-5" id="roadmap">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="font-semibold font-xs color-white text-center mb-3">
                ROAD MAP
              </h6>
              <h2 className="font-semibold font-5xl color-white text-center mb-5">
                Our Strategy & Project Plan
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="px-3">
                <Slider {...settings}>
                  <div className="h-100 slider-item">
                    <img
                      className="img-fluid slider-img"
                      src={roadmap1img}
                      alt="roadmap1img"
                    />
                  </div>
                  <div className="h-100 slider-item">
                    <img
                      className="img-fluid slider-img"
                      src={roadmap2img}
                      alt="roadmap2img"
                    />
                  </div>
                  <div className="h-100 slider-item">
                    <img
                      className="img-fluid slider-img"
                      src={roadmap1img}
                      alt="roadmap1img"
                    />
                  </div>
                  <div className="h-100 slider-item">
                    <img
                      className="img-fluid slider-img"
                      src={roadmap2img}
                      alt="roadmap2img"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
