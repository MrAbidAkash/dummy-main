"use client";

import React, { useState } from "react";
// import portfolio_data from '@/data/portfolio_data';
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import portfolio_img_6 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_7.jpg";

interface DataType {
  id: number;
  category: string;
  img: StaticImageData;
  title: string;
  des: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    category: "Digital Marketing",
    img: portfolio_img_6,
    title: "TechStart Solutions Growth",
    des: "SEO Optimization, Social Media Marketing / 150% traffic increase, 75% lead growth",
  },
  {
    id: 2,
    category: "CRM Implementation",
    img: portfolio_img_7,
    title: "Professional Services CRM",
    des: "CRM Implementation, Lead Management / Streamlined sales process, 60% efficiency gain",
  },
  {
    id: 3,
    category: "Business Automation",
    img: portfolio_img_8,
    title: "Manufacturing Process Optimization",
    des: "Workflow Automation, Process Systems / 40% efficiency increase, reduced admin workload",
  },
  {
    id: 4,
    category: "Digital Marketing",
    img: portfolio_img_9,
    title: "Healthcare Practice Expansion",
    des: "Digital Marketing Strategy, Patient Acquisition / 200% ROI, sustainable growth",
  },
  {
    id: 5,
    category: "Complete Transformation",
    img: portfolio_img_10,
    title: "Local Handyman Business",
    des: "Complete Digital Transformation / 3x ROI, Facebook ad funnel, CRM setup",
  },
  {
    id: 6,
    category: "CRM Implementation",
    img: portfolio_img_11,
    title: "Real Estate Agency Growth",
    des: "CRM Setup, Sales Pipeline Automation / Lead nurturing system, predictable growth",
  },
];

// data
const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
];

const Portfolio = () => {
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
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
                Leads360 Portfolio: A Showcase of Our Successful Growth Solutions
              </h2>
              <p className="cs_section_subtitle">
                Our Work: Transforming Businesses Through Strategic Digital Solutions
              </p>
              <div className="cs_portfolio_intro">
                <p>
                  Welcome to the Leads360 portfolio, where we showcase a selection of our most impactful projects. Each case study represents a unique challenge, a tailored solution, and a story of sustainable business growth. As a leading digital transformation company, we take pride in our ability to deliver measurable results that empower our clients to thrive in the digital landscape.
                </p>
                <p>
                  Our portfolio is a testament to our commitment to excellence and our expertise in digital marketing, business optimization, and AI-driven strategies. As you explore our work, you will see how we have helped businesses across various industries overcome their growth hurdles and achieve their strategic objectives. Each project highlights our dedication to providing custom solutions that drive real-world impact.
                </p>
                <h3>Featured Projects: Real-World Examples of Growth Without Chaos</h3>
                <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
                  Each project below follows our proven methodology: identifying the challenge, implementing our tailored solution, and delivering measurable results that enable businesses to scale without chaos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>
            <div className="row">
              <div className="cs_isotop_item_menu col-md-12">
                <ul className="anim_div_ShowZoom style_active">
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
            <div className="cs_isotop_items_details row">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="col-md-4 cs_item cs_ui_design cs_development"
                >
                  <Link
                    href="/portfolio-details"
                    className="cs_portfolio cs_style_1"
                  >
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">{item.title}</h2>
                      <div className="cs_portfolio_subtitle">{item.des}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
          <div>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="/contact" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Start Your Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
