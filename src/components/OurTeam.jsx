import React from "react";
import ourteamimg from "../assets/images/our-team.png";

const OurTeam = () => {
  return (
    <>
      <section className=" py-sm-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="font-semibold font-xs color-white text-center mb-3">
                OUR TEAM
              </h6>
              <h2 className="font-semibold font-5xl color-white text-center mb-5">
                The Leadership Team
              </h2>
              <p className="font-xs font-normal color-grey-shade2">
                We are a multi-talented, dynamic team of blockchain network
                experts, technologists, entrepreneurs, and engineers from all
                walks of life. As we continue to grow, we’re committed to
                recruiting the brightest top-performers and industry experts to
                help us continue to bring our vision to life.
              </p>
            </div>
          </div>

          <div className="row my-5 py-4">
            <div className="col-12 col-lg-6 d-flex justify-content-center m-auto">
              <div className="col-12 col-lg-9 px-0">
                <h3 className="font-3xl font-normal color-white mb-4">
                  Resiliency
                </h3>
                <p className="font-xs font-normal color-grey-shade2">
                  We take a holistic view of our industry and our team. By
                  focusing on our mission, empowering our team, focusing on
                  balance and mindfulness, we are able to survive shocks and
                  thrive in a world of uncertainty.
                </p>
                <h3 className="font-3xl font-normal color-white mb-4">
                  Integrity
                </h3>
                <p className="font-xs font-normal color-grey-shade2">
                  We put trust at the forefront of everything we do – from
                  working with investors, to stakeholders and community members.
                  We are transparent and take a holistic and values-based
                  approach to decision-making.
                </p>
                <h3 className="font-3xl font-normal color-white mb-4">
                  Innovation
                </h3>
                <p className="font-xs font-normal color-grey-shade2">
                  We are committed to engineering with ingenuity and to evolving
                  business models for sustainability. From our investments in
                  the DEXO to providing open-source IP, we are constantly
                  looking for better ways to create value for all our
                  stakeholders.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 m-auto d-flex justify-content-center mt-5 mt-lg-0">
              <div className="col-10 col-lg-9">
                <img className="img-fluid" src={ourteamimg} alt="our-team" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
