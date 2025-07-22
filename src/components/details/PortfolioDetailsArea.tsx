"use client";


import React from 'react';

import Image from 'next/image';

import protfolio_details_1 from "@/assets/img/protfolio_details_1.jpg"; 
import protfolio_details_2 from "@/assets/img/portfoliodetails_2.jpg"; 
import protfolio_details_3 from "@/assets/img/portfoliodetails_1.jpg"; 
import protfolio_details_4 from "@/assets/img/portfolio_solution_1.jpg"; 
import protfolio_details_5 from "@/assets/img/portfolio_solution_2.jpg"; 
import protfolio_details_6 from "@/assets/img/portfolio_solution_3.jpg"; 



const PortfolioDetailsArea = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Leads360 Portfolio: A Showcase of Our Successful Growth Solutions
              </h2>
            </div>
            <div className="cs_section_heading_right cs_btn_anim">
              <div className="cs_btn cs_style_2 anim_div_ShowZoom">
                <a href="/contact" className="col cs_center">Get Started</a>
                <a href="/about" className="col cs_center">Case Studies</a>
                <a href="/service" className="col cs_center">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_100 cs_height_lg_60"></div>
 
      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Client</p>
                    <h6 className="cs_title_text">
                      TechStart Solutions <br /> Toronto, Canada
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">
                      Digital Marketing Strategy,<br /> CRM Implementation, Automation
                    </h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Results</p>
                    <h6 className="cs_title_text">
                      150% Traffic Increase <br /> 75% Lead Growth
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={protfolio_details_1} alt="protfolio_details_1" />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Our Work: Transforming Businesses Through Strategic Digital Solutions</h4>
                <p className="cs_text_style_body">
                  Welcome to the Leads360 portfolio, where we showcase a selection of our most impactful projects. Each case study represents a unique challenge, a tailored solution, and a story of sustainable business growth. As a leading digital transformation company, we take pride in our ability to deliver measurable results that empower our clients to thrive in the digital landscape.
                </p>
                <p className="cs_text_style_body">
                  Our portfolio is a testament to our commitment to excellence and our expertise in digital marketing, business optimization, and AI-driven strategies. As you explore our work, you will see how we have helped businesses across various industries overcome their growth hurdles and achieve their strategic objectives.
                </p>
              </div>
              <div className="cs_ul_ml">
                <h5 className="cs_heading_text">Featured Projects: Real-World Examples of Growth Without Chaos</h5>
                <ul>
                  <li>Digital Marketing Strategy & Execution - Comprehensive growth campaigns that drive results</li>
                  <li>Marketing CRM Implementation & Optimization - Streamlined systems for better lead management</li>
                  <li>Business Systems & Automation - Efficient workflows that scale without complexity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <div className="cs_height_75 cs_height_lg_45"></div>
 
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div className="reveal">
            <Image src={protfolio_details_2} alt="portfoliodetails_2" />
          </div>
          <div className="reveal">
            <Image src={protfolio_details_3} alt="portfoliodetails_1" />
          </div>
        </div>
      </div> 
      <div className="cs_height_150 cs_height_lg_60"></div>
 
      <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">
                    Example Project: Digital Transformation for TechStart Solutions
                  </h4>
                  <div className="cs_project_details" style={{ marginBottom: '30px' }}>
                    <p><strong>Industry:</strong> Technology Startup</p>
                    <p><strong>Services Provided:</strong> SEO Optimization, Social Media Marketing, CRM Implementation</p>
                  </div>
                  <div className="cs_project_challenge" style={{ marginBottom: '20px' }}>
                    <h5><strong>The Challenge:</strong></h5>
                    <p className="cs_text_style_body">
                      TechStart Solutions was struggling with low online visibility and inefficient lead management. Despite having innovative products, they couldn't reach their target audience effectively and were losing potential customers due to poor follow-up processes.
                    </p>
                  </div>
                  <div className="cs_project_solution" style={{ marginBottom: '20px' }}>
                    <h5><strong>Our Solution:</strong></h5>
                    <p className="cs_text_style_body">
                      Leads360 implemented a comprehensive SEO overhaul, targeted social media campaigns, and a custom CRM integration to streamline their sales process. We developed a multi-channel approach that aligned with their business goals and target market.
                    </p>
                  </div>
                  <div className="cs_project_results">
                    <h5><strong>The Results:</strong></h5>
                    <p className="cs_text_style_body">
                      Achieved a 150% increase in organic traffic, a 75% growth in qualified leads, and a significant reduction in administrative workload, enabling them to scale without chaos. The client now enjoys predictable growth and efficient operations.
                    </p>
                  </div>
                </div>
                <div className="cs_solutions_section_img_show">
                  <div className="portfolio_solution_1 reveal">
                    <Image src={protfolio_details_4} alt="portfolio_solution_1" />
                  </div>
                  <div className="portfolio_solution_2 reveal">
                    <Image src={protfolio_details_5} alt="portfolio_solution_2" />
                  </div>
                  <div className="portfolio_solution_3 reveal">
                    <Image src={protfolio_details_6} alt="portfolio_solution_3" />
                  </div>
                </div>
                <div className="cs_img_footer_title cs_color_1 anim_text_upanddowns">
                  <p>Ready to Transform Your Business? Let's create your success story together!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
 
      <div className="container">
        <div className="cs_portfolio_details">
          <div className="cs_section_next_prv anim_div_ShowZoom">
            <div className="cs_prv_btn">
              <a href="/portfolio">Back to Portfolio</a>
            </div>
            <div>|</div>
            <div className="cs_next">
              <a href="/contact">Start Your Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsArea;