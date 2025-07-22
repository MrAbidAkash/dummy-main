"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface DataType {
  id: string;
  title: string;
  description: string;
}

const Service = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const service_data: DataType[] = [
    {
      id: "01",
      title: "Digital Marketing Strategy & Execution",
      description: `Comprehensive SEO, social media marketing, content creation, PPC campaigns, and email marketing to maximize your online presence and drive qualified leads.`,
    },
    {
      id: "02",
      title: "Marketing CRM Implementation & Optimization",
      description: `Complete CRM setup, lead management automation, sales pipeline optimization, and seamless integration with marketing tools for streamlined operations.`,
    },
    {
      id: "03",
      title: "Business Systems & Automation",
      description: `Workflow automation, data analytics reporting, and customer experience optimization to eliminate chaos and enhance operational efficiency.`,
    },
    
  ];

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animate the section background
      gsap.fromTo(
        sectionRef.current,
        { backgroundColor: "#f0f0f0" },
        {
          backgroundColor: "#1a2a6c",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        },
      );

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        },
      );

      // Card animations
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Card container animation
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          },
        );

        // Number animation
        const number = card.querySelector(".cs_stroke_number span");
        if (number) {
          gsap.fromTo(
            number,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: i * 0.2 + 0.3,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            },
          );
        }

        // Connection line animation
        const line = card.querySelector(".cs_work_style_1");
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 0.8,
              delay: i * 0.2 + 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            },
          );
        }

        // Dot animation
        const dot = card.querySelector(".cs_work_style_2");
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              delay: i * 0.2 + 0.4,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            },
          );
        }

        // Text animation
        const title = card.querySelector(".cs_work_title");
        const description = card.querySelector(".cs_work_subtitle");

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.2 + 0.5,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            },
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.2 + 0.6,
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="cs_height_115 cs_height_lg_60"></div>
      <section ref={sectionRef}>
        <div className="cs_primary_bg">
          <div className="cs_height_135 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_section_heading_hr cs_style_1 cs_color_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2
                    className="cs_section_title anim_heading_title"
                    ref={headingRef}
                  >
                    Our Core Services: Driving Your Digital Success
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>

            <div className="cs_height_100 cs_height_lg_70"></div>
            <div className="anim_div_ShowLeftSide">
              <div className="cs_work cs_work_1">
                <div className="cs_card_work cs_style_1 cs_color_1">
                  {service_data.map((item, i) => (
                    <div
                      key={i}
                      className="cs_card"
                      ref={(el) => { cardRefs.current[i] = el; }}
                    >
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
                      <p className="cs_work_subtitle">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_150 cs_height_lg_60"></div>
        </div>
      </section>
    </>
  );
};

export default Service;
