"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const EmailMarketing = () => {
  const benefits = [
    {
      title: "High ROI Marketing",
      description:
        "Email marketing delivers an average ROI of $42 for every $1 spent, making it one of the most cost-effective marketing channels.",
      icon: "💰",
    },
    {
      title: "Direct Customer Communication",
      description:
        "Reach your customers directly in their inbox with personalized messages that drive engagement and sales.",
      icon: "📧",
    },
    {
      title: "Automated Lead Nurturing",
      description:
        "Convert prospects into customers with automated email sequences that guide them through your sales funnel.",
      icon: "🤖",
    },
    {
      title: "Measurable Results",
      description:
        "Track open rates, click-through rates, and conversions to optimize your campaigns for maximum performance.",
      icon: "📊",
    },
  ];

  const services = [
    {
      title: "Email Campaign Creation",
      description:
        "Design and create compelling email campaigns that engage your audience and drive action.",
      features: [
        "Professional templates",
        "Compelling copy",
        "Call-to-action optimization",
        "Mobile-responsive design",
      ],
    },
    {
      title: "Automated Email Sequences",
      description:
        "Set up automated email workflows that nurture leads and customers without manual intervention.",
      features: [
        "Welcome sequences",
        "Lead nurturing",
        "Abandoned cart recovery",
        "Customer onboarding",
      ],
    },
    {
      title: "List Management & Growth",
      description:
        "Build and maintain a healthy email list with strategies to grow your subscriber base.",
      features: [
        "Lead magnets",
        "Opt-in forms",
        "List segmentation",
        "Compliance management",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description:
        "We analyze your audience and business goals to create a comprehensive email marketing strategy.",
    },
    {
      step: "02",
      title: "List Building Setup",
      description:
        "Implement lead magnets and opt-in forms to grow your email list with qualified subscribers.",
    },
    {
      step: "03",
      title: "Campaign Creation",
      description:
        "Design and create engaging email campaigns that resonate with your target audience.",
    },
    {
      step: "04",
      title: "Automation & Optimization",
      description:
        "Set up automated sequences and continuously optimize based on performance data.",
    },
  ];

  const campaignTypes = [
    {
      type: "Welcome Series",
      description:
        "Introduce new subscribers to your brand and set expectations for future communications.",
      goals: [
        "Build trust",
        "Set expectations",
        "Drive engagement",
        "Establish authority",
      ],
    },
    {
      type: "Promotional Campaigns",
      description:
        "Drive sales and bookings with targeted promotional emails and special offers.",
      goals: [
        "Increase sales",
        "Boost bookings",
        "Clear inventory",
        "Generate urgency",
      ],
    },
    {
      type: "Newsletter Campaigns",
      description:
        "Keep your audience engaged with valuable content and industry insights.",
      goals: [
        "Maintain engagement",
        "Share expertise",
        "Build relationships",
        "Stay top-of-mind",
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
                  backgroundImage: `url(/assets/img/hero_img_email.jpg)`,
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
                    Email Marketing
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Convert Subscribers Into Loyal Customers
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Harness the power of email marketing to nurture leads,
                      drive sales, and build lasting customer relationships. Our
                      strategic email campaigns help tradespeople and small
                      businesses stay connected with their audience and generate
                      consistent revenue.
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_btn_wrap">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="cs_round_btn_wrap"
                      >
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Start <br /> Email Marketing
                        </Link>
                        <Link
                          href="#services"
                          className="cs_hero_btn cs_round_btn btn-item m-3 transition"
                        >
                          <span></span>
                          View Services
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
                      Why Email Marketing?
                    </div>
                    <h2 className="cs_section_title">
                      The Most Effective Marketing Channel
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

            {/* Services Section */}
            <section
              id="services"
              className="cs_services_section cs_primary_bg"
            >
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">
                      Our Email Services
                    </div>
                    <h2 className="cs_section_title">
                      Complete Email Marketing Solutions
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {services.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_service_card">
                        <h3 className="cs_service_title">{service.title}</h3>
                        <p className="cs_service_description">
                          {service.description}
                        </p>
                        <ul className="cs_service_features">
                          {service.features.map((feature, featureIndex) => (
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

            {/* Campaign Types Section */}
            <section className="cs_campaign_types_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Campaign Types</div>
                    <h2 className="cs_section_title">
                      Strategic Email Campaigns for Every Goal
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {campaignTypes.map((campaign, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_campaign_card">
                        <h3 className="cs_campaign_type">{campaign.type}</h3>
                        <p className="cs_campaign_description">
                          {campaign.description}
                        </p>
                        <ul className="cs_campaign_goals">
                          {campaign.goals.map((goal, goalIndex) => (
                            <li key={goalIndex}>{goal}</li>
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
            <section className="cs_process_section cs_primary_bg">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Our Process</div>
                    <h2 className="cs_section_title">
                      How We Build Your Email Marketing Success
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
              title="Ready to Start Your Email Marketing?"
              subtitle="Join hundreds of businesses already generating consistent revenue and building customer loyalty through strategic email marketing."
              buttonText="Launch Your Email Campaigns"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default EmailMarketing;
