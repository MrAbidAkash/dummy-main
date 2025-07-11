"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface DataType {
  id: number;
  title: string;
  description: string;
}

const banner_data: DataType[] = [
  {
    id: 1,
    title: `Social Media Marketing`,
    description: `Build authentic audience relationships with value‑driven content and community management on Facebook, Instagram, and LinkedIn to drive engagement, referrals, and brand loyalty.`,
  },
  {
    id: 2,
    title: `Web Development & Maintenance`,
    description: `Design and maintain high‑performance, SEO‑friendly websites that convert visitors into customers, with ongoing updates, security patches, and performance optimizations.`,
  },
  {
    id: 3,
    title: `CRM Implementation`,
    description: `Streamline your workflows and client follow‑ups with a tailored CRM solution—automate appointment reminders, sales pipelines, and nurture sequences to boost retention and revenue.`,
  },
  {
    id: 4,
    title: `LinkedIn Authority & Lead Gen`,
    description: `Establish B2B thought leadership and generate targeted leads through optimized LinkedIn profiles, content strategies, and outreach campaigns.`,
  },
  {
    id: 5,
    title: `Email Marketing`,
    description: `Create and execute value‑driven email campaigns—newsletters, drip sequences, and promotional blasts—to nurture subscribers, increase open rates, and drive sales.`,
  },
];


// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const HeroService = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Store card references
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  useGSAP(
    () => {
      // Title animation - typing effect
      const titleChars = titleRef.current?.textContent?.split("") || [];
      titleRef.current!.textContent = "";

      const typingTl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      titleChars.forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        titleRef.current?.appendChild(span);

        typingTl.to(
          span,
          {
            opacity: 1,
            duration: 0.05,
            ease: "power2.out",
          },
          i * 0.02,
        );
      });

      // Card animations with staggered entrance
      gsap.from(cardRefs.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".cs_card_1_list",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Hover animations for cards
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const link = card.querySelector(".cs_card_link");
        const number = card.querySelector(".cs_card_number");

        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
          .to(card, {
            y: -15,
            duration: 0.3,
            ease: "power2.out",
          })
          .to(
            number,
            {
              background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
              duration: 0.2,
            },
            0,
          )
          .to(
            link,
            {
              x: 10,
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
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section className="position-relative">
        <div className="container">
          <div className="cs_section_heading cs_style_1">
            <div className="cs_section_heading_text">
              <h2
                ref={titleRef}
                className="cs_section_title anim_word_writting"
              >
                Transform Your Online Presence with Our Digital Agency Services
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_1_list">
            {banner_data.map((item, i) => (
              <div
                key={i}
                ref={(el) => setCardRef(el, i)}
                className="cs_card cs_style_1 anim_div_ShowDowns"
              >
                <div className="cs_card_left">
                  <div
                    className="cs_card_number cs_primary_font"
                    style={{
                      backgroundImage: `url('/assets/img/hero_img_1.jpg')`,
                      transition: "background 0.3s ease",
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>
                <div className="cs_card_right">
                  <div className="cs_card_right_in">
                    <h2 className="cs_card_title">
                      <Link href="/service-details">{item.title}</Link>
                    </h2>
                    <div className="cs_card_subtitle">{item.description}</div>
                  </div>
                </div>
                <div className="cs_card_link_wrap">
                  <Link href="/service-details" className="cs_card_link">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
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

export default HeroService;
