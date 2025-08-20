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
    img: "/assets/img/blog5.jpg",
    sub_title: "Templates & Reports",
    title: "Onboard clients faster with templates",
    des: "Skip the manual setup with prebuilt reports and dashboards for SEO, PPC, ecommerce, and more. Customize every detail to match your brand and meet client expectations.",
    features: []
  },
  {
    img: "/assets/img/blog8.jpg",
    sub_title: "Access Management",
    title: "Control access with confidence",
    des: "Easily manage who can view or edit dashboards and reports. Protect client data while giving your team the access they need to move faster.",
    features: []
  },
  {
    img: "/assets/img/blog2.jpg",
    sub_title: "Real business problems. Real solutions.",
    title: "Your Challenges? We Get It.",
    des: "You're not alone — and these problems don't fix themselves. We help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.",
    features: [
      "\"I keep missing calls, DMs, and emails — I just can't keep up.\"\n\nLeads slip through, stalling your service business growth.",
      "\"I know we need follow-ups and reviews... but it never happens.\"\n\nManual tasks eat time, leaving no room for consistent client nurturing.",
      "\"All our tools work... but none of them talk to each other.\"\n\nDisconnected systems create chaos, slowing down your service business."
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
          <div className="slide-content-wrapper" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            minHeight: "600px",
            padding: "20px 0",
            position: "relative",
            flexWrap: "wrap"
          }}>
            {/* Background decorative elements */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "100px",
              height: "100px",
              background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
              borderRadius: "50%",
              opacity: "0.1",
              zIndex: "1"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "40px",
              left: "10px",
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
              borderRadius: "20px",
              opacity: "0.08",
              zIndex: "1"
            }}></div>

            {/* Left side - Man with laptop and dashboard */}
            <div style={{
              flex: "0 0 50%",
              minWidth: "520px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0",
              zIndex: "2"
            }}>
              {/* Man with laptop image */}
              <div style={{
                width: "320px",
                height: "400px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px 0 0 20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}>
                {/* Premium overlay with project theme colors */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "140px",
                  height: "50px",
                  background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
                  borderRadius: "0 0 0 15px",
                  opacity: "0.9"
                }}></div>
                
                {/* Subtle gradient overlay for depth */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "100px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                }}></div>
              </div>

              {/* Enhanced Dashboard mockup with dark theme */}
              <div style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                borderRadius: "0 20px 20px 0",
                padding: "25px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                height: "400px",
                width: "300px",
                position: "relative",
                border: "1px solid rgba(254, 202, 21, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden"
              }}>
                {/* Header with theme integration */}
                <div>
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "10px"
                  }}>
                    <div style={{
                      background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
                      height: "8px",
                      width: "40px",
                      borderRadius: "4px"
                    }}></div>
                    <div style={{
                      background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                      height: "8px",
                      width: "28px",
                      borderRadius: "4px"
                    }}></div>
                  </div>
                  <h3 style={{
                    color: "#E5E5E5",
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "0"
                  }}>
                    Template Dashboard
                  </h3>
                </div>

                {/* Enhanced chart area with dark theme */}
                <div style={{
                  background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  height: "100px",
                  position: "relative",
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  border: "1px solid rgba(254, 202, 21, 0.1)",
                  flex: "1",
                  maxHeight: "100px",
                  overflow: "hidden"
                }}>
                  {/* Enhanced pie chart with theme colors */}
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "conic-gradient(#FECA15 0deg 120deg, #007bff 120deg 240deg, #28a745 240deg 360deg)",
                    position: "relative",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "20px",
                      height: "20px",
                      background: "#2a2a2a",
                      borderRadius: "50%"
                    }}></div>
                  </div>
                  
                  {/* Enhanced bar chart with theme colors */}
                  <div style={{
                    display: "flex",
                    alignItems: "end",
                    gap: "6px",
                    height: "50px",
                    flex: 1
                  }}>
                    {[25, 40, 20, 35, 45, 30].map((height, idx) => (
                      <div key={idx} style={{
                        background: idx % 3 === 0 ? "#FECA15" : idx % 3 === 1 ? "#007bff" : "#28a745",
                        width: "10px",
                        height: `${height}px`,
                        borderRadius: "2px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                      }}></div>
                    ))}
                  </div>
                </div>

                {/* Enhanced chart line with dark theme */}
                <div style={{
                  background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                  borderRadius: "10px",
                  padding: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(254, 202, 21, 0.1)"
                }}>
                  <svg width="100%" height="40">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FECA15" />
                        <stop offset="50%" stopColor="#007bff" />
                        <stop offset="100%" stopColor="#28a745" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 5,30 Q 30,20 55,25 T 105,15 T 155,20 T 205,10 T 255,15" 
                      stroke="url(#lineGradient)" 
                      strokeWidth="3" 
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Enhanced logo section with dark theme */}
                <div style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center"
                }}>
                  <div style={{
                    background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                    borderRadius: "8px",
                    padding: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    flex: 1,
                    textAlign: "center",
                    color: "#B0B0B0",
                    fontSize: "12px",
                    fontWeight: "600",
                    border: "1px solid rgba(254, 202, 21, 0.1)"
                  }}>
                    Leads360™
                  </div>
                  <div style={{
                    background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
                    width: "35px",
                    height: "28px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(254, 202, 21, 0.3)"
                  }}></div>
                </div>
              </div>
            </div>

            {/* Right side - Enhanced content with theme */}
            <div style={{
              flex: "1",
              minWidth: "300px",
              paddingLeft: "20px",
              position: "relative",
              zIndex: "2",
              maxWidth: "100%"
            }}>
              {/* Subtitle with theme color */}
              <div style={{
                color: "#FECA15",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "1.5px"
              }}>
                {item.sub_title}
              </div>

              {/* Enhanced title with better typography */}
              <h1 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                marginBottom: "20px",
                color: "#FFFFFF",
                fontWeight: "700",
                lineHeight: "1.3",
                textAlign: "left",
                position: "relative",
                wordWrap: "break-word",
                maxWidth: "100%",
                overflow: "hidden"
              }}>
                {item.title}
                {/* Decorative underline */}
                <div style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
                  borderRadius: "2px"
                }}></div>
              </h1>

              <div className="main-description">
                <p style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  marginBottom: "30px",
                  color: "#E5E5E5",
                  lineHeight: "1.6",
                  maxWidth: "100%"
                }}>
                  {item.des}
                </p>
              </div>

              {/* Enhanced CTA Button with theme */}
              <div>
                <button style={{
                  background: "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)",
                  color: "#212529",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(254, 202, 21, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(254, 202, 21, 0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #f7b500 0%, #FECA15 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(254, 202, 21, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #FECA15 0%, #f7b500 100%)";
                }}>
                  Pick Your Template
                  <span style={{ 
                    fontSize: "16px",
                    transition: "transform 0.3s ease"
                  }}>→</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="slide-content-wrapper" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            minHeight: "600px",
            padding: "20px 0",
            position: "relative",
            flexWrap: "wrap"
          }}>
            {/* Background decorative elements */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
              borderRadius: "50%",
              opacity: "0.1",
              zIndex: "1"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "40px",
              left: "10px",
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
              borderRadius: "15px",
              opacity: "0.08",
              zIndex: "1"
            }}></div>

            {/* Left side - Man with glasses and user management dashboard */}
            <div style={{
              flex: "0 0 50%",
              minWidth: "520px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0",
              zIndex: "2"
            }}>
              {/* Man with glasses image */}
              <div style={{
                width: "320px",
                height: "400px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px 0 0 20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}>
                {/* Purple overlay accent */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "140px",
                  height: "50px",
                  background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
                  borderRadius: "0 0 0 15px",
                  opacity: "0.9"
                }}></div>
                
                {/* Subtle gradient overlay for depth */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "100px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                }}></div>
              </div>

              {/* User Management Dashboard mockup */}
              <div style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                borderRadius: "0 20px 20px 0",
                padding: "25px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                height: "400px",
                width: "300px",
                position: "relative",
                border: "1px solid rgba(111, 66, 193, 0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                overflow: "hidden"
              }}>
                {/* Header with user management theme */}
                <div>
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "10px"
                  }}>
                    <div style={{
                      background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
                      height: "8px",
                      width: "40px",
                      borderRadius: "4px"
                    }}></div>
                    <div style={{
                      background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                      height: "8px",
                      width: "28px",
                      borderRadius: "4px"
                    }}></div>
                  </div>
                  <h3 style={{
                    color: "#E5E5E5",
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "0"
                  }}>
                    Users
                  </h3>
                </div>

                {/* User cards section */}
                <div style={{
                  background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(111, 66, 193, 0.1)",
                  flex: "1",
                  maxHeight: "180px",
                  overflow: "hidden"
                }}>
                  {/* User 1 - John Clark */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "8px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#6f42c1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold"
                      }}>JC</div>
                      <div>
                        <div style={{ color: "#E5E5E5", fontSize: "12px", fontWeight: "500" }}>John Clark</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#007bff",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "10px",
                      fontSize: "9px",
                      fontWeight: "500"
                    }}>Client</div>
                  </div>

                  {/* User 2 - Diana Smith */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    padding: "8px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#495057",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold"
                      }}>DS</div>
                      <div>
                        <div style={{ color: "#E5E5E5", fontSize: "12px", fontWeight: "500" }}>Diana Smith</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#495057",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "10px",
                      fontSize: "9px",
                      fontWeight: "500"
                    }}>Staff</div>
                  </div>

                  {/* User 3 - Ilya Malek */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "#28a745",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold"
                      }}>IM</div>
                      <div>
                        <div style={{ color: "#E5E5E5", fontSize: "12px", fontWeight: "500" }}>Ilya Malek</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#007bff",
                      color: "white",
                      padding: "3px 8px",
                      borderRadius: "10px",
                      fontSize: "9px",
                      fontWeight: "500"
                    }}>Client</div>
                  </div>
                </div>

                {/* Access control visualization */}
                <div style={{
                  background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                  borderRadius: "10px",
                  padding: "12px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(111, 66, 193, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}>
                  {/* Pie chart for access visualization */}
                  <div style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    background: "conic-gradient(#6f42c1 0deg 180deg, #e9ecef 180deg 360deg)",
                    position: "relative",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                  }}>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "14px",
                      height: "14px",
                      background: "#2a2a2a",
                      borderRadius: "50%"
                    }}></div>
                  </div>
                  
                  <div style={{
                    color: "#B0B0B0",
                    fontSize: "11px",
                    fontWeight: "500"
                  }}>
                    Access Control
                  </div>
                </div>

                {/* Bottom section with logo */}
                <div style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "center"
                }}>
                  <div style={{
                    background: "linear-gradient(135deg, #333333 0%, #404040 100%)",
                    borderRadius: "8px",
                    padding: "10px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                    flex: 1,
                    textAlign: "center",
                    color: "#B0B0B0",
                    fontSize: "12px",
                    fontWeight: "600",
                    border: "1px solid rgba(111, 66, 193, 0.1)"
                  }}>
                    Secure Access
                  </div>
                  <div style={{
                    background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                    width: "35px",
                    height: "28px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)"
                  }}></div>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div style={{
              flex: "1",
              minWidth: "300px",
              paddingLeft: "20px",
              position: "relative",
              zIndex: "2",
              maxWidth: "100%"
            }}>
              {/* Subtitle */}
              <div style={{
                color: "#6f42c1",
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "12px",
                textTransform: "uppercase",
                letterSpacing: "1.5px"
              }}>
                {item.sub_title}
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: "clamp(24px, 3.5vw, 36px)",
                marginBottom: "20px",
                color: "#FFFFFF",
                fontWeight: "700",
                lineHeight: "1.3",
                textAlign: "left",
                position: "relative",
                wordWrap: "break-word",
                maxWidth: "100%",
                overflow: "hidden"
              }}>
                {item.title}
                {/* Decorative underline */}
                <div style={{
                  position: "absolute",
                  bottom: "-6px",
                  left: "0",
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
                  borderRadius: "2px"
                }}></div>
              </h1>

              <div className="main-description">
                <p style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  marginBottom: "30px",
                  color: "#E5E5E5",
                  lineHeight: "1.6",
                  maxWidth: "100%"
                }}>
                  {item.des}
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <button style={{
                  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "50px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 8px 25px rgba(0, 123, 255, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 123, 255, 0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #0056b3 0%, #007bff 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 123, 255, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #007bff 0%, #0056b3 100%)";
                }}>
                  Control Access
                  <span style={{ 
                    fontSize: "16px",
                    transition: "transform 0.3s ease"
                  }}>→</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="slide-content-wrapper" style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
            minHeight: "600px",
            padding: "20px 0",
            position: "relative",
            flexWrap: "wrap"
          }}>
            {/* Background decorative elements */}
            <div style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
              borderRadius: "50%",
              opacity: "0.1",
              zIndex: "1"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "40px",
              left: "10px",
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
              borderRadius: "15px",
              opacity: "0.08",
              zIndex: "1"
            }}></div>

            {/* Left side - Man with glasses and user management dashboard */}
            <div style={{
              flex: "0 0 50%",
              minWidth: "520px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0",
              zIndex: "2"
            }}>
              {/* Workspace image with laptop */}
              <div style={{
                width: "320px",
                height: "400px",
                backgroundImage: `url(/assets/img/blog2.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px 0 0 20px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}>
                {/* Blue overlay accent matching the image */}
                <div style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "140px",
                  height: "50px",
                  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                  borderRadius: "0 0 0 15px",
                  opacity: "0.9"
                }}></div>
                
                {/* Subtle gradient overlay for depth */}
                <div style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "100px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)"
                }}></div>
              </div>

              {/* User Management Dashboard mockup matching the image exactly */}
              <div style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                borderRadius: "0 20px 20px 0",
                padding: "25px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                height: "400px",
                width: "300px",
                position: "relative",
                border: "1px solid rgba(0, 123, 255, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden"
              }}>
                {/* Header with blue theme */}
                <div>
                  <div style={{
                    display: "flex",
                    gap: "8px",
                    marginBottom: "12px"
                  }}>
                    <div style={{
                      background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                      height: "8px",
                      width: "40px",
                      borderRadius: "4px"
                    }}></div>
                    <div style={{
                      background: "linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%)",
                      height: "8px",
                      width: "28px",
                      borderRadius: "4px"
                    }}></div>
                  </div>
                  <h3 style={{
                    color: "#212529",
                    fontSize: "16px",
                    fontWeight: "600",
                    margin: "0"
                  }}>
                    Users
                  </h3>
                </div>

                {/* User cards section matching the image layout */}
                <div style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  border: "1px solid #e9ecef",
                  flex: "1",
                  maxHeight: "180px",
                  overflow: "hidden"
                }}>
                  {/* User 1 - John Clark (JC) */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    padding: "8px",
                    background: "#f8f9fa",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#6c757d",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>JC</div>
                      <div>
                        <div style={{ color: "#212529", fontSize: "14px", fontWeight: "500" }}>John Clark</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#007bff",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "500"
                    }}>Client</div>
                  </div>

                  {/* User 2 - Diana Smith (DS) */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                    padding: "8px",
                    background: "#f8f9fa",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#495057",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>DS</div>
                      <div>
                        <div style={{ color: "#212529", fontSize: "14px", fontWeight: "500" }}>Diana Smith</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#495057",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "500"
                    }}>Staff</div>
                  </div>

                  {/* User 3 - Ilya Malek (IM) */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "8px",
                    background: "#f8f9fa",
                    borderRadius: "6px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "#28a745",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>IM</div>
                      <div>
                        <div style={{ color: "#212529", fontSize: "14px", fontWeight: "500" }}>Ilya Malek</div>
                      </div>
                    </div>
                    <div style={{
                      background: "#007bff",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "12px",
                      fontSize: "10px",
                      fontWeight: "500"
                    }}>Client</div>
                  </div>
                </div>

                {/* Blue section at bottom matching the image */}
                <div style={{
                  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                  borderRadius: "10px",
                  padding: "15px",
                  marginTop: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "60px"
                }}>
                  <div style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center"
                  }}>
                    Access Control Panel
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Content matching the image */}
            <div style={{
              flex: "1",
              minWidth: "300px",
              paddingLeft: "20px",
              position: "relative",
              zIndex: "2",
              maxWidth: "100%"
            }}>
              {/* Title matching the image */}
              <h1 style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                marginBottom: "20px",
                color: "#212529",
                fontWeight: "800",
                lineHeight: "1.2",
                textAlign: "left",
                position: "relative",
                wordWrap: "break-word",
                maxWidth: "100%",
                overflow: "hidden"
              }}>
                Control access<br />
                with confidence
              </h1>

              {/* Description matching the image */}
              <div className="main-description">
                <p style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  marginBottom: "30px",
                  color: "#6c757d",
                  lineHeight: "1.6",
                  maxWidth: "90%"
                }}>
                  Easily manage who can view or edit dashboards and reports. Protect client data while giving your team the access they need to move faster.
                </p>
              </div>

              {/* CTA Button matching the image */}
              <div>
                <button style={{
                  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                  color: "white",
                  padding: "12px 25px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(0, 123, 255, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 123, 255, 0.4)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #0056b3 0%, #004494 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 123, 255, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #007bff 0%, #0056b3 100%)";
                }}>
                  Control Access
                  <span style={{ 
                    fontSize: "14px",
                    transition: "transform 0.3s ease"
                  }}>→</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
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

      case 4:
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

      case 5:
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
          padding: "80px 0",
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background: index === 0 ? "#0a0a0a" : (index % 2 === 0 ? "#0a0a0a" : "#111111")
        }}>
          {index === 0 && (
            <>
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
                  opacity: "0.15"
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
                  background: "linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 20, 20, 0.75) 100%)",
                  zIndex: "2"
                }}
              ></div>
            </>
          )}
          {index !== 0 && (
            <>
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
            </>
          )}
          
          <div className="container" style={{
            position: "relative",
            zIndex: "3",
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 15px"
          }}>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
              <div className="col-lg-11 col-md-12">
                <div
                  className="cs_about_text_box"
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  style={{
                    background: index === 0 
                      ? "linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(42, 42, 42, 0.8) 100%)" 
                      : "linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(42, 42, 42, 0.8) 100%)",
                    padding: index === 0 ? "30px 20px" : "60px 50px",
                    borderRadius: index === 0 ? "25px" : "25px",
                    border: index === 0 ? "1px solid rgba(254, 202, 21, 0.1)" : "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: index === 0 ? "blur(20px)" : "blur(20px)",
                    boxShadow: index === 0 ? "0 25px 60px rgba(0, 0, 0, 0.5)" : "0 25px 60px rgba(0, 0, 0, 0.5)",
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