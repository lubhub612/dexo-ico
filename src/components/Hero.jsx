import React from "react";
import PreSaleBox from "./PreSaleBox";
import heroimage from "../assets/images/hero-banner.png";
import HeroRightImage from "../assets/images/ilus-bner.png";

const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="container py-5 mt-sm-5 d-flex flex-column h-100 flex-grow-1">
          <div className="row flex-grow-1 h-100 position-relative">
            <div className="col-12 col-lg-7 color-white position-relative">
              <h1 className="font-4xl font-semibold">
                An Extended Decentralized Exchange with
                <span className="font-4xl fw-bold">
                  {" "}
                  first ever C-Dex Protocol
                </span>
              </h1>

              <h3 className="font-xl font-semibold my-3 my-sm-5">
                Swap, Trade and Earn on the first-ever C-Dex Protocol and have
                an experience of centralized platform in decentralized world
              </h3>
              <img
                className="w-100 my-3"
                src={HeroRightImage}
                alt="HeroRightImage"
              />
              <p className="font-xs fw-normal">
                Dexo is determined to bridge the gap between centralised and
                decentralised worlds by providing almost every DeFi products on
                its fully decentralised platform.
              </p>
              <a
                download
                target="_blank"
                rel="noreferrer"
                href="https://ico-dexo.exchange/wp-content/uploads/2022/07/Dexo-Whitepaper.pdf"
              >
                <button class="download-whitepaper-btn mt-2">
                  Download whitepaper
                </button>
              </a>
            </div>
            <div className="col-12 col-lg-5 mt-4">
              <PreSaleBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
