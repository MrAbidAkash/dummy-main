"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const CRMImplementation = () => {
  const benefits = [
    {
      title: "Streamlined Operations",
      description:
        "Automate repetitive tasks and organize your business processes to save time and reduce errors.",
      icon: "⚡",
    },
    {
      title: "Better Customer Relationships",
      description:
        "Track all customer interactions and provide personalized service that builds loyalty and trust.",
      icon: "🤝",
    },
    {
      title: "Increased Sales",
      description:
        "Follow up with leads automatically and never miss a sales opportunity with our CRM systems.",
      icon: "💰",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Get insights into your business performance with detailed reports and analytics.",
      icon: "📊",
    },
  ];

  const features = [
    {
      title: "Lead Management",
      description:
        "Capture, track, and nurture leads through automated workflows and follow-up sequences.",
      capabilities: [
        "Lead scoring",
        "Automated follow-ups",
        "Pipeline tracking",
        "Conversion optimization",
      ],
    },
    {
      title: "Customer Database",
      description:
        "Centralized customer information with complete interaction history and preferences.",
      capabilities: [
        "Contact management",
        "Interaction history",
        "Customer profiles",
        "Data organization",
      ],
    },
    {
      title: "Automation Workflows",
      description:
        "Automate repetitive tasks like appointment reminders, follow-ups, and customer communications.",
      capabilities: [
        "Email automation",
        "SMS reminders",
        "Task automation",
        "Calendar integration",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Business Analysis",
      description:
        "We analyze your current processes and identify opportunities for automation and improvement.",
    },
    {
      step: "02",
      title: "CRM Selection",
      description:
        "Choose the perfect CRM platform based on your business size, needs, and budget.",
    },
    {
      step: "03",
      title: "Custom Setup",
      description:
        "Configure your CRM with custom fields, workflows, and automation rules specific to your business.",
    },
    {
      step: "04",
      title: "Training & Support",
      description:
        "Comprehensive training for your team and ongoing support to ensure successful adoption.",
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
                    CRM Implementation
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Streamline Your Business & Never Miss a Lead
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Transform your business operations with a custom CRM
                      system that automates follow-ups, organizes customer data,
                      and helps you close more deals. Perfect for tradespeople
                      and small businesses looking to scale efficiently.
                    </div>
                    <div className="cs_height_20 cs_height_lg_20"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Get Your CRM
                        </Link>
                        <Link
                          href="#features"
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
                      Why Implement a CRM?
                    </div>
                    <h2 className="cs_section_title">
                      Transform Your Business Operations
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

            {/* Features Section */}
            <section
              id="features"
              className="cs_features_section cs_primary_bg"
            >
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">CRM Features</div>
                    <h2 className="cs_section_title">
                      Powerful Tools to Grow Your Business
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {features.map((feature, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_feature_card">
                        <h3 className="cs_feature_title">{feature.title}</h3>
                        <p className="cs_feature_description">
                          {feature.description}
                        </p>
                        <ul className="cs_feature_capabilities">
                          {feature.capabilities.map(
                            (capability, capabilityIndex) => (
                              <li key={capabilityIndex}>{capability}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_height_100 cs_height_lg_60"></div>
            </section>

            {/* Process Section */}
            <section className="cs_process_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Our Process</div>
                    <h2 className="cs_section_title">
                      How We Implement Your Perfect CRM
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
              title="Ready to Streamline Your Business?"
              subtitle="Join hundreds of businesses already saving time and increasing sales with our custom CRM implementations."
              buttonText="Start Your CRM Setup"
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
