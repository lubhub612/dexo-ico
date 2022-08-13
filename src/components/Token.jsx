import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { tokenData, data } from "./tokenData";
import { Line } from "rc-progress";
import TokenTab from "./TokenTab";
import FundingTab from "./FundingTab";
ChartJS.register(ArcElement, Tooltip);
const Token = () => {
  const [allocation, setAllocation] = useState("Token");

  return (
    <div className="py-5 position-relative mb-5">
      <div className="circular-bg"></div>
      <div className="container">
        <div className="token-wrapper mx-auto">
          {/* TOKEN HEADER */}
          <div className="d-flex align-items-center">
            <h3 className="token-heading m-0 fw-semibold text-white font-5xl font-5xl">
              1 DEXO = 0.25 USDT
            </h3>
            <button className="buy-btn ms-4 text-white font-xsm  px-4 py-2">
              Buy Now
            </button>
          </div>
          {/* ALLOCATION TABS ROWS */}
          <div className="tabs-rows mt-5">
            <span
              onClick={() => setAllocation("Token")}
              className={`tabs-items ${
                allocation === "Token" ? "isActive" : ""
              }`}
            >
              Token Allocation
            </span>
            <span
              onClick={() => setAllocation("Funding")}
              className={`tabs-items ${
                allocation === "Funding" ? "isActive" : ""
              }`}
            >
              Funding Allocation
            </span>
          </div>
          {/* ALLOCATION TABS */}
          {allocation === "Token" && (
            <>
              <TokenTab />
            </>
          )}
          {allocation === "Funding" && (
            <>
              <FundingTab />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Token;
