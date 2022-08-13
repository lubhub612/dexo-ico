import { Line } from "rc-progress";
import React from "react";
import { data, tokenData } from "./tokenData";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);
const TokenTab = () => {
  // chart.canvas.parentNode.style.height = "128px";
  // chart.canvas.parentNode.style.width = "128px";
  return (
    <div className="tabs-container mt-4">
      <div className="px-3 py-4 d-flex row flex-wrap flex-column justify-content-center flex-lg-row align-items-lg-center">
        <div className="left-side-tabs col-lg-3 ">
          <div className="d-flex pe-2 flex-column">
            {data.map(
              (obj, i) =>
                i < 6 && (
                  <div className="py-2 w-100" key={i}>
                    <span className="data-list-items">
                      {obj.label} | {obj.value}
                    </span>
                    <Line
                      percent={obj.value}
                      strokeWidth={3}
                      strokeColor={obj.backgroundColor}
                      trailColor={obj.trailColor}
                      trailWidth={3}
                    />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="center-tabs col-6  d-flex justify-content-center ">
          <div style={{ width: "100%" }} className="">
            <Doughnut options={{}} data={tokenData} />
          </div>
        </div>
        <div className="right-side-tabs col-lg-3  ">
          <div className="d-flex ps-lg-4 w-100  flex-column">
            {data.map(
              (obj, i) =>
                i > 6 && (
                  <div className="py-2 w-100" key={i}>
                    <span className="data-list-items">
                      {obj.label} | {obj.value}
                    </span>
                    <div className="mt-1">
                      <Line
                        percent={obj.value}
                        strokeWidth={4}
                        strokeColor={obj.backgroundColor}
                        trailColor={obj.trailColor}
                        trailWidth={4}
                      />
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTab;
