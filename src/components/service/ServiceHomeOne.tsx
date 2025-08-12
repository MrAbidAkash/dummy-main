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
    title: `CRM`,
    des: `Comprehensive Customer Relationship Management solutions to streamline your business processes. Track leads, manage customer interactions, and automate follow-ups to boost conversion rates and enhance customer satisfaction.`,
    link: "/service/crm",
  },
  {
    id: 2,
    title: `AI Solutions`,
    des: `Cutting-edge artificial intelligence tools to transform your business operations. From AI chatbots and voice assistants to intelligent automation and predictive analytics, harness the power of AI to stay ahead of the competition.`,
    link: "/service/ai-solutions",
  },
  {
    id: 3,
    title: `Digital Packages`,
    des: `Complete digital transformation packages tailored to your business needs. Includes website development, digital marketing strategies, social media management, and online presence optimization to maximize your digital footprint.`,
    link: "/service/digital-packages",
  },
  {
    id: 4,
    title: `Custom`,
    des: `Bespoke solutions designed specifically for your unique business requirements. Our team works closely with you to understand your challenges and create tailored solutions that perfectly fit your workflow and objectives.`,
    link: "/service/custom",
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
                    Learn More →
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
