 "use client";

import React from "react";
import Count from "../common/Count";

interface DataType {
  id: number;
  count: number;
  title: string;
  des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    count: 95,
    title: `Digital Marketing Expertise`,
    des: `Comprehensive SEO, social media, content marketing, PPC, and email marketing strategies that drive qualified leads and measurable ROI for small businesses.`,
  },
  {
    id: 2,
    count: 90,
    title: `CRM Implementation Success`,
    des: `Expert setup and optimization of Marketing CRM systems with lead management automation, sales pipeline optimization, and seamless tool integration.`,
  },
  {
    id: 3,
    count: 92,
    title: `Business Automation Efficiency`,
    des: `Workflow automation and process optimization that eliminates chaos, enhances operational efficiency, and drives sustainable business growth.`,
  },
];

const ServiceTeam = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title_2 anim_heading_title">
                Our Expertise & Success Metrics
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="cs_team_details cs_funfact">
            {service_data.map((item, i) => (
              <div key={i} className="cs_funfact_max_w">
                <div className="cs_funfact cs_style1">
                  <div className="cs_stroke_text me-4">
                    <span className="amin_auto_count d-flex">
                      <Count number={item.count} text={item.title} /> %
                    </span>
                  </div>
                  <div className="cs_height_55 cs_height_lg_25"></div>
                  <div className="">
                    <h6>{item.title}</h6>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTeam;
