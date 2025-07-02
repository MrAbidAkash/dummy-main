"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const SocialMediaMarketing = () => {
  const benefits = [
    {
      title: "Increased Brand Awareness",
      description:
        "Build recognition in your local community through consistent, engaging content that showcases your expertise and work quality.",
      icon: "📈",
    },
    {
      title: "More Qualified Leads",
      description:
        "Attract potential clients who are actively looking for your services through targeted content and community engagement.",
      icon: "🎯",
    },
    {
      title: "Customer Trust & Loyalty",
      description:
        "Build lasting relationships with your audience through authentic content and responsive community management.",
      icon: "🤝",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "Generate leads and build your brand without the high costs of traditional advertising methods.",
      icon: "💰",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Strategy Development",
      description:
        "We analyze your business, target audience, and competitors to create a customized social media strategy.",
    },
    {
      step: "02",
      title: "Content Creation",
      description:
        "Our team creates engaging, industry-specific content that resonates with your target audience.",
    },
    {
      step: "03",
      title: "Community Management",
      description:
        "We actively engage with your audience, respond to comments, and build meaningful relationships.",
    },
    {
      step: "04",
      title: "Performance Optimization",
      description:
        "Continuous monitoring and optimization to ensure maximum engagement and lead generation.",
    },
  ];

  const platforms = [
    {
      name: "Facebook",
      description:
        "Perfect for reaching local customers and building community trust through posts, stories, and live videos.",
      features: [
        "Local targeting",
        "Community groups",
        "Customer reviews",
        "Business page optimization",
      ],
    },
    {
      name: "Instagram",
      description:
        "Showcase your work with high-quality photos and videos, stories, and reels to attract visual-focused customers.",
      features: [
        "Visual storytelling",
        "Stories & Reels",
        "Hashtag strategy",
        "IGTV content",
      ],
    },
    {
      name: "LinkedIn",
      description:
        "Establish thought leadership and connect with B2B clients through professional content and networking.",
      features: [
        "Professional networking",
        "Thought leadership",
        "B2B lead generation",
        "Industry insights",
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
                  backgroundImage: `url(/assets/img/hero_img_social.jpg)`,
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
                    Social Media Marketing
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "60px" }}>
                    Build Authentic Relationships & Grow Your Business
                  </h1>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">
                      Transform your social media presence into a powerful lead
                      generation tool. We help tradespeople and small businesses
                      build authentic relationships with their local community
                      through strategic content creation and community
                      management.
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
                      Why Choose Our Social Media Marketing?
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

            {/* Process Section */}
            <section id="process" className="cs_process_section cs_primary_bg">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1 cs_color_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">Our Process</div>
                    <h2 className="cs_section_title">
                      How We Transform Your Social Media Presence
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

            {/* Platforms Section */}
            <section className="cs_platforms_section">
              <div className="cs_height_100 cs_height_lg_60"></div>
              <div className="container">
                <div className="cs_section_heading cs_style_1">
                  <div className="cs_section_heading_text">
                    <div className="cs_section_subtitle">
                      Platforms We Manage
                    </div>
                    <h2 className="cs_section_title">
                      Strategic Presence Across All Major Platforms
                    </h2>
                  </div>
                </div>
                <div className="cs_height_50 cs_height_lg_30"></div>
                <div className="row">
                  {platforms.map((platform, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="cs_platform_card">
                        <h3 className="cs_platform_title">{platform.name}</h3>
                        <p className="cs_platform_description">
                          {platform.description}
                        </p>
                        <ul className="cs_platform_features">
                          {platform.features.map((feature, featureIndex) => (
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

            {/* CTA Section */}
            <CTA
              title="Ready to Transform Your Social Media Presence?"
              subtitle="Join hundreds of businesses already getting more leads and building stronger relationships through our proven social media strategies."
              buttonText="Start Your Social Media Strategy"
              className="cs_primary_bg"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default SocialMediaMarketing;
