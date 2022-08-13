import React from "react";
import lowerentrybarrier from "../assets/images/lower-entry-barrier.png";
import onestopplatform from "../assets/images/one-stop-platform.png";
import noncustodail from "../assets/images/non-custodail.png";
import accessdecentralised from "../assets/images/access-decentralised.png";

const WhyChooseDexo = () => {
  return (
    <>
      <section className="py-5 my-5 position-relative" id="ico">
        <div className="bg-banner position-absolute"></div>
        <div className="container">
          <h2 className="ova-heading font-xs text-white font-semibold mb-5">
            <span className="ova_before"></span>
            WHY CHOOSE DEXO EXCHANGE
          </h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0 m-auto d-flex flex-column justify-content-center align-items-center">
              <img src={accessdecentralised} alt="accessdecentralised" />
              <div className="choose-dexo-box text-center">
                Access to decentralised products offering the pros of a
                centralised exchange
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0 m-auto d-flex flex-column justify-content-center align-items-center">
              <img src={onestopplatform} alt="onestopplatform" />
              <div className="choose-dexo-box text-center">
                One stop Platform consisting of wide spectrum of DeFi products.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0 m-auto d-flex flex-column justify-content-center align-items-center">
              <img src={noncustodail} alt="noncustodail" />
              <div className="choose-dexo-box text-center">
                Completely Non-custodial exchange which offers protection over
                users funds.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-5 mb-lg-0 m-auto d-flex flex-column justify-content-center align-items-center">
              <img src={lowerentrybarrier} alt="lowerentrybarrier" />
              <div className="choose-dexo-box text-center">
                Access to decentralised products offering the pros of a
                centralised exchange
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseDexo;
