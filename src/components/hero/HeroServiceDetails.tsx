
import React from 'react';
import Image from 'next/image';
import banner_img from '@/assets/img/service_details_banner.jpg';


interface DataType {
  title: string;
  description: string;
  features: string[];
}
const hero_contact: DataType = {
  title: "Leads360 Services: Your Path to Scalable Growth and Digital Transformation",
  description: `At Leads360, we are a dedicated digital transformation company committed to helping small businesses achieve sustainable growth without chaos. Our suite of services is meticulously designed to address the unique challenges you face, providing tailored strategies and cutting-edge tools to optimize your operations, enhance your online presence, and drive measurable results. We don't just offer services; we provide solutions that transform your business.`,
  features: [
    `Digital Marketing Strategy & Execution - SEO, Social Media, Content Marketing, PPC, and Email Marketing`,
    `Marketing CRM Implementation & Optimization - Complete CRM setup, lead management, and sales pipeline optimization`,
    `Business Systems & Automation - Workflow automation, data analytics, and customer experience optimization`,
  ]
}
const { title, description, features } = hero_contact

const HeroServiceDetails = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div> 
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                 {title}
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="service_details_banner" />
              </div>
            </div>
            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{description}</p>
                <ul className="anim_div_ShowDowns">
                  {features.map((item, i) => (
                    <li key={i}>{item}</li>                    
                  ))} 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default HeroServiceDetails;