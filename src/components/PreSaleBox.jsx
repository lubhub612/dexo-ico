import React, { useState, useMemo, useCallback, useEffect }  from "react";
import { ethers } from "ethers";
import Dexo from "../assets/images/logo.png";
import BNB from "../assets/images/bnb.png";
import saleAbi from '../abis/SALE.json';
import Countdown from "react-countdown";

const PreSaleBox = () => {
  const Completionist = () => (
    <span className="text-center color-white font-xl my-4 d-block text-center">
      Pre Sale is Live!
    </span>
  );

  // CALLBACK FUNCTION FOR COUNTDOWN
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // IF PRE SALE IS LIVE
      return <Completionist />;
    } else {
      // IF PRE SALE IS NOT LIVE SHOW COUNTDOWN
      return (
        <div className="timer-wrapper my-4">
          <div className="timer-box">{days}</div>
          <div className="timer-box">{hours}</div>
          <div className="timer-box">{minutes}</div>
          <div className="timer-box">{seconds}</div>
        </div>
      );
    }
  };

  const [amount, setAmount] = useState(0);
  const _TOKEN_ADDRESS = "0x23D706AC42ca0dbE28300bf571ff8C69C88e5391";

  const handleAmountChange = useCallback(e => {
		setAmount(e.target.value);
	});
  const handleBNBCurrent = useCallback( async e => {
		
	const provider = new ethers.providers.Web3Provider(window.ethereum);
  const accounts = await provider.listAccounts();
      const  TokenContract = new ethers.Contract( _TOKEN_ADDRESS,  saleAbi, provider.getSigner());
      console.log("A", TokenContract);
	const amountIn1 = ethers.utils.parseEther(amount.toString(), 'ether');
  console.log(amountIn1);
	const amountIn = amountIn1.toString();
  console.log(amountIn);
  const a = parseFloat(amount) * (1e18)
  const a1 = a.toString()
  console.log(a)
  console.log(a1)
  console.log(amount)
	 

    const b1 = ethers.utils.parseEther(amount.toString());
    console.log(b1)
    const options = {value: ethers.utils.parseEther(amount.toString(), 'ether')}
    console.log(options)
    const reciept = await TokenContract.buyToken(options);
    console.log(reciept); 
	});
  // DATE NOW IS GET MILLISECOND FROM DATE NOW BY WHEN
  const dateNow = 1660153431797;

  return (
    <>
      <div className="hero-sale-box-wrapper mx-auto  ">
        <h6 className="text-center color-white font-md">Pre-sale start in</h6>
        <div className="grey-broder-presale"></div>
        {/* THE HARD CODE SECONDS ARE IN MILLISECOND THAT LIVE AFTER 2 DAYS FROM DATE .NOW  */}
        <Countdown date={dateNow + 88800000} renderer={renderer} />,
        <p className="color-white text-center font-md">Pre Sale</p>
        <div className="presale-timeline">
          <span className="item-before">Pre Sale</span>
          <span className="item-before">Soft Cap</span>
          <span className="item-before">Hard Cap</span>
        </div>
        <div className="mt-5 pt-5">
          <div className="buy-dexo-box px-sm-3 px-2 py-4 align-items-center mx-2 mx-md-5 d-flex justify-content-center flex-column ">
            <h3 className="text-center mb-4">TOKEN PRICE- 0.20/DEXO</h3>
            <div className="bnb w-100 d-flex">
              <span className="me-2">
                <img width="30" src={BNB} alt=""  />
              </span>
              <input className="" type="number"  value={amount} placeholder="Amount" onChange={handleAmountChange} />
            </div>
            <div className="dexo w-100 mt-3 mb-4  d-flex">
              <span className="me-2">
                <img width="30" src={Dexo} alt="" />
              </span>
              <input className="" type="number" />
            </div>
            <button onClick={handleBNBCurrent}>BUY DEXO TOKEN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSaleBox;
