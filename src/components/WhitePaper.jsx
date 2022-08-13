import React from "react";
import whitepaperimage from "../assets/images/white-paper-image.png";

const WhitePaper = () => {
  return (
    <>
      <section className="" id="whitepaper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h4 className=" font-xs color-white font-semibold">
                <span className="white-paper-text-before"></span> Whitepaper
              </h4>
              <h2 className="font-5xl color-white font-semibold my-4 py-2">
                Read Our Whitepaper
              </h2>
              <p className=" font-xs font-normal color-grey-shade2 max-w-450">
                A native, scalable decentralized exchange (DEXO) on the BSC
                Binance Smart Chain. Supporting token swaps, liquidity pools,
                farms and more.
              </p>
              <a
                download
                target="_blank"
                rel="noreferrer"
                href="https://ico-dexo.exchange/wp-content/uploads/2022/07/Dexo-Whitepaper.pdf"
              >
                <button className="download-whitepaper-btn mt-5">
                  Download whitepaper
                </button>
              </a>
            </div>
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid"
                src={whitepaperimage}
                alt="whitepaperimage"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhitePaper;
