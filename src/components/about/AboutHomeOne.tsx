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
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<HTMLDivElement[]>([]);
  const contentRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    // Heavy parallel scrolling animations for each section
    parallaxRefs.current.forEach((el, index) => {
      if (!el) return;

      // Main section reveal with perspective
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
          rotationX: 45,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous parallax effect during scroll
      gsap.to(el, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Content animations with staggered reveals
    contentRefs.current.forEach((el, index) => {
      if (!el) return;

      const children = el.children;
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 60,
          x: index % 2 === 0 ? -40 : 40,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Image parallax effects
    imageRefs.current.forEach((el, index) => {
      if (!el) return;

      // Image reveal animation
      gsap.fromTo(
        el,
        {
          scale: 1.3,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Continuous image parallax
      gsap.to(el, {
        yPercent: index % 2 === 0 ? -15 : 15,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    // Heavy line animations
    lineRefs.current.forEach((el, index) => {
      if (!el) return;

      gsap.fromTo(
        el,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 2,
          delay: 0.5 + index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "10px 0",
      }}
    >
      {/* Global Animation Styles */}
      <style jsx>{`
        @keyframes slideReveal {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textFlow {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .parallax-container {
          transform-style: preserve-3d;
        }

        .content-slide {
          will-change: transform;
        }

        .heavy-line {
          transform-origin: left center;
        }

        @media (max-width: 768px) {
          .slide-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .content-slide {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            min-height: auto !important;
          }
          .parallax-container {
            padding: 40px 0 !important;
            margin-bottom: 20px !important;
          }
        }
      `}</style>

      {/* Background Elements */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(254,202,21,0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(13,110,253,0.06) 0%, transparent 50%),
          linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.01) 50%, transparent 100%)
        `,
        pointerEvents: "none",
      }}></div>

      {about_data.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) parallaxRefs.current[index] = el;
          }}
          className="parallax-container"
          style={{
            minHeight: index === 0 ? "auto" : index === 1 ? "auto" : index === 2 ? "auto" : "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            padding: index === 0 ? "40px 0" : index === 1 ? "40px 0" : index === 2 ? "40px 0" : "120px 0",
            marginBottom: index === 0 ? "20px" : index === 1 ? "20px" : index === 2 ? "20px" : "0",
          }}
        >
          <div style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            position: "relative",
          }}>
            
            {/* Section Header with Heavy Line */}
            <div style={{
              textAlign: "center",
              marginBottom: index === 0 ? "30px" : index === 1 ? "30px" : index === 2 ? "30px" : "80px",
              position: "relative",
            }}>
              <div style={{
                color: "#FECA15",
                fontSize: "14px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "20px",
                opacity: 0,
                animation: "textFlow 1s ease-out 0.3s forwards",
              }}>
                {item.sub_title}
              </div>

              <h2 style={{
                fontSize: index === 0 ? "clamp(28px, 4vw, 48px)" : index === 1 ? "clamp(28px, 4vw, 48px)" : index === 2 ? "clamp(28px, 4vw, 48px)" : "clamp(36px, 6vw, 72px)",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: index === 0 ? "20px" : index === 1 ? "20px" : index === 2 ? "20px" : "30px",
                lineHeight: "1.1",
                background: "linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0,
                animation: "textFlow 1s ease-out 0.5s forwards",
              }}>
                {item.title}
              </h2>

              {/* Heavy Animated Line */}
              <div
                ref={(el) => {
                  if (el) lineRefs.current[index] = el;
                }}
                className="heavy-line"
                style={{
                  width: index === 0 ? "120px" : index === 1 ? "120px" : index === 2 ? "120px" : "200px",
                  height: index === 0 ? "3px" : index === 1 ? "3px" : index === 2 ? "3px" : "4px",
                  background: "linear-gradient(90deg, transparent 0%, #FECA15 50%, transparent 100%)",
                  margin: "0 auto",
                  borderRadius: "2px",
                  transform: "scaleX(0)",
                }}
              ></div>
            </div>

            {/* Dynamic Content Layout */}
            {index === 0 && (
              <div 
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="content-slide"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                  alignItems: "center",
                  minHeight: "350px",
                }}
              >
                {/* Left Content Panel */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  padding: "30px 25px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(254,202,21,0.05) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}></div>

                  <p style={{
                    color: "#e0e0e0",
                    fontSize: "15px",
                    lineHeight: "1.5",
                    marginBottom: "25px",
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {item.des}
                  </p>

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {["Instant Setup", "Brand Customization", "Client Ready"].map((feature, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}>
                        <div style={{
                          width: "6px",
                          height: "6px",
                          background: "#FECA15",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}></div>
                        <span style={{
                          color: "#c0c0c0",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Panel */}
                <div style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                  {/* Image overlay for better contrast */}
                  <div style={{
                    position: "absolute",
                    inset: "0",
                    background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
                    borderRadius: "15px",
                  }}></div>

                  {/* Templates Count Badge */}
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "rgba(254,202,21,0.9)",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(254,202,21,0.3)",
                    animation: "fadeInScale 1s ease-out 1.4s forwards",
                    opacity: 0,
                    zIndex: 3,
                  }}>
                    <div style={{
                      color: "#333",
                      fontSize: "8px",
                      fontWeight: "600",
                      marginBottom: "2px",
                    }}>
                      Templates Ready
                    </div>
                    <div style={{
                      color: "#333",
                      fontSize: "14px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}>
                      50+
                    </div>
                  </div>

                  {/* CRM Comparison Chart - Bottom Left Corner */}
                  <div style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    width: "340px",
                    height: "180px",
                    background: "rgba(255,255,255,0.98)",
                    padding: "16px",
                    borderRadius: "12px",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    animation: "fadeInScale 1s ease-out 0.8s forwards",
                    opacity: 0,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    zIndex: 2,
                  }}>
                    {/* Chart Title */}
                    <div style={{
                      textAlign: "center",
                      marginBottom: "10px",
                      flexShrink: 0,
                    }}>
                      <h4 style={{
                        color: "#2c2c2c",
                        fontSize: "12px",
                        fontWeight: "700",
                        margin: "0 0 6px 0",
                        lineHeight: "1.3",
                      }}>
                        CRM Benefits for Tradies & Small Businesses
                      </h4>
                      <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "8px",
                        fontWeight: "600",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          <div style={{ width: "8px", height: "5px", background: "#ff6b6b", borderRadius: "1px" }}></div>
                          <span style={{ color: "#666" }}>Manual Processes</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                          <div style={{ width: "8px", height: "5px", background: "#ffd93d", borderRadius: "1px" }}></div>
                          <span style={{ color: "#666" }}>Custom CRM</span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Container */}
                    <div style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      gap: "8px",
                      padding: "8px 4px 4px 4px",
                      height: "100px",
                      overflow: "hidden",
                    }}>
                      {/* Admin Time Section */}
                      <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        maxHeight: "100px",
                      }}>
                        <div style={{
                          fontSize: "8px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: "4px",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          height: "16px",
                          lineHeight: "8px",
                        }}>
                          Admin Time (Weekly)
                        </div>
                        <div style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                          height: "70px",
                          position: "relative",
                        }}>
                          {/* Manual Process Bar - 20 hours */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ff6b6b",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>20hours</span>
                            <div style={{
                              width: "18px",
                              height: "50px",
                              background: "#ff6b6b",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 107, 107, 0.3)",
                              position: "relative",
                            }}>
                              <span style={{ 
                                fontSize: "7px", 
                                color: "white", 
                                fontWeight: "700",
                                transform: "rotate(-90deg)",
                                whiteSpace: "nowrap",
                                position: "absolute",
                              }}>20h</span>
                            </div>
                          </div>
                          {/* CRM Bar - 6 hours */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ffd93d",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>6hours</span>
                            <div style={{
                              width: "18px",
                              height: "15px",
                              background: "#ffd93d",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 217, 61, 0.3)",
                            }}>
                              <span style={{ 
                                fontSize: "7px", 
                                color: "#333", 
                                fontWeight: "700",
                              }}>6h</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lead Conversion Section */}
                      <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        maxHeight: "100px",
                      }}>
                        <div style={{
                          fontSize: "8px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: "4px",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          height: "16px",
                          lineHeight: "8px",
                        }}>
                          Lead Conversion Rate
                        </div>
                        <div style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                          height: "70px",
                          position: "relative",
                        }}>
                          {/* Manual Process Bar - 15% */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ff6b6b",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>15%</span>
                            <div style={{
                              width: "18px",
                              height: "20px",
                              background: "#ff6b6b",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 107, 107, 0.3)",
                            }}>
                              <span style={{ 
                                fontSize: "7px", 
                                color: "white", 
                                fontWeight: "700",
                              }}>15%</span>
                            </div>
                          </div>
                          {/* CRM Bar - 35% */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ffd93d",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>35%</span>
                            <div style={{
                              width: "18px",
                              height: "40px",
                              background: "#ffd93d",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 217, 61, 0.3)",
                              position: "relative",
                            }}>
                              <span style={{ 
                                fontSize: "7px", 
                                color: "#333", 
                                fontWeight: "700",
                                transform: "rotate(-90deg)",
                                whiteSpace: "nowrap",
                                position: "absolute",
                              }}>35%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Missed Leads Section */}
                      <div style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        maxHeight: "100px",
                      }}>
                        <div style={{
                          fontSize: "8px",
                          fontWeight: "600",
                          color: "#333",
                          marginBottom: "4px",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          height: "16px",
                          lineHeight: "8px",
                        }}>
                          Missed Leads
                        </div>
                        <div style={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "4px",
                          height: "70px",
                          position: "relative",
                        }}>
                          {/* Manual Process Bar - 30% */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ff6b6b",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>30%</span>
                            <div style={{
                              width: "18px",
                              height: "35px",
                              background: "#ff6b6b",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 107, 107, 0.3)",
                              position: "relative",
                            }}>
                              <span style={{ 
                                fontSize: "7px", 
                                color: "white", 
                                fontWeight: "700",
                                transform: "rotate(-90deg)",
                                whiteSpace: "nowrap",
                                position: "absolute",
                              }}>30%</span>
                            </div>
                          </div>
                          {/* CRM Bar - 5% */}
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "100%",
                            justifyContent: "flex-end",
                          }}>
                            <span style={{
                              fontSize: "7px",
                              color: "#ffd93d",
                              fontWeight: "700",
                              marginBottom: "2px",
                              height: "8px",
                              lineHeight: "8px",
                            }}>5%</span>
                            <div style={{
                              width: "18px",
                              height: "8px",
                              background: "#ffd93d",
                              borderRadius: "2px 2px 0 0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 2px 4px rgba(255, 217, 61, 0.3)",
                            }}>
                              <span style={{ 
                                fontSize: "6px", 
                                color: "#333", 
                                fontWeight: "700",
                              }}>5%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {index === 1 && (
              <div 
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="content-slide"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "30px",
                  alignItems: "center",
                  minHeight: "350px",
                }}
              >
                {/* Left Image Panel */}
                <div style={{
                  position: "relative",
                  height: "350px",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}>
                  <div
                    ref={(el) => {
                      if (el) imageRefs.current[index] = el;
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <div style={{
                      position: "absolute",
                      inset: "0",
                      background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
                    }}></div>

                    {/* Security Badge */}
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(13,110,253,0.2)",
                      padding: "20px",
                      borderRadius: "15px",
                      backdropFilter: "blur(15px)",
                      border: "2px solid rgba(13,110,253,0.3)",
                      animation: "fadeInScale 1s ease-out 1s forwards",
                      opacity: 0,
                      textAlign: "center",
                    }}>
                      <div style={{
                        width: "30px",
                        height: "30px",
                        margin: "0 auto 10px",
                        position: "relative",
                      }}>
                        <div style={{
                          width: "100%",
                          height: "60%",
                          border: "3px solid #0d6efd",
                          borderRadius: "8px 8px 0 0",
                          position: "absolute",
                          top: "0",
                        }}></div>
                        <div style={{
                          width: "100%",
                          height: "50%",
                          background: "#0d6efd",
                          borderRadius: "6px",
                          position: "absolute",
                          bottom: "0",
                        }}></div>
                      </div>
                      <div style={{
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}>
                        Secure Access
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content Panel */}
                <div style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  padding: "30px 25px",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(13,110,253,0.05) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}></div>

                  <p style={{
                    color: "#e0e0e0",
                    fontSize: "15px",
                    lineHeight: "1.5",
                    marginBottom: "25px",
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {item.des}
                  </p>

                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {["Role-based Access", "Data Protection", "Team Management"].map((feature, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 0",
                        borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}>
                        <div style={{
                          width: "6px",
                          height: "6px",
                          background: "#0d6efd",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}></div>
                        <span style={{
                          color: "#c0c0c0",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {index === 2 && (
              <div 
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="content-slide"
                style={{
                  position: "relative",
                }}
              >
                <div style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}>
                  <p style={{
                    color: "#e0e0e0",
                    fontSize: "15px",
                    lineHeight: "1.5",
                    maxWidth: "800px",
                    margin: "0 auto",
                  }}>
                    {item.des}
                  </p>
                </div>

                {/* Problem Solution Cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "25px",
                  marginTop: "30px",
                }}>
                  {item.features?.map((feature, idx) => {
                    const [problem, solution] = feature.split('\n\n');
                    const colors = ["#FECA15", "#0d6efd", "#28a745"];
                    return (
                      <div key={idx} style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                        padding: "30px 25px",
                        borderRadius: "15px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        backdropFilter: "blur(20px)",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "4px",
                          background: `linear-gradient(90deg, transparent 0%, ${colors[idx]} 50%, transparent 100%)`,
                        }}></div>

                        <div style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          width: "35px",
                          height: "35px",
                          background: `${colors[idx]}20`,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: `2px solid ${colors[idx]}30`,
                        }}>
                          <span style={{
                            color: colors[idx],
                            fontSize: "16px",
                            fontWeight: "700",
                          }}>
                            {idx + 1}
                          </span>
                        </div>

                        <div style={{
                          marginBottom: "20px",
                        }}>
                          <h4 style={{
                            color: colors[idx],
                            fontSize: "15px",
                            fontWeight: "600",
                            marginBottom: "15px",
                            fontStyle: "italic",
                            lineHeight: "1.4",
                          }}>
                            {problem}
                          </h4>
                          <p style={{
                            color: "#b0b0b0",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            margin: "0",
                          }}>
                            {solution}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutHomeOne;