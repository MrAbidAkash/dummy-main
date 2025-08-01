"use client";
import React, { useState } from "react";

import portfolio_img_1 from "@/assets/img/recent_project_1.jpg";
import portfolio_img_2 from "@/assets/img/recent_project_2.jpg";
import portfolio_img_3 from "@/assets/img/recent_project_3.jpg";
import portfolio_img_4 from "@/assets/img/recent_project_4.jpg";
import portfolio_img_5 from "@/assets/img/recent_project_5.jpg";
import portfolio_img_6 from "@/assets/img/recent_project_6.jpg";
import portfolio_img_7 from "@/assets/img/recent_project_7.jpg";
import portfolio_img_8 from "@/assets/img/recent_project_8.jpg";
import portfolio_img_9 from "@/assets/img/recent_project_9.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  subtitle: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "Social Media",
    img: portfolio_img_1,
    title: "Plumbing Business Growth",
    subtitle: "Social Media Marketing / Lead Generation",
  },
  {
    id: 2,
    category: "Facebook Ads",
    img: portfolio_img_2,
    title: "Dental Practice Branding",
    subtitle: "Facebook Ads / Website Design",
  },
  {
    id: 3,
    category: "CRM Implementation",
    img: portfolio_img_3,
    title: "Electrician Lead System",
    subtitle: "CRM Implementation / Automation",
  },
  {
    id: 4,
    category: "Email Marketing",
    img: portfolio_img_4,
    title: "Physiotherapy Clinic",
    subtitle: "Email Marketing / Social Media",
  },
  {
    id: 5,
    category: "Web Development",
    img: portfolio_img_5,
    title: "HVAC Business Scaling",
    subtitle: "Complete Digital Marketing",
  },
  {
    id: 6,
    category: "LinkedIn Marketing",
    img: portfolio_img_6,
    title: "Landscaping Company",
    subtitle: "Website Design / SEO",
  },
  {
    id: 7,
    category: "Social Media",
    img: portfolio_img_7,
    title: "Roofing Contractor",
    subtitle: "Social Media / Google Ads",
  },
  {
    id: 8,
    category: "Facebook Ads",
    img: portfolio_img_8,
    title: "Cleaning Service",
    subtitle: "Facebook Ads / Lead Generation",
  },
  {
    id: 9,
    category: "CRM Implementation",
    img: portfolio_img_9,
    title: "Handyman Business",
    subtitle: "CRM Setup / Automation",
  },
];

// data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const PortfolioHomeFour = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_heading_title">
                Some Recent Project
              </h2>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_30"></div>
          <div className="row overflow-hidden">
            <div className="col-md-12">
              <div className="cs_creative_protfolio_menu anim_div_ShowZoom">
                <ul>
                  {categories.map((cate, i) => (
                    <React.Fragment key={i}>
                      <li
                        onClick={() => filterItems(cate)}
                        className={`${cate === activeCategory ? "active" : ""}`}
                      >
                        {cate}
                      </li>{" "}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="cs_creative_protfolio_details row">
                {items.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="col-md-4 mb-5 cs_project_card cs_ui_design cs_development anim_div_ShowDowns">
                      <Link href="/portfolio-details">
                        <div className="cs_project_card_img">
                          <Image src={item.img} alt="recent_project_1" />
                        </div>
                        <div className="cs_project_card_text">
                          <h6 className="cs_title">{item.title}</h6>
                          <p className="cs_subtitle">{item.subtitle}</p>
                        </div>
                      </Link>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeFour;
