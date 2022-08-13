import { Line } from "rc-progress";
import React from "react";
import { fundingData, fundingMapData } from "./tokenData";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);
const FundingTab = () => {
  const onClick = (value) => {
    console.log(value);
  };
  return (
    <div className="tabs-container mt-4">
      <div className="px-md-5 px-3 py-4 d-flex flex-column flex-lg-row align-items-center">
        <div className="center-tabs">
          <Doughnut onClick={onClick} data={fundingMapData} />
        </div>
        <div className="right-side-tabs flex-grow-1">
          <div className="d-flex ps-lg-4  flex-column">
            {fundingData.map((obj, i) => (
              <>
                {console.log(obj)}
                <div className="py-2">
                  <span className="data-list-items">
                    {obj.label} | {obj.value}%
                  </span>
                  <div className="mt-1">
                    <Line
                      percent={obj.value}
                      strokeWidth={3}
                      strokeColor={obj.backgroundColor}
                      trailColor={obj.trailColor}
                      trailWidth={3}
                    />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingTab;
