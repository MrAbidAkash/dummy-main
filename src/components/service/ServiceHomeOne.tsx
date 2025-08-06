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
[];

const service_data: DataType[] = [
  {
    id: 1,
    title: `AI Voice Bot (for Calls or Website)`,
    des: `Missed calls? Overloaded front desk? We've got that covered.\n\nOur AI voice bot answers inbound calls or web enquiries with a natural, friendly tone — trained on your business process. It books jobs, collects key info, and hands over to your team only when needed.\n\nA virtual assistant that actually understands your business — and works 24/7 without the wage bill.\n\n• Trained on your services & scripts\n• Handles basic triage, quotes, and bookings\n• Integrates with your CRM and forms\n• Custom-built flows for different enquiry types`,
    link: "/service/social-media-marketing",
  },
  {
    id: 2,
    title: `AI Chatbot (for Website & Socials)`,
    des: `Busy inbox? Leads slipping through? Let's fix that.\n\nOur chatbots respond to web visitors and social media DMs instantly — answering FAQs, collecting info, and triggering next steps based on how you handle enquiries. Built to sound human, not robotic.\n\nSo while you're on the tools or with a client, your leads are still being looked after.\n\n• Available 24/7 across Instagram, Facebook & website\n• Built with your tone, FAQs, and workflows\n• Smart escalation to humans when needed\n• Fully synced with your CRM`,
    link: "/service/crm-implementation",
  },
  {
    id: 3,
    title: `AI Workflows & Integrations`,
    des: `Too many tools? Not enough time? Let's connect the dots.\n\nWe build custom workflows that automate your daily tasks — from email follow-ups to job tracking, invoicing, and review requests. And we connect your favourite tools (like ServiceM8, Cliniko, Xero, Google Calendar, GHL) so everything talks to each other.\n\nNo more double handling. No more missed steps. Just systems that keep up with your growth.\n\n• Automates admin without losing the human touch\n• Fully customised to how you work\n• Reduces errors, delays, and unnecessary back-and-forth\n• Designed for busy teams with big goals`,
    link: "/service/web-development-maintenance",
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
                Leads360 HQ Digital Additions
              </h2>
              <p style={{ 
                fontStyle: "italic", 
                fontSize: "20px", 
                color: "#FECA15",
                marginTop: "10px",
                lineHeight: "1.4",
                marginBottom: "20px"
              }}>
                Solving growing pains with smart, human-led AI systems.
              </p>
              <p style={{ 
                fontSize: "16px", 
                color: "var(--body-color)",
                lineHeight: "1.6",
                maxWidth: "800px",
                margin: "0 auto"
              }}>
                We don't use AI for the sake of it. Every digital addition we build is designed to reduce stress, eliminate repetitive tasks, and create better customer experiences — so you can focus on growing without the usual chaos.
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
                    {i === 0 ? "See It in Action →" : i === 1 ? "Explore Chatbots →" : "Discover AI Workflows →"}
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
