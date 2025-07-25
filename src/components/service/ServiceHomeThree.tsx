
import React from 'react';

import services_exploring from "@/assets/img/services_exploring.jpg"
import sound_box_icon from "@/assets/img/sound_box_icon.jpg"
import Image from 'next/image';
import Link from 'next/link';

interface DataType {
  sub_title: string;
  title: string;
  service_data: {
    id: number;
    title: string;
    link: string;
  }[];
  notice_title: string;
  notice_des: string;
}

const service_content: DataType = {
  sub_title: "Our Core Services",
  title: "Driving Your Digital Success",
  service_data: [
    {
      id: 1,
      title: "01 / Digital Marketing Strategy & Execution",
      link: "/service/social-media-marketing",
    },
    {
      id: 2,
      title: "02 / Marketing CRM Implementation & Optimization",
      link: "/service/crm-implementation",
    },
    {
      id: 3,
      title: "03 / Business Systems & Automation",
      link: "/service/web-development-maintenance",
    },
  ],
  notice_title: `Leads360 Services: Your Path to Scalable Growth`,
  notice_des: `At Leads360, we are a dedicated digital transformation company committed to helping small businesses achieve sustainable growth without chaos.`,
}
const {
  sub_title,
  title,
  service_data,
  notice_title,
  notice_des
} = service_content

const ServiceHomeThree = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_service_exploring">
            <div className="cs_service_exploring_1">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">
                    {sub_title}
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="cs_height_150 cs_height_lg_20"></div>

              <ul className="cs_list_style_none cs_color_1 anim_div_ShowLeftSide">

                {service_data.map((item, i) =>
                  <li key={i}>
                    <Link href={item.link}>
                      <h3>{item.title}</h3>
                    </Link>
                  </li>
                )}

              </ul>

            </div>

            <div className="cs_service_exploring_2">
              <div className="cs_service_exploring_img">
                <div className="anim_div_ShowRightSide">
                  <Image src={services_exploring} className="cs_img" alt="services_exploring" />
                </div>
                <div className="cs_service_exploring_img_text cs_style_1 cs_color_1 anim_div_ShowDowns">
                  <Image src={sound_box_icon} alt="sound_box_icon" />
                  <h6 className="cs_white_color">
                    {notice_title}
                  </h6>
                  <p className="cs_font_16">
                    {notice_des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ServiceHomeThree;