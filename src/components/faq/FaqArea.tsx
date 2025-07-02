"use client";
import React, { useState } from "react";

interface DataType {
  id: string;
  question: string;
  ans: string;
}
const faq_data: DataType[] = [
  {
    id: "One",
    question: `What’s the best way for tradies to use Facebook and Instagram to gain more clients?
`,
    ans: `Tradespeople can showcase their work with before-and-after photos, share customer testimonials, and use location tags to reach local clients. Running targeted ads can increase reach, while posting consistently and engaging with comments builds community trust, turning followers into clients.

`,
  },
  {
    id: "Two",
    question: `What are the benefits of using a CRM for managing client relationships in allied health?
`,
    ans: `For allied health, a CRM provides a structured way to track client interactions, schedule appointments, and follow up on care plans. This ensures clients feel valued, improves continuity of care, and increases the likelihood of repeat visits and referrals.

`,
  },
  {
    id: "Three",
    question: `Can automation help streamline my electrical business operations?
`,
    ans: `Yes, automation can handle repetitive tasks like appointment scheduling, reminders, and invoice follow-ups, reducing administrative workload. This allows electricians to focus on service delivery, improves response times, and creates a more organized workflow.

`,
  },
  {
    id: "Four",
    question: `What are the top digital marketing tools for tradies and allied health professionals?
`,
    ans: `Popular tools include Google My Business for local SEO, Facebook and Instagram for social media, and platforms like High Level or HubSpot or Zoho for CRM. These tools help increase visibility, streamline client management, and automate marketing efforts.

`,
  },
  {
    id: "Five",
    question: `How can social media marketing drive more business for electricians and other tradies?
`,
    ans: `Social media marketing highlights your expertise and showcases your work, helping build credibility. By sharing project photos, client testimonials, and engaging content, tradies can reach new customers, stay top-of-mind with locals, and encourage referrals.

`,
  },
  {
    id: "Six",
    question: `How can Leads360 help small businesses scale efficiently?
`,
    ans: `At Leads360 we bring our expertise, tools, and strategy, allowing small businesses to reach more clients without hiring in-house staff. We handle content creation, ad management, and analytics, helping businesses grow while saving time and focusing on core services.

.`,
  },
];

const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1">
          <div className="cs_section_heading_text">
            <div className="mb-3 anim_text_writting">FAQ</div>
            <h2 className="cs_section_title anim_text_writting">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>

      <div className="cs_height_100 cs_height_lg_60"></div>

      <div className="container">
        <div className="cs_accordeon anim_div_ShowDowns">
          {faq_data.map((item, i) => (
            <div
              key={i}
              onClick={() => toggleAccordion(i)}
              className={`cs_accordion_item cs_color_1 ${
                i === activeIndex ? "active cs_icon" : ""
              }`}
            >
              <div className="cs_accordion_header">
                <p
                  className="cs_accordion_title cs_m0"
                  id={`heading${item.id}`}
                >
                  {item.question}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  width="30"
                  style={{
                    transform: i === activeIndex ? "rotate(-90deg)" : "none",
                  }}
                >
                  <path
                    style={{ fill: `#ffffff` }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>

              <div
                className={`cs_accordion_body ${
                  i === activeIndex ? "" : "d-none"
                }`}
              >
                {item.ans}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default FaqArea;
