'use client'

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import Link from 'next/link';
import CTA from '@/components/common/CTA';

const DigitalMarketingStrategy = () => {
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
                style={{ backgroundImage: `url(/assets/img/hero_img_digital.jpg)` }}
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
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.989 0.403806 127.696 0.696699C127.403 0.989593 127.403 1.46447 127.696 1.75736L131.939 6L127.696 10.2426C127.403 10.5355 127.403 11.0104 127.696 11.3033C127.989 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Digital Marketing Strategy</span>
                  </div>
                  <h1 className="cs_hero_title">
                    Transform Your Digital Presence with Data-Driven Marketing
                  </h1>
                  <div className="cs_hero_subtitle">
                    Comprehensive digital marketing strategies that generate qualified leads, 
                    increase brand visibility, and drive measurable business growth.
                  </div>
                  <div className="cs_hero_btn">
                    <Link href="/contact" className="cs_btn cs_style_1">
                      <span>Get Started Today</span>
                      <svg
                        width="19"
                        height="13"
                        viewBox="0 0 19 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Details Section */}
            <section className="cs_shape_wrap_4 cs_parallax">
              <div className="cs_height_200 cs_height_lg_120"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="cs_section_heading cs_style_1">
                      <div className="cs_section_heading_text">
                        <h2 className="cs_section_title anim_text_writting">
                          Strategic Digital Marketing That Delivers Results
                        </h2>
                        <div className="cs_section_subtitle anim_text_writting">
                          Our comprehensive digital marketing approach combines proven strategies 
                          with cutting-edge technology to create campaigns that not only reach 
                          your target audience but convert them into loyal customers.
                        </div>
                      </div>
                    </div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                  </div>
                  <div className="col-lg-7">
                    <div className="anim_div_ShowDowns">
                      <p>
                        In today's competitive digital landscape, having a strategic approach 
                        to digital marketing is essential for business growth. Our team develops 
                        custom digital marketing strategies that align with your business goals 
                        and target audience.
                      </p>
                      <p>
                        From search engine optimization and content marketing to social media 
                        management and paid advertising, we create integrated campaigns that 
                        maximize your ROI and drive sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_150 cs_height_lg_80"></div>
            </section>

            <CTA
              title="Ready to Accelerate Your Digital Growth?"
              subtitle="Let's create a comprehensive digital marketing strategy that transforms your online presence and drives measurable results for your business."
              buttonText="Start Your Digital Transformation"
              buttonLink="/contact"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default DigitalMarketingStrategy;
