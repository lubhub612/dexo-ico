import React from "react";
import logo from "../../assets/images/dexologo_3.png";
import { navbarlinks } from "./Helper";

const Sidebar = () => {
  const handldeOverlayActive = () => {
    document.body.classList.toggle("active-nav-overlay");
  };
  const openRoute = () => {
    document.body.classList.toggle("active-nav-overlay");
  }
  return (
    <>
      <div className="sidebar-overlay" onClick={handldeOverlayActive}></div>
      <aside className="main-sidebar-wrapper d-flex flex-column justify-content-between">
        <div className="mt-3">
          <img className="cursor-pointer nav-logo" src={logo} alt="dexologo" />
          <ul className="d-flex flex-column d-xl-none align-items-start list-unstyled mt-5 pb-0">
            {navbarlinks &&
              navbarlinks.map((link, index) => (
                <li className="my-3" key={index}>
                  {link.title === "Whitepaper" ? (
                    <>
                      <a
                        download
                        className="mx-4"
                        target="_blank"
                        onClick={()=>openRoute()}
                        href={`https://ico-dexo.exchange/wp-content/uploads/2022/07/Dexo-Whitepaper.pdf`}
                      >
                        {link.title}
                      </a>
                    </>
                  ) : (
                    <>
                      <a onClick={()=>openRoute()} className="mx-4" href={`${link.link}`}>
                        {link.title}
                      </a>
                    </>
                  )}
                </li>
              ))}
          </ul>
        </div>

        <div className="mb-4"><button className="common-btn mb-5">Launch App</button></div>
      </aside>
    </>
  );
};

export default Sidebar;
