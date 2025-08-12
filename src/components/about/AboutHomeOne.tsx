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
  highlights?: { title: string; description: string }[];
}

const about_data: DataType[] = [
  {
    img: "/assets/img/shutterstock_1797464674.jpg",
    sub_title: "Real business problems. Real solutions.",
    title: "Heard These Before? We Have — and We Fix Them",
    des: "You're not alone — and these problems don't fix themselves. We help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.",
    features: [
      "We're spending money on marketing… but not getting leads.",
      "I keep missing calls, DMs, and emails — I just can't keep up.",
      "I know we need follow-ups and reviews… but it never happens.",
      "We post when we can… but there's no plan.",
      "All our tools work… but none of them talk to each other."
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
        description: "So leads don't go cold — even when you're busy"
      },
      {
        title: "Scale with Systems", 
        description: "So your business grows without the chaos"
      }
    ],
    features: [
      "CRM systems to manage leads and clients",
      "Email + SMS automation", 
      "Online booking and calendar tools",
      "Review requests + rebooking flows",
      "Voice AI to handle missed calls",
      "Website + social media chatbots",
      "Smart automation workflows",
      "Tool integrations (Xero, ServiceM8, GHL, Cliniko, Calendars etc.)"
    ]
  },
  {
    img: "/assets/img/shutterstock_2586106271.jpg",
    sub_title: "Why Leads360",
    title: "Because you don't need another tool — you need a system.",
    des: "We're obsessed with delivering measurable outcomes. Our custom GoHighLevel CRM solutions save service-based businesses 10-15 hours weekly, cut operational costs by up to 20%, and drive 25% revenue growth.",
    highlights: [
      {
        title: "Results That Drive Growth",
        description: "Save 10-15 hours weekly, cut costs by 20%, boost revenue by 25%"
      },
      {
        title: "Always Ahead of the Curve", 
        description: "Latest CRM technologies with AI voice bots and chatbots"
      },
      {
        title: "Honoring Tradition, Embracing Innovation",
        description: "Enhance your strengths with modern automation"
      }
    ],
    features: [
      "Make your website, socials, CRM and tools work together",
      "Build everything around how you already work", 
      "Remove admin and help you show up consistently online",
      "Implement the entire system, not just templates",
      "Focus on time-saving, money-saving, and actual business growth"
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
                </div>
              ))}
            </div>

            <div className="features-grid">
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "15px"
              }}>
                {item.features?.map((feature, idx) => (
                  <div key={idx} style={{
                    background: "rgba(254, 202, 21, 0.1)",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "1px solid rgba(254, 202, 21, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px"
                  }}>
                    <span style={{
                      width: "8px",
                      height: "8px",
                      background: "#FECA15",
                      borderRadius: "50%",
                      flexShrink: 0
                    }}></span>
                    <p style={{
                      fontSize: "15px",
                      color: "#E5E5E5",
                      margin: "0",
                      fontWeight: "500"
                    }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
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
                lineHeight: "1.6"
              }}>
                {item.des}
              </p>
            </div>

            <div className="highlights-grid">
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "20px",
                marginBottom: "30px"
              }}>
                {item.highlights?.map((highlight, idx) => (
                  <div key={idx} style={{
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                    padding: "25px",
                    borderRadius: "15px",
                    border: "1px solid #333",
                    borderTop: "3px solid #FECA15",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
                    transition: "transform 0.3s ease"
                  }}>
                    <h4 style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#FECA15",
                      marginBottom: "12px"
                    }}>
                      {highlight.title}
                    </h4>
                    <p style={{
                      fontSize: "15px",
                      color: "#B0B0B0",
                      margin: "0",
                      lineHeight: "1.5"
                    }}>
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="features-list">
              <h4 style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#FECA15",
                marginBottom: "20px",
                textAlign: "center"
              }}>
                What We Deliver
              </h4>
              <div style={{
                display: "grid",
                gap: "12px",
                marginBottom: "35px"
              }}>
                {item.features?.map((feature, idx) => (
                  <div key={idx} style={{
                    background: "rgba(254, 202, 21, 0.05)",
                    padding: "18px 25px",
                    borderRadius: "10px",
                    border: "1px solid rgba(254, 202, 21, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                  }}>
                    <span style={{
                      width: "6px",
                      height: "6px",
                      background: "#FECA15",
                      borderRadius: "50%",
                      flexShrink: 0
                    }}></span>
                    <p style={{
                      fontSize: "16px",
                      color: "#E5E5E5",
                      margin: "0",
                      fontWeight: "500"
                    }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-section">
              <div style={{
                textAlign: "center",
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                padding: "30px",
                borderRadius: "20px",
                border: "2px solid #FECA15",
                boxShadow: "0 10px 30px rgba(254, 202, 21, 0.1)"
              }}>
                <p style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#E5E5E5"
                }}>
                  Want to stop dropping leads, missing follow-ups, or manually doing everything?
                </p>
                
                <p style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#FECA15",
                  marginBottom: "25px"
                }}>
                  Let's fix that.
                </p>
                
                <a
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #FECA15 0%, #FFD700 100%)",
                    color: "#000",
                    padding: "18px 35px",
                    borderRadius: "30px",
                    fontWeight: "600",
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 8px 25px rgba(254, 202, 21, 0.3)",
                    textTransform: "uppercase",
                    letterSpacing: "1px"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 35px rgba(254, 202, 21, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(254, 202, 21, 0.3)";
                  }}
                >
                  Book a Free Strategy Call
                </a>
              </div>
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