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
    sub_title: "Your Business Challenges",
    title: "Your Challenges? We Get It.",
    des: "You're not alone — and these problems don't fix themselves. We help small to medium-sized business owners solve these daily bottlenecks with systems that are simple, smart, and built to save time.",
    features: [
      "\"I keep missing calls, DMs, and emails — I just can't keep up.\"\n\nLeads slip through, stalling your service business growth.",
      "\"I know we need follow-ups and reviews... but it never happens.\"\n\nManual tasks eat time, leaving no room for consistent client nurturing.",
      "\"All our tools work... but none of them talk to each other.\"\n\nDisconnected systems create chaos, slowing down your service business."
    ]
  },
  {
    img: "/assets/img/blog8.jpg",
    sub_title: "CRM Solutions", 
    title: "How We Fix It with GoHighLevel CRM",
    des: "Our comprehensive CRM solution addresses every challenge with smart automation and integrated systems designed specifically for tradies and small businesses.",
    features: [
      "Convert & Nurture\n\n• GoHighLevel CRM tracks leads from web, social, and calls in one place\n• Email + SMS automation for follow-ups and rebooking\n• Online booking tools for instant scheduling\n• Review requests to build credibility across Australia",
      "Scale with Systems\n\n• AI voice bots handle missed calls for tradies and clinicians\n• Website + social media chatbots respond 24/7\n• Automation workflows reduce admin chaos\n• Integrations with Xero, Cliniko, ServiceM8, and Calendly"
    ]
  },
  {
    img: "/assets/img/blog2.jpg",
    sub_title: "Why Choose Leads360",
    title: "Why Choose Leads360 for Your Service Business?",
    des: "Join the many service-based businesses across Australia who trust Leads360 to transform chaos into growth.",
    features: [
      "Results That Drive Growth\n\n• Save 10-15 hours weekly with automated workflows\n• Cut operational costs by up to 20%\n• Drive 25% revenue growth through effective lead tracking\n• Custom GoHighLevel CRM solutions for service businesses",
      "Always Ahead of the Curve\n\n• Latest CRM technologies and integrations\n• Cutting-edge AI voice bots for missed calls\n• 24/7 chatbots for website and social media\n• Future-proofed systems for competitive growth",
      "Partners in Your Business Environment\n\n• Understanding Australian service industry challenges\n• Systems that honor your business environment\n• Aligning teams and tools to scale without chaos\n• Maintaining human connection while streamlining operations"
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
                    {[
                      "\"I keep missing calls, DMs, and emails — I just can't keep up.\"",
                      "\"I know we need follow-ups and reviews... but it never happens.\"",
                      "\"All our tools work... but none of them talk to each other.\""
                    ].map((challenge, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "12px 0",
                        borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                      }}>
                        <div style={{
                          width: "6px",
                          height: "6px",
                          background: "#ff6b6b",
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: "6px",
                        }}></div>
                        <div style={{ flex: 1 }}>
                          <p style={{
                            color: "#ff9999",
                            fontSize: "13px",
                            fontWeight: "600",
                            fontStyle: "italic",
                            marginBottom: "6px",
                            lineHeight: "1.3",
                          }}>
                            {challenge}
                          </p>
                          <p style={{
                            color: "#c0c0c0",
                            fontSize: "12px",
                            lineHeight: "1.4",
                            margin: "0",
                          }}>
                            {idx === 0 && "Leads slip through, stalling your service business growth."}
                            {idx === 1 && "Manual tasks eat time, leaving no room for consistent client nurturing."}
                            {idx === 2 && "Disconnected systems create chaos, slowing down your service business."}
                          </p>
                        </div>
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

                  {/* CRM Solutions Badge */}
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "rgba(254,202,21,0.15)",
                    padding: "15px 20px",
                    borderRadius: "12px",
                    border: "1px solid rgba(254,202,21,0.4)",
                    backdropFilter: "blur(10px)",
                    animation: "fadeInScale 1s ease-out 1.4s forwards",
                    opacity: 0,
                    zIndex: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "120px",
                  }}>
                    <div style={{
                      width: "30px",
                      height: "30px",
                      background: "rgba(254,202,21,0.9)",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <span style={{
                        color: "#333",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}>
                        ✓
                      </span>
                    </div>
                    <div style={{
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: "700",
                      textAlign: "center",
                      lineHeight: "1.2",
                      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                    }}>
                      CRM Solutions
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
                  alignItems: "stretch",
                  minHeight: "450px",
                }}
              >
                {/* Left Image Panel */}
                <div style={{
                  position: "relative",
                  height: "450px",
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

                    {/* CRM Solutions Badge */}
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(254,202,21,0.2)",
                      padding: "20px",
                      borderRadius: "15px",
                      backdropFilter: "blur(15px)",
                      border: "2px solid rgba(254,202,21,0.3)",
                      animation: "fadeInScale 1s ease-out 1s forwards",
                      opacity: 0,
                      textAlign: "center",
                    }}>
                      <div style={{
                        width: "35px",
                        height: "35px",
                        margin: "0 auto 10px",
                        position: "relative",
                        background: "#FECA15",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <span style={{
                          color: "#333",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}>
                          ✓
                        </span>
                      </div>
                      <div style={{
                        color: "#ffffff",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}>
                        CRM Solutions
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

                  {/* Convert & Nurture Section */}
                  <div style={{
                    marginBottom: "25px",
                    position: "relative",
                    zIndex: 2,
                  }}>
                    <h4 style={{
                      color: "#FECA15",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}>
                      Convert & Nurture
                    </h4>
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}>
                      {[
                        "GoHighLevel CRM tracks leads from web, social, and calls in one place",
                        "Email + SMS automation for follow-ups and rebooking",
                        "Online booking tools for instant scheduling",
                        "Review requests to build credibility across Australia"
                      ].map((feature, idx) => (
                        <div key={idx} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}>
                          <div style={{
                            width: "4px",
                            height: "4px",
                            background: "#FECA15",
                            borderRadius: "50%",
                            flexShrink: 0,
                            marginTop: "6px",
                          }}></div>
                          <span style={{
                            color: "#c0c0c0",
                            fontSize: "12px",
                            lineHeight: "1.4",
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scale with Systems Section */}
                  <div style={{
                    position: "relative",
                    zIndex: 2,
                  }}>
                    <h4 style={{
                      color: "#0d6efd",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "12px",
                    }}>
                      Scale with Systems
                    </h4>
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}>
                      {[
                        "AI voice bots handle missed calls for tradies and clinicians",
                        "Website + social media chatbots respond 24/7",
                        "Automation workflows reduce admin chaos",
                        "Integrations with Xero, Cliniko, ServiceM8, and Calendly"
                      ].map((feature, idx) => (
                        <div key={idx} style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}>
                          <div style={{
                            width: "4px",
                            height: "4px",
                            background: "#0d6efd",
                            borderRadius: "50%",
                            flexShrink: 0,
                            marginTop: "6px",
                          }}></div>
                          <span style={{
                            color: "#c0c0c0",
                            fontSize: "12px",
                            lineHeight: "1.4",
                          }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
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

                {/* Why Choose Leads360 Cards */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                  gap: "30px",
                  marginTop: "30px",
                }}>
                  {item.features?.map((feature, idx) => {
                    const [title, description] = feature.split('\n\n');
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
                        minHeight: "220px",
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
                          top: "15px",
                          right: "15px",
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
                          marginBottom: "15px",
                          paddingRight: "50px",
                        }}>
                          <h4 style={{
                            color: colors[idx],
                            fontSize: "16px",
                            fontWeight: "700",
                            marginBottom: "15px",
                            lineHeight: "1.3",
                          }}>
                            {title}
                          </h4>
                          
                          {/* Bullet points content */}
                          <div style={{
                            color: "#b0b0b0",
                            fontSize: "14px",
                            lineHeight: "1.6",
                          }}>
                            {description.split('\n').map((point, pointIdx) => {
                              if (point.trim().startsWith('•')) {
                                return (
                                  <div key={pointIdx} style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "8px",
                                    marginBottom: "8px",
                                  }}>
                                    <div style={{
                                      width: "4px",
                                      height: "4px",
                                      background: colors[idx],
                                      borderRadius: "50%",
                                      flexShrink: 0,
                                      marginTop: "8px",
                                    }}></div>
                                    <span>{point.replace('•', '').trim()}</span>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
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