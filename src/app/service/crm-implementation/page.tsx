"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const CRMImplementation = () => {

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <section
              className="cs_hero cs_style1 cs_center cs_parallax"
              style={{ height: "80vh" }}
            >
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(/assets/img/hero_img_crm.jpg)` }}
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
                    Leads360 Marketing CRM
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Marketing CRM Implementation & Optimization
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Efficient customer relationship management is the backbone of scalable growth. Our Marketing CRM services are designed to streamline your sales and marketing processes, ensuring no lead is left behind and every customer interaction is optimized.
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Get Started
                        </Link>
                        <Link
                          href="#services"
                          className="cs_hero_btn cs_round_btn btn-item m-3 transition"
                        >
                          <span></span>
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="cs_about_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title">
                      Our Core Services: Driving Your Digital Success
                    </h2>
                  </div>
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Services Section */}
            <section
              id="services"
              className="cs_services_section cs_primary_bg"
            >
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title">
                      2. Marketing CRM Implementation & Optimization
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cs_service_details">
                      <p><strong>•	CRM System Setup & Customization:</strong> We help you select, implement, and customize the ideal Marketing CRM solution tailored to your specific business needs. This includes configuring workflows, user roles, and data fields to match your operational requirements.</p>
                      <p><strong>•	Lead Management & Nurturing:</strong> Automate lead capture, scoring, and nurturing processes within your Marketing CRM. Ensure timely follow-ups and personalized communication to move leads efficiently through your sales funnel.</p>
                      <p><strong>•	Sales Pipeline Management:</strong> Gain clear visibility into your sales pipeline, track opportunities, and forecast revenue with robust CRM functionalities. Empower your sales team with tools for effective deal management.</p>
                      <p><strong>•	Customer Segmentation & Personalization:</strong> Leverage CRM data to segment your customer base and deliver highly personalized marketing messages, improving engagement and conversion rates.</p>
                      <p><strong>•	Integration with Marketing Tools:</strong> Seamlessly integrate your Marketing CRM with other digital marketing tools (e.g., email platforms, analytics, social media) to create a unified and efficient ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Why Choose Section */}
            <section className="cs_why_choose_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <h2 className="cs_section_title">
                      Why Choose Leads360 as Your Digital Transformation Partner?
                    </h2>
                    <p>
                      Choosing Leads360 means partnering with a digital transformation company that truly understands the unique needs of small businesses. We combine strategic thinking with hands-on execution, delivering solutions that are not only innovative but also practical and results-driven. Our commitment is to provide you with the tools and expertise to achieve scalable growth without chaos, ensuring your business is future-ready.
                    </p>
                    <p>
                      Ready to transform your business? Contact us today for a personalized consultation and discover how Leads360 can be your catalyst for sustained success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* CTA Section */}
            <CTA
              title="Ready to Transform Your Business?"
              subtitle="Contact us today for a personalized consultation and discover how Leads360 can be your catalyst for sustained success."
              buttonText="Start Your Digital Transformation"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default CRMImplementation;
