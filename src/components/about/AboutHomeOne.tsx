"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
[];

const about_slider: DataType[] = [
  {
    img: "/assets/img/shutterstock_1797464674.jpg",
    sub_title: "",
    title: "You're not alone — we help business owners and teams solve these exact problems.",
    des: `\n• "We're spending on ads… but not seeing results."\nYour traffic's coming in — but without the right systems, those clicks don't convert.\n\n• "We're missing calls, messages, and leads — daily."\nManual follow-ups just don't cut it. We automate lead capture, replies, and bookings — so no opportunity slips through.\n\n• "Posting on social media feels like a full-time job."\nWe plan, write, and post your content — so you stay consistent, visible, and in demand.\n\n• "Our team is stretched and nothing feels organised."\nWe set up CRM and automation workflows to streamline your operations and free up headspace.`,
  },
  {
    img: "/assets/img/shutterstock_1993438580.jpg",
    sub_title: "Our Approach",
    title: "What we build to help your business scale — fast.",
    des: `Grouped services under outcomes:\n\nGet Found\n\nConversion-focused websites\nLocal SEO setup\nSocial media strategy & content\n\nConvert & Nurture\n\nCRM (Go High Level) setup\nAutomated email & SMS follow-ups\nLead capture forms + funnels\n\nScale with Systems\n\nAI call handling & chatbots\nTeam task automations\nJob tracking dashboards\nDone-for-you, no guesswork, all aligned with your growth goals.`,
  },
  {
    img: "/assets/img/shutterstock_2586106271.jpg",
    sub_title: "Step-by-step Process",
    title: "Here's how we make it simple — and effective.",
    des: `Step-by-step process:\n\nWe map your growth strategy.\nTailored to your goals, your industry, and your capacity.\n\nWe build your marketing systems.\nWebsite. CRM. Content. Funnels. Automation. All working together.\n\nWe train your team (if needed).\nNo overwhelm. We make it easy to use and scale.\n\nWe track and optimise.\nData-led improvements to keep growing without the chaos.`,
  },
];


