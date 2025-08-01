
import React from 'react';
import Image from 'next/image';
import image from "@/assets/img/cp_services.jpg";


interface DataType {
  title: string;
  des: string;
  service_data: {
    id: number;
    title: string;
  }[];
}

const service_content = {
  title: "Leads360 Services",
  des: "Your Path to Scalable Growth & Digital Transformation",
  service_data: [
    { id: 1, title: "Digital Marketing Strategy & Execution" },
    { id: 2, title: "Marketing CRM Implementation & Optimization" },
    { id: 3, title: "Business Systems & Automation" },
  ],
};
const { title, des, service_data } = service_content

const ServiceHomeFour = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                {title}
              </div>
              <h2 className="cs_section_title anim_heading_title">
                {des}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_50"></div>
          <div className="row cs_cr_pr cs_row_gap_150">
            <div className="col-md-6 mb-4">
              <div className="h-100">
                <Image src={image} className="w-100 h-100 anim_div_ShowLeftSide" alt="cp_services" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="anim_div_ShowRightSide">
                {service_data.map((item, i) =>
                  <div key={i} className="cs_creative_protfolio cs_card_style_change">
                    <div className="cs_card cs_style_1 cs_color_1">
                      <div className="cs_card_right">
                        <div className="cs_card_right_in">
                          <h2 className="cs_card_title">
                            <a href="#" className="">
                              <span>0{item.id} / </span> {item.title}
                            </a>
                          </h2>
                        </div>
                      </div>
                      <div className="cs_card_link_wrap">
                        <a href="#" className="cs_card_link">
                          <span>
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                                fill="currentColor" />
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                                fill="currentColor" />
                            </svg>
                          </span>
                          <span>
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                                fill="currentColor" />
                              <path fillRule="evenodd" clipRule="evenodd"
                                d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                                fill="currentColor" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="cs_hr_design"></div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceHomeFour;