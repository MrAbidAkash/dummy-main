"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}
const about_data: DataType[] = [
  {
    img: "/assets/img/shutterstock_1797464674.jpg",
    sub_title: "Real business problems. Real solutions.",
    title: "Heard These Before? We Have — and We Fix Them",
    des: `"We're spending money on marketing… but not getting leads."\n"I keep missing calls, DMs, and emails — I just can't keep up."\n"I know we need follow-ups and reviews… but it never happens."\n"We post when we can… but there's no plan."\n"All our tools work… but none of them talk to each other."\n\nSound familiar?\n\nYou're not alone — and these problems don't fix themselves.\n\nWe help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.`,
  },
  {
    img: "/assets/img/shutterstock_1993438580.jpg",
    sub_title: "Our proven solutions in action.",
    title: "How We Fix It with GoHighLevel CRM",
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
  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: 0, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);
  return (
    <div className="cs_about_sections">
      {about_data.map((item, index) => (
        <div key={index} className="cs_about cs_style_1" style={{
          padding: "80px 0",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}>
          <div
            className="cs_about_bg cs_bg"
            style={{
              backgroundImage: `url(${item.img})`,
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: "1"
            }}
          ></div>
          <div
            className="cs_about_overlay"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: "2"
            }}
          ></div>
          <div className="container" style={{
            position: "relative",
            zIndex: "3",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 15px"
          }}>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-lg-10 col-md-12">
                <div
                  className="cs_about_text_box"
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  style={{
                    backgroundColor: "#2a2a2a",
                    padding: "60px 50px",
                    borderRadius: "15px",
                    border: "1px solid #2a2a2a",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div
                        className="cs_section_subtitle"
                        style={{
                          color: "#FECA15",
                          fontSize: "16px",
                          fontWeight: "500",
                          marginBottom: "15px"
                        }}
                      >
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title" style={{
                        fontSize: "42px",
                        marginBottom: "40px",
                        color: "var(--heading-color)"
                      }}>
                        {item.title}
                      </h2>
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
                          We help small, medium, and large business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.
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
          </div>
        </div>
      ))}
     
      
    </div>
  );
};
export default AboutHomeOne;