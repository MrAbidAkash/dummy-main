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
    sub_title: "Real business problems. Real solutions.",
    title: "Heard These Before? We Have — and We Fix Them",
    des: `"We're spending money on marketing… but not getting leads."\n"I keep missing calls, DMs, and emails — I just can't keep up."\n"I know we need follow-ups and reviews… but it never happens."\n"We post when we can… but there's no plan."\n"All our tools work… but none of them talk to each other."\n\nSound familiar?\n\nYou're not alone — and these problems don't fix themselves.\n\nWe help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.`,
  },
  {
    img: "/assets/img/shutterstock_1993438580.jpg",
    sub_title: "How It Looks in Context",
    title: "Here's What We Build to Fix That.",
    des: `Convert & Nurture\n\nSo leads don't go cold — even when you're busy\n\nCRM systems to manage leads and clients\nEmail + SMS automation\nOnline booking and calendar tools\nReview requests + rebooking flows\n\nWhy this matters:\n\nMost small businesses rely too heavily on one platform — usually Instagram or word-of-mouth.\n\nBut real growth comes from having a multi-channel strategy, a lead-ready website, and automated follow-ups that work even when you're off the clock.\n\nScale with Systems\n\nSo your business grows without the chaos\n\nVoice AI to handle missed calls\nWebsite + social media chatbots\nSmart automation workflows\nTool integrations (Xero, ServiceM8, GHL, Cliniko, Calendars etc.)`,
  },
  {
    img: "/assets/img/shutterstock_2586106271.jpg",
    sub_title: "Why Leads360",
    title: "Because you don't need another tool — you need a system.",
    des: `We make your website, socials, CRM and tools work together\nWe build everything around how you already work\nWe remove admin and help you show up consistently online\nWe don't just hand over templates — we implement the entire system\nWe're focused on time-saving, money-saving, and actual business growth\nWant to stop dropping leads, missing follow-ups, or manually doing everything?\n\nLet's fix that.\n\n[Book a Free Strategy Call]`,
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
                          top: 10px;
                          right: 15px;
                          background: rgba(0, 0, 0, 0.7);
                          color: #FECA15;
                          padding: 6px 10px;
                          border-radius: 15px;
                          font-size: 12px;
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
                        className={`cs_section_subtitle ${index === 0 ? '' : ''}`}
                        style={{
                          ...(index === 0 && {
                            paddingLeft: '20px',
                            position: 'relative'
                          })
                        }}
                      >
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title" style={{ fontSize: "32px" }}>{item.title}</h2>
                     
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className="cs_m0">
                      <div style={{ marginTop: "30px" }}>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "8px" }}>"We're spending money on marketing… but not getting leads."</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "8px" }}>"I keep missing calls, DMs, and emails — I just can't keep up."</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "8px" }}>"I know we need follow-ups and reviews… but it never happens."</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "8px" }}>"We post when we can… but there's no plan."</p>
                        </div>
                        <div style={{ marginBottom: "25px" }}>
                          <p style={{ fontWeight: "600", color: "#FECA15", marginBottom: "8px" }}>"All our tools work… but none of them talk to each other."</p>
                        </div>
                        
                        <p style={{ 
                          fontSize: "18px", 
                          fontWeight: "600", 
                          marginTop: "30px", 
                          marginBottom: "20px",
                          color: "var(--heading-color)"
                        }}>
                          Sound familiar?
                        </p>
                        
                        <p style={{ 
                          fontSize: "16px", 
                          marginBottom: "15px",
                          color: "var(--body-color)"
                        }}>
                          You're not alone — and these problems don't fix themselves.
                        </p>
                        
                        <p style={{ 
                          fontSize: "18px", 
                          fontWeight: "500",
                          color: "var(--heading-color)"
                        }}>
                          We help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.
                        </p>
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="cs_m0">
                      <div style={{ marginTop: "10px" }}>
                        <div style={{ marginBottom: "30px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "8px" }}>Convert & Nurture</p>
                          <p style={{ fontStyle: "italic", marginBottom: "15px", fontSize: "16px", color: "var(--body-color)" }}>So leads don't go cold — even when you're busy</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• CRM systems to manage leads and clients</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Email + SMS automation</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Online booking and calendar tools</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Review requests + rebooking flows</li>
                          </ul>
                        </div>
                        
                        <div style={{ marginBottom: "30px" }}>
                          <p style={{ fontWeight: "600", fontSize: "16px", color: "#FECA15", marginBottom: "10px" }}>Why this matters:</p>
                          <p style={{ marginBottom: "15px", fontSize: "15px", lineHeight: "1.6" }}>Most small businesses rely too heavily on one platform — usually Instagram or word-of-mouth.</p>
                          <p style={{ fontSize: "15px", lineHeight: "1.6" }}>But real growth comes from having a multi-channel strategy, a lead-ready website, and automated follow-ups that work even when you're off the clock.</p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                          <p style={{ fontWeight: "600", fontSize: "18px", color: "#FECA15", marginBottom: "8px" }}>Scale with Systems</p>
                          <p style={{ fontStyle: "italic", marginBottom: "15px", fontSize: "16px", color: "var(--body-color)" }}>So your business grows without the chaos</p>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Voice AI to handle missed calls</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Website + social media chatbots</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Smart automation workflows</li>
                            <li style={{ marginBottom: "8px", paddingLeft: "15px", position: "relative" }}>• Tool integrations (Xero, ServiceM8, GHL, Cliniko, Calendars etc.)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : index === 2 ? (
                    <div className="cs_m0">
                      <div style={{ marginTop: "30px" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
                            <li style={{ marginBottom: "15px", paddingLeft: "15px", position: "relative", fontSize: "16px", fontWeight: "500" }}>• We make your website, socials, CRM and tools work together</li>
                            <li style={{ marginBottom: "15px", paddingLeft: "15px", position: "relative", fontSize: "16px", fontWeight: "500" }}>• We build everything around how you already work</li>
                            <li style={{ marginBottom: "15px", paddingLeft: "15px", position: "relative", fontSize: "16px", fontWeight: "500" }}>• We remove admin and help you show up consistently online</li>
                            <li style={{ marginBottom: "15px", paddingLeft: "15px", position: "relative", fontSize: "16px", fontWeight: "500" }}>• We don't just hand over templates — we implement the entire system</li>
                            <li style={{ marginBottom: "15px", paddingLeft: "15px", position: "relative", fontSize: "16px", fontWeight: "500" }}>• We're focused on time-saving, money-saving, and actual business growth</li>
                          </ul>
                        </div>
                        
                        <div style={{ marginTop: "35px", marginBottom: "25px" }}>
                          <p style={{ 
                            fontSize: "18px", 
                            fontWeight: "600", 
                            marginBottom: "20px",
                            color: "var(--heading-color)"
                          }}>
                            Want to stop dropping leads, missing follow-ups, or manually doing everything?
                          </p>
                          
                          <p style={{ 
                            fontSize: "20px", 
                            fontWeight: "600",
                            color: "#FECA15",
                            marginBottom: "25px"
                          }}>
                            Let's fix that.
                          </p>
                          
                          <div style={{ textAlign: "center", marginTop: "30px" }}>
                            <a 
                              href="/contact" 
                              style={{
                                display: "inline-block",
                                background: "#FECA15",
                                color: "#000",
                                padding: "15px 30px",
                                borderRadius: "25px",
                                fontWeight: "600",
                                fontSize: "16px",
                                textDecoration: "none",
                                transition: "all 0.3s ease",
                                border: "2px solid #FECA15",
                                cursor: "pointer"
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
                              Book a Free Strategy Call
                            </a>
                          </div>
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
