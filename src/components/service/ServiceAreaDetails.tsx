"use client"
import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}
const service_data = [
  {
    id: "one",
    title: "Digital Marketing Strategy & Execution",
    description: `Comprehensive SEO, social media marketing, content creation, PPC campaigns, and email marketing to maximize your online presence and drive qualified leads.`,
  },
  {
    id: "two",
    title: "Marketing CRM Implementation & Optimization",
    description: `Complete CRM setup, lead management automation, sales pipeline optimization, and seamless integration with your marketing tools for streamlined operations.`,
  },
  {
    id: "three",
    title: "Business Systems & Automation",
    description: `Workflow automation, data analytics reporting, and customer experience optimization to eliminate chaos and enhance operational efficiency.`,
  },
];


const ServiceAreaDetails = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Our Core Services: Driving Your Digital Success
            </h4>
            <p className="cs_mp0 anim_text">
              At Leads360, we are a dedicated digital transformation company committed to helping small businesses achieve sustainable growth without chaos. Our suite of services is meticulously designed to address your unique challenges, providing tailored strategies and cutting-edge tools to optimize your operations, enhance your online presence, and drive measurable results.
            </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>

                    <h6 className="cs_work_title">{item.title}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;