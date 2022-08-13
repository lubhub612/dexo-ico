import React, { useState, useEffect } from 'react';
import logo from "../../assets/images/dexologo_3.png";
import MenuIcon from "../../assets/images/menu.svg";
import { navbarlinks } from "./Helper";
import Wallet from "../../components/Wallet";

const Navbar = () => {

  const [mobMenu, setmobMenu] = useState(false)
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");

  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="cursor-pointer nav-logo"
              src={logo}
              alt="dexologo"
            />
            <ul className="d-none d-xl-flex align-items-center list-unstyled m-0 ps-5 pb-0">
              {navbarlinks &&
                navbarlinks.map((link, index) => (
                  <li key={index}>
                    {link.title === "Whitepaper" ? (
                      <>
                        <a
                          download
                          className="mx-4"
                          target="_blank"
                          href={`https://ico-dexo.exchange/wp-content/uploads/2022/07/Dexo-Whitepaper.pdf`}
                        >
                          {link.title}
                        </a>
                      </>
                    ) : (
                      <>
                        <a className="mx-4" href={`${link.link}`}>
                          {link.title}
                        </a>
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>

          <button className="common-btn d-none d-xl-flex">Launch App</button>
						<div className="connect-wallet-btn">
						{/*	<img src={MenuIcon} className="icon-mob" alt="logo" onClick={setmobMenu} /> */}
							<h2><i></i></h2>
							<ul>
								 <li className="menu__icon" onClick={setmobMenu}><img src={MenuIcon} className="icon-tab" alt="menu Icon" /></li>
								{/* <li><a >{TOKEN_SYMBOL}</a>
									<ul className="dropdown">
										<li>
										<a href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xeDAAaA986bcb588025Cd16C548f5F769Bb32A00B" target="_blank">Buy on PancakeSwap</a>
										</li>
									</ul>
                    </li>    */}
                    <li><Wallet account={account} setAccount={setAccount} chainId= {chainId} setChainId = {setChainId}/></li>  
							</ul>
						</div>
            
          {/* HAMBURGER  ICON  */}
          <div
            id="nav-icon1"
            className="hamburger-menu d-xl-none"
            onClick={() => handldeOverlayActive()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
