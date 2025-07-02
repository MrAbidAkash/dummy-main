"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const LinkedInAuthorityLeadGen = () => {
  const benefits = [
    {
      title: "Establish Thought Leadership",
      description:
        "Position yourself as an industry expert and build credibility with potential clients and partners.",
      icon: "👑",
    },
    {
      title: "Generate B2B Leads",
      description:
        "Connect with decision-makers and generate high-quality leads through strategic networking and content.",
      icon: "🎯",
    },
    {
      title: "Build Professional Network",
      description:
        "Expand your professional network with industry leaders, potential clients, and referral partners.",
      icon: "🌐",
    },
    {
      title: "Increase Brand Visibility",
      description:
        "Boost your brand awareness and stay top-of-mind with your target audience through consistent engagement.",
      icon: "📈",
    },
  ];

  const services = [
    {
      title: "Profile Optimization",
      description:
        "Transform your LinkedIn profile into a powerful lead generation tool with compelling copy and strategic keywords.",
      features: [
        "Professional headline",
        "Compelling summary",
        "Keyword optimization",
        "Visual branding",
      ],
    },
    {
      title: "Content Strategy",
      description:
        "Create and share valuable content that positions you as a thought leader and attracts your ideal clients.",
      features: [
        "Industry insights",
        "Case studies",
        "Thought leadership",
        "Engagement posts",
      ],
    },
    {
      title: "Lead Generation Campaigns",
      description:
        "Target and connect with decision-makers through personalized outreach and relationship building.",
      features: [
        "Prospect research",
        "Personalized messaging",
        "Follow-up sequences",
        "Lead nurturing",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Profile Audit & Optimization",
      description:
        "We analyze and optimize your LinkedIn profile to maximize visibility and attract your target audience.",
    },
    {
      step: "02",
      title: "Content Strategy Development",
      description:
        "Create a content plan that showcases your expertise and resonates with your ideal clients.",
    },
    {
      step: "03",
      title: "Lead Generation Setup",
      description:
        "Implement targeted outreach campaigns and networking strategies to generate qualified leads.",
    },
    {
      step: "04",
      title: "Ongoing Management",
      description:
        "Continuous content creation, engagement, and relationship building to maintain momentum.",
    },
  ];

  const targetAudience = [
    {
      category: "B2B Decision Makers",
      description: "CEOs, managers, and executives looking for your services",
      targeting: ["Job titles", "Company size", "Industry", "Location"],
    },
    {
      category: "Industry Professionals",
      description: "Peers and potential referral partners in your industry",
      targeting: [
        "Professional groups",
        "Industry events",
        "Shared connections",
        "Skills endorsements",
      ],
    },
    {
      category: "Potential Clients",
      description: "Businesses that need your specific services",
      targeting: [
        "Company type",
        "Pain points",
        "Growth stage",
        "Budget indicators",
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
                  backgroundImage: `url(/assets/img/hero_img_linkedin.jpg)`,
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
                    LinkedIn Authority & Lead Gen
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Build Authority & Generate B2B Leads on LinkedIn
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Transform your LinkedIn presence into a powerful lead
                      generation machine. We help you establish thought
                      leadership, connect with decision-makers, and generate
                      high-quality B2B leads through strategic content and
                      networking.
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
                          Build <br /> Your Authority
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
                      Why LinkedIn Marketing?
                    </div>
                    <h2 className="cs_section_title">
                      The Power of Professional Networking
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
                      Our LinkedIn Services
                    </div>
                    <h2 className="cs_section_title">
                      Complete LinkedIn Marketing Solutions
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

            {/* Target Audience Section */}
            <section className="cs_audience_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Target Audience</div>
                    <h2 className="cs_section_title">
                      Reach Your Ideal B2B Clients
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_audience_card">
                        <h3 className="cs_audience_category">
                          {audience.category}
                        </h3>
                        <p className="cs_audience_description">
                          {audience.description}
                        </p>
                        <ul className="cs_audience_targeting">
                          {audience.targeting.map((target, targetIndex) => (
                            <li key={targetIndex}>{target}</li>
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
                      How We Build Your LinkedIn Authority
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
              title="Ready to Build Your LinkedIn Authority?"
              subtitle="Join hundreds of professionals already generating quality B2B leads and establishing thought leadership on LinkedIn."
              buttonText="Start Your LinkedIn Strategy"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default LinkedInAuthorityLeadGen;
