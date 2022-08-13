import React from "react";

const DetailSaleToken = () => {
  return (
    <div id="details-sales-token" className="py-5 position-relative">
      <div className="circular-bg"></div>
      <div className="container">
        <div>
          <h2 className="ova-heading font-xs text-white font-semibold">
            <span className="ova_before"></span>
            ICO DEXO Token
          </h2>
          <h2 className="detailSaleToken-heading font-5xl text-white">
            ICO Tokens Details & Sale Tokens.
          </h2>
        </div>
        <div className="mt-5">
          <div className="row flex-wrap">
            {data.map((obj, i) => (
              <div className="col-lg-4 col-md-6 mb-5" key={i}>
                <div
                  className={`px-4 h-100 sale-box py-2 ${
                    i === 0 ? "first" : ""
                  }`}
                >
                  <span> {obj.label} </span>
                  <p className="mt-2 mb-0">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 px-3 px-md-0">
          <div className="row row-line  position-relative">
            {rowData.map((obj, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div className="timeline-box h-100 d-flex justify-content-center align-items-center flex-column text-center">
                  <span className="dateTime">{obj.dateTime}</span>
                  <span className="discount">{obj.discount}</span>
                  <span className="tokenPrice"> {obj.tokenPrice} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSaleToken;
const rowData = [
  {
    dateTime: "Aug 4st - Aug 7th, 2022",
    discount: "20% Discount",
    tokenPrice: "Token price- 0.20/DEXO",
  },

  {
    dateTime: "Aug 8th - Aug 14th, 2022",
    discount: "15% Discount",
    tokenPrice: "Token Price- 0.2125/DEXO",
  },
  {
    dateTime: "Aug 15th - Aug 21st, 2022",
    discount: "10% Discount",
    tokenPrice: "Token Price- 0.225/DEXO",
  },
  {
    dateTime: "Aug 22nd - Sep 18th, 2022",
    discount: "5% Discount",
    tokenPrice: "Token Price- 0.2375/DEXO",
  },
];
const data = [
  {
    label: "Start",
    desc: "Aug 12th, 2022 (9:00AM GMT)",
  },

  {
    label: "End",
    desc: "Sep 26th, 2022 (9:00AM GMT)",
  },

  {
    label: "Acceptable currencies",
    desc: "BNB",
  },

  {
    label: "Number of Tokens for Sale",
    desc: "BNB",
  },
  {
    label: "Tokens exchange rate",
    desc: "1 USDT = 4 DEXO Tokens",
  },

  {
    label: "Minimal Transactions",
    desc: "25 USDT = 100 DEXO Tokens",
  },
];
