"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const WebDevelopmentMaintenance = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section
              className="cs_hero cs_style1 cs_center cs_parallax"
              style={{ height: "80vh" }}
            >
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(/assets/img/hero_img_web.jpg)` }}
              ></div>
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title">
                    <svg
                      width="134"
                      height="12"
                      viewBox="0 0 134 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010"
                      />
                    </svg>
                    Web Development & Maintenance
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Professional Websites That Convert Visitors Into Customers
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Get a professional, mobile-responsive website that works
                      24/7 to attract customers and generate leads.
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Get Your Website
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <CTA
              title="Ready to Get Your Professional Website?"
              subtitle="Join hundreds of businesses already generating more leads and sales with our professional website solutions."
              buttonText="Start Your Website Project"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default WebDevelopmentMaintenance;
