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
    title: `Voice AI for Business Calls`,
    des: `Never miss a call. Never miss a lead.\n\nWe build empathetic voice bots that handle your inbound calls with natural conversation — qualifying enquiries, collecting details, and guiding people to the right next step.\n\n• Custom voice scripts (written with a human tone)\n• Real-time call triage and lead routing\n• Integrates with your CRM, calendar, or website forms\n• Perfect for tradies, clinics, agents, and busy front desks\n\nSave hours on admin, capture more leads, and give callers a better experience — even after hours.`,
    link: "/service/social-media-marketing",
  },
  {
    id: 2,
    title: `AI Chatbots for Website & Socials`,
    des: `Your always-on assistant — trained on your business.\n\nOur chatbots aren't off-the-shelf. They're trained on your unique services, tone, FAQs, and workflows — so they handle enquiries like a real team member would. Whether it's on your website, Instagram, or Facebook, they respond instantly, guide customers, and hand over to your team when it matters.\n\n• Conversational tone that reflects your brand\n• Fully trained on your systems, services & processes\n• 24/7 responses across web and social platforms\n• Knows when to escalate or hand over to humans\n\nBecause in today's busy world, your customers deserve fast, accurate, and human-like support — even when you're offline.`,
    link: "/service/crm-implementation",
  },
  {
    id: 3,
    title: `Connected Systems & Smart Integrations`,
    des: `Get your software talking — so your business runs smoother.\n\nWe help you connect the tools you already use — like clinical platforms, booking apps, job management software (e.g. ServiceM8), CRMs, accounting systems, and calendars — so they all talk to each other and nothing slips through the cracks.\n\nNo more double entry. No more switching between tabs or chasing missing info. Just clean, automated workflows that save time, reduce admin, and keep your team and customers in sync.\n\n• Sync bookings, invoices, and customer details across platforms\n• Trigger marketing or reminder emails when new jobs or appointments are created\n• Link tools like Xero, MYOB, ServiceM8, Cliniko, GHL, Calendly, Google Sheets & more\n• Fully customised to your business — not generic plug-ins or templates\n\nYour tools should work together — not create more work for your team.`,
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
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 0.9,
            ease: "back.out(1.2)",
          },
          "-=0.3",
        )
        .from(
          btnRef.current,
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.7,
            ease: "elastic.out(1.2, 0.75)",
          },
          "-=0.2",
        );

      // Card animations with staggered entrance
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 80,
        duration: 0.9,
        stagger: 0.15,
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

        const link = card.querySelector(".cs_card_link");
        const number = card.querySelector(".cs_card_number");

        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true });

        hoverTl
          .to(card, {
            y: -10,
            duration: 0.4,
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
            link,
            {
              x: 10,
              duration: 0.4,
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
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section className="cs_primary_bg position-relative">
        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 cs_color_1">
            <div className="cs_section_heading_text">
              <div
                ref={subtitleRef}
                className="cs_section_subtitle anim_div_ShowZoom"
              >
                Leads360 Services
              </div>
              <h2
                ref={titleRef}
                className="cs_section_title anim_heading_title"
              >
                Latest Digital Additions at Leads360 HQ Next-gen tools. Human-led. Built to scale your business.
              </h2>
            </div>
            <div
              ref={btnRef as any} // Cast to avoid TypeScript warning
              className="cs_section_heading_right cs_btn_anim"
            >
              <Link href="/service" className="cs_btn cs_style_1 cs_color_1">
                <span>View Services</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="cs_height_50 cs_height_lg_10"></div>
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
                  <Link href={item.link} className="cs_card_link">
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
        <div className="cs_height_100 cs_height_lg_30"></div>
      </section>
    </div>
  );
};

export default ServiceHomeOne;
