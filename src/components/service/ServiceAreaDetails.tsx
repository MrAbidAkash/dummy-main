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
    title: "Audit",
    description: `We start with a deep dive into your metrics, audiences, and current marketing assets to uncover opportunities.`,
  },
  {
    id: "two",
    title: "Strategy",
    description: `Next, we craft a bespoke roadmap—social content plans, ad campaigns, and automation flows—tailored to your goals.`,
  },
  {
    id: "three",
    title: "Implementation",
    description: `Our team executes campaigns, builds your CRM workflows, and launches website or email updates to drive real results.`,
  },
  {
    id: "four",
    title: "Optimize",
    description: `We continuously monitor performance, refine targeting and creative, and iterate your systems for maximum ROI.`,
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
              Specialization & Working Process
            </h4>
            <p className="cs_mp0 anim_text">
              Welcome to our digital agency! We specialize in helping businesses like yours succeed online.
              From website design and development to digital marketing and advertising, we have the tools and
              expertise to elevate your online presence.
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