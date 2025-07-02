"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const FacebookInstagramAds = () => {
  const benefits = [
    {
      title: "Precise Audience Targeting",
      description:
        "Reach your ideal customers with laser-focused targeting based on location, interests, demographics, and behavior.",
      icon: "🎯",
    },
    {
      title: "Immediate Lead Generation",
      description:
        "Generate qualified leads quickly with compelling ad campaigns designed to convert visitors into customers.",
      icon: "⚡",
    },
    {
      title: "Measurable Results",
      description:
        "Track every dollar spent with detailed analytics and reporting to optimize your campaigns for maximum ROI.",
      icon: "📊",
    },
    {
      title: "Scalable Growth",
      description:
        "Start small and scale up successful campaigns to reach more customers and grow your business.",
      icon: "📈",
    },
  ];

  const adTypes = [
    {
      name: "Lead Generation Ads",
      description:
        "Collect qualified leads directly on Facebook and Instagram with optimized lead forms.",
      features: [
        "Pre-filled forms",
        "Qualified leads",
        "Instant delivery",
        "Cost-effective",
      ],
    },
    {
      name: "Brand Awareness Ads",
      description:
        "Build recognition in your local community and establish your brand as the go-to choice.",
      features: [
        "Local targeting",
        "Brand recognition",
        "Community trust",
        "Long-term value",
      ],
    },
    {
      name: "Conversion Ads",
      description:
        "Drive direct sales and bookings with compelling calls-to-action and optimized landing pages.",
      features: [
        "Direct sales",
        "Booking optimization",
        "ROI tracking",
        "Performance optimization",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Audience Research",
      description:
        "We analyze your target market to identify the most profitable customer segments for your business.",
    },
    {
      step: "02",
      title: "Ad Creative Development",
      description:
        "Our team creates compelling ad copy and visuals that resonate with your target audience.",
    },
    {
      step: "03",
      title: "Campaign Launch",
      description:
        "We launch and monitor your campaigns, making real-time adjustments for optimal performance.",
    },
    {
      step: "04",
      title: "Optimization & Scaling",
      description:
        "Continuous optimization based on performance data to maximize your return on ad spend.",
    },
  ];

  const targetingOptions = [
    {
      category: "Demographics",
      options: [
        "Age",
        "Gender",
        "Income level",
        "Education",
        "Relationship status",
      ],
    },
    {
      category: "Location",
      options: [
        "City/State",
        "Radius targeting",
        "Zip codes",
        "Custom areas",
        "Excluded areas",
      ],
    },
    {
      category: "Interests & Behavior",
      options: [
        "Hobbies",
        "Purchase behavior",
        "Life events",
        "Job titles",
        "Industry",
      ],
    },
    {
      category: "Custom Audiences",
      options: [
        "Website visitors",
        "Email lists",
        "Customer lists",
        "Lookalike audiences",
      ],
    },
  ];

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
                style={{
                  backgroundImage: `url(/assets/img/hero_img_facebook.jpg)`,
                }}
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
                    Facebook & Instagram Advertising
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Target Your Ideal Customers & Generate Quality Leads
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Stop wasting money on broad advertising. Our targeted
                      Facebook and Instagram ad campaigns help tradespeople and
                      small businesses reach their ideal customers with
                      precision, generating qualified leads that convert into
                      paying clients.
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Start Your Campaign
                        </Link>
                        <Link
                          href="#process"
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

            {/* Benefits Section */}
            <section className="cs_benefits_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">
                      Why Facebook & Instagram Ads?
                    </div>
                    <h2 className="cs_section_title">
                      Proven Results for Local Businesses
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="col-lg-6 col-md-6">
                      <div className="cs_benefit_card">
                        <div className="cs_benefit_icon">{benefit.icon}</div>
                        <h3 className="cs_benefit_title">{benefit.title}</h3>
                        <p className="cs_benefit_description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Ad Types Section */}
            <section className="cs_ad_types_section cs_primary_bg">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">
                      Ad Types We Specialize In
                    </div>
                    <h2 className="cs_section_title">
                      Strategic Campaigns for Every Business Goal
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {adTypes.map((adType, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_ad_type_card">
                        <h3 className="cs_ad_type_title">{adType.name}</h3>
                        <p className="cs_ad_type_description">
                          {adType.description}
                        </p>
                        <ul className="cs_ad_type_features">
                          {adType.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Targeting Section */}
            <section className="cs_targeting_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">
                      Advanced Targeting Options
                    </div>
                    <h2 className="cs_section_title">
                      Reach Your Perfect Customers
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {targetingOptions.map((category, index) => (
                    <div key={index} className="col-lg-6 col-md-6">
                      <div className="cs_targeting_card">
                        <h3 className="cs_targeting_category">
                          {category.category}
                        </h3>
                        <ul className="cs_targeting_options">
                          {category.options.map((option, optionIndex) => (
                            <li key={optionIndex}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Process Section */}
            <section id="process" className="cs_process_section cs_primary_bg">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Our Process</div>
                    <h2 className="cs_section_title">
                      How We Create High-Performing Ad Campaigns
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {process.map((step, index) => (
                    <div key={index} className="col-lg-6 col-md-6">
                      <div className="cs_process_card">
                        <div className="cs_process_number">{step.step}</div>
                        <h3 className="cs_process_title">{step.title}</h3>
                        <p className="cs_process_description">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* CTA Section */}
            <CTA
              title="Ready to Start Generating Quality Leads?"
              subtitle="Join hundreds of businesses already getting 3-5x ROI on their Facebook and Instagram ad spend with our proven strategies."
              buttonText="Launch Your Ad Campaign"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default FacebookInstagramAds;