const AboutHomeOne = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const sectionRefsRight = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);
  useEffect(() => {
    sectionRefsRight.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        autoplay={isMobile ? {
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        } : false}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        className="cs_slider cs_slider_2"
      >
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1" style={{ padding: "60px 0", position: "relative" }}>
              <div
                ref={(el) => {
                  if (el) sectionRefsRight.current[index] = el;
                }}
                className="cs_about_bg cs_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container" style={{ position: "relative" }}>
                <div
                  className="cs_about_text"
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  style={{ position: "relative" }}
                >
                  {/* Swiper Controls positioned on both sides */}
                  <div className="cs_swiper_navigation_container" style={{ 
                    position: "absolute", 
                    left: "0",
                    right: "0",
                    top: "50%", 
                    transform: "translateY(-50%)", 
                    zIndex: "10",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    pointerEvents: "none"
                  }}>
                    <style dangerouslySetInnerHTML={{
                      __html: `
                        .cs_swiper_button_prev, .cs_swiper_button_next {
                          width: 50px;
                          height: 50px;
                          background: rgba(254, 202, 21, 0.9);
                          border-radius: 50%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          cursor: pointer;
                          transition: all 0.3s ease;
                          pointer-events: auto;
                          border: 2px solid rgba(255, 255, 255, 0.2);
                          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                        }
                        .cs_swiper_button_prev:hover, .cs_swiper_button_next:hover {
                          background: rgba(254, 202, 21, 1);
                          transform: scale(1.1);
                          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                        }
                        .cs_swiper_button_prev svg, .cs_swiper_button_next svg {
                          width: 24px;
                          height: 24px;
                          stroke: #000;
                          stroke-width: 2.5;
                        }
                        .cs_swiper_button_prev {
                          margin-left: -70px;
                        }
                        .cs_swiper_button_next {
                          margin-right: 40px;
                        }
                        .cs_pagination {
                          position: absolute;
                          bottom: -60px;
                          left: 50%;
                          transform: translateX(-50%);
                          display: flex;
                          gap: 12px;
                          pointer-events: auto;
                        }
                        .cs_pagination .swiper-pagination-bullet {
                          width: 12px;
                          height: 12px;
                          background: rgba(255, 255, 255, 0.4);
                          border-radius: 50%;
                          cursor: pointer;
                          transition: all 0.3s ease;
                          border: 2px solid rgba(255, 255, 255, 0.6);
                        }
                        .cs_pagination .swiper-pagination-bullet-active {
                          background: #FECA15;
                          transform: scale(1.3);
                          border-color: #FECA15;
                        }
                        @media (max-width: 768px) {
                          .cs_swiper_button_prev, .cs_swiper_button_next {
                           
                          display: none !important;
                          }
                          .cs_mobile_slide_indicator {
                            display: block !important;
                          }
                        }
                        .cs_mobile_slide_indicator {
                          display: none;
                          position: absolute;
                          top: 20px;
                          right: 20px;
                          background: rgba(0, 0, 0, 0.7);
                          color: #FECA15;
                          padding: 8px 12px;
                          border-radius: 20px;
                          font-size: 14px;
                          font-weight: 600;
                          z-index: 20;
                          pointer-events: none;
                        }
                      `
                    }} />
                    
                    {/* Mobile Slide Indicator */}
                    <div className="cs_mobile_slide_indicator">
                      {currentSlide} / {about_slider.length}
                    </div>
                    
                    {/* Previous Button - Left Side */}
                    <div className="cs_swiper_button_prev">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 5L4 12L11 19M4 12H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    {/* Next Button - Right Side */}
                    <div className="cs_swiper_button_next">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 5L20 12L13 19M20 12H4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div 
                        className={`cs_section_subtitle ${index === 0 ? 'no-bullet' : ''}`}
                        style={{
                          ...(index === 0 && {
                            paddingLeft: '0',
                            position: 'relative'
                          })
                        }}
                      >
                        {index === 0 && (
                          <style dangerouslySetInnerHTML={{
                            __html: `
                              .cs_section_subtitle.no-bullet::before {
                                display: none !important;
                              }
                            `
                          }} />
                        )}
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title" style={{ fontSize: "32px" }}>{item.title}</h2>
                     
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className="cs_m0">
                      <p style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "500" }}>
                        
                      </p>
                      <div style={{ marginTop: "30px" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "5px" }}>"We're spending on ads… but not seeing results."</p>
                          <p>Your traffic's coming in — but without the right systems, those clicks don't convert.</p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15",  marginBottom: "5px" }}>"We're missing calls, messages, and leads — daily."</p>
                          <p>Manual follow-ups just don't cut it. We automate lead capture, replies, and bookings — so no opportunity slips through.</p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "5px" }}>"Posting on social media feels like a full-time job."</p>
                          <p>We plan, write, and post your content — so you stay consistent, visible, and in demand.</p>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "5px" }}>"Our team is stretched and nothing feels organised."</p>
                          <p>We set up CRM and automation workflows to streamline your operations and free up headspace.</p>
                        </div>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="cs_m0">
                      <div style={{ marginTop: "10px" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}>Get Found</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Conversion-focused websites</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Local SEO setup</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Social media strategy & content</li>
                          </ul>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15",marginBottom: "10px" }}>Convert & Nurture</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• CRM (Go High Level) setup</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Automated email & SMS follow-ups</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Lead capture forms + funnels</li>
                          </ul>
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}>Scale with Systems</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• AI call handling & chatbots</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Team task automations</li>
                            <li style={{ marginBottom: "6px", paddingLeft: "15px", position: "relative" }}>• Job tracking dashboards</li>
                          </ul>
                        </div>
                        <p style={{ marginTop: "15px", fontWeight: "500", fontSize: "16px" }}>
                          Done-for-you, no guesswork, all aligned with your growth goals.
                        </p>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <div className="cs_m0">
                     
                      <div style={{ marginTop: "30px" }}>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}> We map your growth strategy.</p>
                          <p style={{ paddingLeft: "15px" }}>Tailored to your goals, your industry, and your capacity.</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}> We build your marketing systems.</p>
                          <p style={{ paddingLeft: "15px" }}>Website. CRM. Content. Funnels. Automation. All working together.</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}> We train your team (if needed).</p>
                          <p style={{ paddingLeft: "15px" }}>No overwhelm. We make it easy to use and scale.</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "10px" }}> We track and optimise.</p>
                          <p style={{ paddingLeft: "15px" }}>Data-led improvements to keep growing without the chaos.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="cs_m0">{item.des}</p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
};

export default AboutHomeOne;
