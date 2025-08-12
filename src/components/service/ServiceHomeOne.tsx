import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface DataType {
  id: number;
  title: string;
  des: string;
  link: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    title: `Your Challenges? We Get It.`,
    des: `"I keep missing calls, DMs, and emails — I just can't keep up."\n\nLeads slip through, stalling your service business growth.\n\n"I know we need follow-ups and reviews... but it never happens."\n\nManual tasks eat time, leaving no room for consistent client nurturing.\n\n"All our tools work... but none of them talk to each other."\n\nDisconnected systems create chaos, slowing down your service business.`,
    link: "/contact",
  },
  {
    id: 2,
    title: `How We Fix It with GoHighLevel CRM`,
    des: `Convert & Nurture\n\n• GoHighLevel CRM tracks leads from web, social, and calls in one place\n• Email + SMS automation for follow-ups and rebooking\n• Online booking tools for instant scheduling\n• Review requests to build credibility across Australia\n\nScale with Systems\n\n• AI voice bots handle missed calls for tradies and clinicians\n• Website + social media chatbots respond 24/7\n• Automation workflows reduce admin chaos\n• Integrations with Xero, Cliniko, ServiceM8, and Calendly`,
    link: "/contact",
  },
  {
    id: 3,
    title: `Why Choose Leads360 for Your Service Business?`,
    des: `Results That Drive Growth: At Leads360, we're obsessed with delivering measurable outcomes. Our custom GoHighLevel CRM solutions save service-based businesses 10-15 hours weekly, cut operational costs by up to 20%, and drive 25% revenue growth through effective lead tracking.\n\nAlways Ahead of the Curve: We stay updated with the latest CRM technologies, integrating cutting-edge AI voice bots and chatbots to keep your service business competitive.\n\nHonoring Tradition, Embracing Innovation: We respect the traditions that make your service business unique — whether it's the personal touch of a tradie's customer service or a clinician's patient care.\n\nJoin the many service-based businesses across Australia who trust Leads360 to transform chaos into growth.`,
    link: "/contact",
  },
];

const ServiceHomeOne = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Store card references
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  useGSAP(
    () => {
      // Animation for section heading elements
      const tlHeading = gsap.timeline({
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reset",
        },
      });

      tlHeading
        .from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "back.out(1.2)",
          },
          "-=0.3",
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            ease: "elastic.out(1.2, 0.75)",
          },
          "-=0.2",
        );

      // Card animations with staggered entrance
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".cs_card_1_list",
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reset",
        },
      });

      // Hover animations for cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const button = card.querySelector(".cs_card_link");
        const number = card.querySelector(".cs_card_number");

        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
          .to(card, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            number,
            {
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
              duration: 0.3,
            },
            0,
          )
          .to(
            button,
            {
              x: 5,
              duration: 0.3,
            },
            0,
          );

        // Add event listeners
        card.addEventListener("mouseenter", () => hoverTl.play());
        card.addEventListener("mouseleave", () => hoverTl.reverse());
      });

      // Clean up event listeners
      return () => {
        cardRefs.current.forEach((card) => {
          if (!card) return;
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
        });
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef}>
      <section className="cs_primary_bg position-relative">
        <div className="container">
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <h2
                ref={titleRef}
                className="cs_section_title anim_heading_title"
              >
                Service Business Solutions That Actually Work
              </h2>
              <p style={{ 
                fontStyle: "italic", 
                fontSize: "20px", 
                color: "#FECA15",
                marginTop: "10px",
                lineHeight: "1.4",
                marginBottom: "20px"
              }}>
                From chaos to growth — we understand your daily challenges.
              </p>
              <p style={{ 
                fontSize: "16px", 
                color: "var(--body-color)",
                lineHeight: "1.6",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                Whether you're a tradie, allied health professional, or service-based enterprise across Australia, we build GoHighLevel CRM systems that solve real problems and drive measurable results.
              </p>
            </div>
          </div>
          <div className="cs_card_1_list">
            {service_data.map((item, i) => (
              <div
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                key={i}
                className="cs_card cs_style_1 cs_color_1 anim_div_ShowDowns"
              >
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url(/assets/img/hero_img_1.jpg)`,
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href={item.link}>{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.des}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link 
                    href={item.link}
                    className="cs_card_link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#FECA15",
                      color: "#000",
                      padding: "12px 24px",
                      borderRadius: "25px",
                      fontWeight: "600",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      border: "2px solid #FECA15",
                      minWidth: "180px",
                      height: "auto",
                      whiteSpace: "nowrap",
                      lineHeight: "1.2",
                      textAlign: "center",
                      boxSizing: "border-box"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#FECA15";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#FECA15";
                      e.currentTarget.style.color = "#000";
                    }}
                  >
                    {i === 0 ? "Understand Your Challenges →" : i === 1 ? "See Our Solutions →" : "Choose Leads360 →"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHomeOne;
