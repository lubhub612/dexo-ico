import React from "react";
import globeimg from "../assets/images/globe-image.png";
import { GroupIcon, GlobeIcon, StarIcon } from "./common/Icons";

const DexoExchangeUnique = () => {
  return (
    <>
      <div className="container pt-5 mt-5" id="about">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h2 className="font-5xl color-white font-semibold mb-5">
              What makes Dexo exchange unique?
            </h2>

            <div className="time-line-unique">
              <div className="dexo-unique-item position-relative">
                <div className="first-stage stage-of-timeline">
                  <GroupIcon />
                </div>
                <p className="color-grey-shade1 font-xsm font-medium">
                  Dexo aims to connect all isolated blockchains and establish a
                  cross-chain asset exchange network, providing all necessary
                  underlying support for the DeFi ecosystem. Let every digital
                  asset holder experience a truly safe, free and transparent
                  DeFi service.
                </p>
              </div>
              <div className="dexo-unique-item position-relative">
                <div className="first-stage stage-of-timeline">
                  <GlobeIcon />
                </div>
                <h3 className="font-lg color-white font-semibold">
                  (i) Home for DeFi
                </h3>
                <p className="color-grey-shade1 font-xsm font-medium">
                  Trade against zero spread and deep liquidity with advanced
                  order types such as limit, stop-loss, and more. Earn fees for
                  providing liquidity in one click.
                </p>
              </div>
              <div className="dexo-unique-item position-relative">
                <div className="first-stage stage-of-timeline">
                  <StarIcon />
                </div>
                <h3 className="font-lg color-white font-semibold">
                  (ii) Advanced Order-book
                </h3>
                <p className="color-grey-shade1 font-xsm font-medium">
                  Comprehensive trading terminal and order-book trading with
                  with perpetual contracts with leverage exposure on limitless
                  assets with minimum fee with the convenience of regular
                  centralized exchanges while keeping everything decentralized.
                </p>
              </div>
              <div className="dexo-unique-item position-relative">
                <div className="first-stage stage-of-timeline">
                  <StarIcon />
                </div>
                <h3 className="font-lg color-white font-semibold">
                  (iii) High Transactions Speed with Low Fees
                </h3>
                <p className="color-grey-shade1 font-xsm font-medium">
                  With Dexo advanced C-Dex protocol, enjoy centralised exchange
                  like fast execution of your orders with zero gas fees with off
                  chain order book feature, pay only for executed orders.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src={globeimg} alt="globeimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DexoExchangeUnique;
