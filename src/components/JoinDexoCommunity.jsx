import React from "react";
import {
  TwitterIcon,
  MediumIcon,
  DiscordIcon,
  TelegramIcon,
} from "./common/Icons";
import communitybgimg from "../assets/images/community-bg-image.png";

const JoinDexoCommunity = () => {
  return (
    <>
      <section className="position-relative pt-5 " id="community">
        <img
          className="absolute-img-join-community"
          src={communitybgimg}
          alt="communitybgimg"
        />
        <div className="container  mb-5">
          <div className="row">
            <div className="col text-center">
              <h2 className="font-5xl font-semibold color-white">
                Join DEXO Community Today
              </h2>

              <div className="d-flex align-items-center justify-content-center social-join-community my-5 py-4">
                <span className="twittericon mx-2">
                  <a href="https://twitter.com/Dexo_Official" target="_blank"  rel="noreferrer" >
                    <TwitterIcon />
                  </a>
                </span>
                <span className="telegramicon mx-2">
                  <a href="https://t.me/DexoOfficial" target="_blank"  rel="noreferrer" >
                    <TelegramIcon />
                  </a>
                </span>
                <span className="discordicon mx-2">
                  <a href="https://discord.com/invite/dexo" target="_blank"   rel="noreferrer" >
                    <DiscordIcon />
                  </a>
                </span>
                <span className="mediumicon mx-2">
                  <a href="https://dexo-exchange.medium.com/" target="_blank"   rel="noreferrer" >
                    <MediumIcon />
                  </a>
                </span>
              </div>

              <h5 className="font-3xl color-white font-semibold">
                Dexo Official Contract
              </h5>
              <p className="font-2xl color-white font-semibold text-break">
                0xBec66D59BC256300Bc51CE4d076b80c7889F98A6
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDexoCommunity;
