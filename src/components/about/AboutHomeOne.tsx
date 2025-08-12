"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../styles/about-home-one.css";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
  features?: string[];
  highlights?: { title: string; description: string; features?: string[] }[];
}

const about_data: DataType[] = [
  {
    img: "/assets/img/shutterstock_1797464674.jpg",
    sub_title: "Real business problems. Real solutions.",
    title: "Your Challenges? We Get It.",
    des: "You're not alone — and these problems don't fix themselves. We help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.",
    features: [
      "\"I keep missing calls, DMs, and emails — I just can't keep up.\"\n\nLeads slip through, stalling your service business growth.",
      "\"I know we need follow-ups and reviews... but it never happens.\"\n\nManual tasks eat time, leaving no room for consistent client nurturing.",
      "\"All our tools work... but none of them talk to each other.\"\n\nDisconnected systems create chaos, slowing down your service business."
    ]
  },
  {
    img: "/assets/img/shutterstock_1993438580.jpg",
    sub_title: "Our proven solutions in action.",
    title: "How We Fix It with GoHighLevel CRM",
    des: "Most small businesses rely too heavily on one platform. Real growth comes from having a multi-channel strategy, a lead-ready website, and automated follow-ups that work even when you're off the clock.",
    highlights: [
      {
        title: "Convert & Nurture",
        description: "So leads don't go cold — even when you're busy",
        features: [
          "GoHighLevel CRM tracks leads from web, social, and calls in one place",
          "Email + SMS automation for follow-ups and rebooking",
          "Online booking tools for instant scheduling",
          "Review requests to build credibility across Australia"
        ]
      },
      {
        title: "Scale with Systems", 
        description: "So your business grows without the chaos",
        features: [
          "AI voice bots handle missed calls for tradies and clinicians",
          "Website + social media chatbots respond 24/7",
          "Automation workflows reduce admin chaos",
          "Integrations with Xero, Cliniko, ServiceM8, and Calendly"
        ]
      }
    ]
  },
  {
    img: "/assets/img/shutterstock_2586106271.jpg",
    sub_title: "Why Leads360?",
    title: "Why Choose Leads360 for Your Service Business?",
    des: "Join the many service-based businesses across Australia who trust Leads360 to transform chaos into growth.",
    highlights: [
      {
        title: "Results That Drive Growth",
        description: "At Leads360, we're obsessed with delivering measurable outcomes. Our custom GoHighLevel CRM solutions save service-based businesses 10–15 hours weekly, cut operational costs by up to 20%, and drive 25% revenue growth through effective lead tracking. For example, a plumbing business saved 15 hours weekly and boosted bookings by 25%, while a physiotherapy clinic increased rebookings by 20% with our automated workflows."
      },
      {
        title: "Always Ahead of the Curve",
        description: "We stay updated with the latest CRM technologies, integrating cutting-edge AI voice bots and chatbots to keep your service business competitive. Our team continuously adapts to new trends, ensuring your systems are future-proofed for growth across Australia."
      },
      {
        title: "Honoring Tradition, Embracing Innovation",
        description: "We respect the traditions that make your service business unique—whether it's the personal touch of a tradie's customer service or a clinician's patient care. Our GHL CRM enhances these strengths with modern automation, maintaining the human connection while streamlining operations."
      },
      {
        title: "Partners in Your Business Environment",
        description: "We understand the Australian service industry's challenges, from tradies juggling jobs to allied health professionals managing client care. Leads360 builds systems that honor your business environment, aligning teams and tools to scale without chaos."
      }
    ]
  },
];
const AboutHomeOne = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, x: 0, y: 50 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
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

  const renderSlideContent = (item: DataType, index: number) => {
    switch(index) {
      case 0:
        return (
          <div className="slide-content-wrapper">
            <div className="main-description">
              <p style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "35px",
                color: "#E5E5E5",
                lineHeight: "1.6"
              }}>
                {item.des}
              </p>
            </div>

            <div className="problems-grid">
              <h3 style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "25px",
                color: "#FECA15",
                textAlign: "center"
              }}>
                Sound familiar?
              </h3>
              
              <div style={{
                display: "grid",
                gap: "20px",
                marginBottom: "30px"
              }}>
                {item.features?.map((feature, idx) => (
                  <div key={idx} style={{
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                    padding: "20px 25px",
                    borderRadius: "12px",
                    border: "1px solid #333",
                    borderLeft: "4px solid #FECA15",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease"
                  }}>
                    <p style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#E5E5E5",
                      margin: "0",
                      fontStyle: "italic"
                    }}>
                      "{feature}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="slide-content-wrapper">
            <div className="main-description">
              <p style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "35px",
                color: "#E5E5E5",
                lineHeight: "1.6"
              }}>
                {item.des}
              </p>
            </div>

            <div className="highlights-section">
              {item.highlights?.map((highlight, idx) => (
                <div key={idx} style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                  padding: "25px",
                  borderRadius: "15px",
                  border: "1px solid #333",
                  marginBottom: "25px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)"
                }}>
                  <h4 style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#FECA15",
                    marginBottom: "10px"
                  }}>
                    {highlight.title}
                  </h4>
                  <p style={{
                    fontSize: "16px",
                    color: "#B0B0B0",
                    marginBottom: "20px",
                    fontStyle: "italic"
                  }}>
                    {highlight.description}
                  </p>
                  {highlight.features && (
                    <div style={{ marginTop: "15px" }}>
                      {highlight.features.map((feature, featureIdx) => (
                        <div key={featureIdx} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          marginBottom: "8px"
                        }}>
                          <span style={{
                            fontSize: "16px",
                            color: "#FECA15",
                            marginTop: "2px"
                          }}>•</span>
                          <p style={{
                            fontSize: "15px",
                            color: "#E5E5E5",
                            margin: "0",
                            lineHeight: "1.4"
                          }}>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="slide-content-wrapper">
            <div className="main-description">
              <p style={{
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "35px",
                color: "#E5E5E5",
                lineHeight: "1.6",
                textAlign: "center"
              }}>
                {item.des}
              </p>
            </div>

            <div className="highlights-section">
              {item.highlights?.map((highlight, idx) => (
                <div key={idx} style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                  padding: "30px",
                  borderRadius: "15px",
                  border: "1px solid #333",
                  borderLeft: "4px solid #FECA15",
                  marginBottom: "25px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.3s ease"
                }}>
                  <h4 style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    color: "#FECA15",
                    marginBottom: "15px"
                  }}>
                    {highlight.title}
                  </h4>
                  <p style={{
                    fontSize: "16px",
                    color: "#E5E5E5",
                    margin: "0",
                    lineHeight: "1.6",
                    textAlign: "justify"
                  }}>
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            
          </div>
        );

      default:
        return <p className="cs_m0">{item.des}</p>;
    }
  };

  return (
    <div className="cs_about_sections" style={{
      background: "#0a0a0a",
      minHeight: "100vh"
    }}>
      {about_data.map((item, index) => (
        <div key={index} className="cs_about cs_style_1" style={{
          padding: "100px 0",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: index % 2 === 0 ? "#0a0a0a" : "#111111"
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
              backgroundRepeat: "no-repeat",
              zIndex: "1",
              opacity: "0.3"
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
              background: "linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(20, 20, 20, 0.65) 100%)",
              zIndex: "2"
            }}
          ></div>
          
          <div className="container" style={{
            position: "relative",
            zIndex: "3",
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px"
          }}>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-lg-11 col-md-12">
                <div
                  className="cs_about_text_box"
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  style={{
                    background: "linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(42, 42, 42, 0.8) 100%)",
                    padding: "60px 50px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Header Section */}
                  <div className="cs_section_heading cs_style_1" style={{
                    textAlign: "center",
                    marginBottom: "50px"
                  }}>
                    <div className="cs_section_heading_text">
                      <div
                        className="cs_section_subtitle"
                        style={{
                          color: "#FECA15",
                          fontSize: "16px",
                          fontWeight: "600",
                          marginBottom: "20px",
                          textTransform: "uppercase",
                          letterSpacing: "2px"
                        }}
                      >
                        {item.sub_title}
                      </div>
                      <h2 className="cs_section_title" style={{
                        fontSize: "clamp(28px, 4vw, 48px)",
                        marginBottom: "0",
                        color: "#FFFFFF",
                        fontWeight: "700",
                        lineHeight: "1.2"
                      }}>
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content Section */}
                  {renderSlideContent(item, index)}
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