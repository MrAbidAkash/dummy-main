"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import Testimonial from "@/components/testimonial/Testimonial";
import CTA from "@/components/common/CTA";
// import CTA from "@/components/CTA";

const DigitalMarketingStrategy = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .benefit-icon {
          transition: transform 0.3s ease !important;
        }

        .benefit-icon:hover {
          transform: rotate(5deg) scale(1.1) !important;
        }

        .benefit-icon-2:hover {
          transform: rotate(-5deg) scale(1.1) !important;
        }

        .benefit-icon-3:hover {
          transform: scale(1.15) !important;
        }
      `}</style>
      <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <section style={{
              minHeight: '100vh',
              background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(45,45,45,0.8) 100%), url("/assets/img/blog (2).jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              paddingTop: '120px',
              paddingBottom: '80px'
            }}>
              {/* Background overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 1
              }}></div>

              <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div className="cs_hero_text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto", paddingTop: "60px" }}>
                  {/* Main Title */}
                  <h1 style={{
                    fontSize: "clamp(28px, 4.5vw, 48px)",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    marginBottom: "30px",
                    color: "#FFC107"
                  }}>
                    Digital Transformation Packages for Service Businesses
                  </h1>

                  {/* Subtitle */}
                  <p style={{
                    fontSize: "clamp(13px, 1.6vw, 16px)",
                    lineHeight: "1.6",
                    color: "#ffffff",
                    marginBottom: "50px",
                    maxWidth: "800px",
                    margin: "0 auto 50px"
                  }}>
                    From website builds to SEO, email marketing, Google and Facebook ads, and complex automations, our packages empower tradies, allied health professionals, and service-based businesses across Australia to save time, cut costs, and drive growth with GoHighLevel CRM.
                  </p>

                  {/* CTA Button */}
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        background: "linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)",
                        color: "#1a1a1a",
                        padding: "18px 40px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        fontSize: "18px",
                        fontWeight: "700",
                        transition: "all 0.3s ease",
                        border: "none",
                        boxShadow: "0 8px 30px rgba(255, 193, 7, 0.3)"
                      }}
                    >
                      Book a Free Demo
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    color: '#FFC107',
                    marginBottom: '20px'
                  }}>
                    Why Choose Our Digital Transformation Packages?
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#ffffff',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Our packages combine essential digital services—from building high-converting websites to running targeted Google and Facebook ads—with GoHighLevel CRM for seamless automations. Honor your business traditions while innovating to thrive in Australia's competitive market.
                  </p>
                </div>

                {/* Tech Stack Consolidation */}
                <div style={{
                  maxWidth: '1100px',
                  margin: '60px auto 0',
                  position: 'relative'
                }}>
                  
                  {/* Benefits Stack */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '25px',
                    position: 'relative'
                  }}>
                    {/* Benefit 1 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                      borderRadius: '20px',
                      padding: '35px 40px',
                      border: '1px solid rgba(255,193,7,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      opacity: 0,
                      transform: 'translateX(-30px)',
                      animation: 'slideInLeft 0.8s ease-out 0.2s forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}>
                      {/* Background pattern */}
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '200px',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,193,7,0.03) 100%)',
                        pointerEvents: 'none'
                      }}></div>

                      {/* Icon */}
                      <div 
                        className="benefit-icon"
                        style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '30px',
                        flexShrink: 0,
                        boxShadow: '0 10px 25px rgba(255,193,7,0.3)',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                        <h3 style={{
                          fontSize: '26px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '12px',
                          letterSpacing: '-0.5px'
                        }}>
                          Save Time & Money
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.9',
                          margin: '0',
                          maxWidth: '650px'
                        }}>
                          Automate email marketing and lead tracking to save 10–15 hours weekly and cut costs by 20%. Streamline your operations with intelligent workflows.
                        </p>
                      </div>

                      {/* Accent line */}
                      <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: 'linear-gradient(180deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '0 4px 4px 0'
                      }}></div>
                    </div>

                    {/* Benefit 2 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                      borderRadius: '20px',
                      padding: '35px 40px',
                      border: '1px solid rgba(255,193,7,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      opacity: 0,
                      transform: 'translateX(-30px)',
                      animation: 'slideInLeft 0.8s ease-out 0.4s forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}>
                      {/* Background pattern */}
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '200px',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,193,7,0.03) 100%)',
                        pointerEvents: 'none'
                      }}></div>

                      {/* Icon */}
                      <div 
                        className="benefit-icon benefit-icon-2"
                        style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '30px',
                        flexShrink: 0,
                        boxShadow: '0 10px 25px rgba(255,193,7,0.3)',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                        </svg>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                        <h3 style={{
                          fontSize: '26px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '12px',
                          letterSpacing: '-0.5px'
                        }}>
                          Drive Growth
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.9',
                          margin: '0',
                          maxWidth: '650px'
                        }}>
                          SEO, Google ads, and Facebook ads boost visibility, leading to 25% revenue growth for your service business. Maximize your digital presence.
                        </p>
                      </div>

                      {/* Accent line */}
                      <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: 'linear-gradient(180deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '0 4px 4px 0'
                      }}></div>
                    </div>

                    {/* Benefit 3 */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                      borderRadius: '20px',
                      padding: '35px 40px',
                      border: '1px solid rgba(255,193,7,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      opacity: 0,
                      transform: 'translateX(-30px)',
                      animation: 'slideInLeft 0.8s ease-out 0.6s forwards'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}>
                      {/* Background pattern */}
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '200px',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,193,7,0.03) 100%)',
                        pointerEvents: 'none'
                      }}></div>

                      {/* Icon */}
                      <div 
                        className="benefit-icon benefit-icon-3"
                        style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '30px',
                        flexShrink: 0,
                        boxShadow: '0 10px 25px rgba(255,193,7,0.3)',
                        position: 'relative',
                        zIndex: 2
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                        <h3 style={{
                          fontSize: '26px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '12px',
                          letterSpacing: '-0.5px'
                        }}>
                          Tailored for Australia
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.9',
                          margin: '0',
                          maxWidth: '650px'
                        }}>
                          Localized strategies for businesses in Sydney, Melbourne, Brisbane, and beyond, ensuring relevance and compliance with Australian standards.
                        </p>
                      </div>

                      {/* Accent line */}
                      <div style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '4px',
                        background: 'linear-gradient(180deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '0 4px 4px 0'
                      }}></div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </section>

            {/* Packages Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    color: '#FFC107',
                    marginBottom: '40px'
                  }}>
                    Our Digital Transformation Packages
                  </h2>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '25px',
                  marginTop: '60px',
                  maxWidth: '1400px',
                  margin: '60px auto 0'
                }}>
                  {/* Starter Package */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '35px 25px',
                    border: '1px solid rgba(255,193,7,0.2)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}>
                    {/* Package badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: '#FFC107',
                      color: '#1a1a1a',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Popular
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: '#FFC107',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px'
                    }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '15px'
                    }}>
                      Small Businesses (1-5)
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#FFC107',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      Starter Package
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      opacity: 0.9,
                      flex: 1
                    }}>
                      Ideal for small businesses (1–5). Includes website build, basic SEO, email marketing setup, and GHL CRM integration for lead tracking.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px',
                      padding: '12px 15px',
                      background: 'rgba(255,193,7,0.1)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      Save 10 hours/week and boost leads by 15%.
                    </div>
                  </div>

                  {/* Pro Package */}
                  <div style={{
                    background: 'rgba(255,193,7,0.08)',
                    borderRadius: '16px',
                    padding: '35px 25px',
                    border: '2px solid rgba(255,193,7,0.3)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'scale(1.05)',
                    minHeight: '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}>
                    {/* Featured badge */}
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#FFC107',
                      color: '#1a1a1a',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Most Popular
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: '#FFC107',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '15px auto 25px'
                    }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99l-2.54 3.38v5.63h2v8h2v-8h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6.04 8H3.5c-.8 0-1.54.37-2.01.99L.95 11.37v5.63h2v6h2v-6h2z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '15px'
                    }}>
                      Medium Businesses (5-20)
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#FFC107',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      Pro Package
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      opacity: 0.95,
                      flex: 1
                    }}>
                      For medium businesses (5–20). Adds Google and Facebook ads management, advanced email marketing, and complex automations with GHL CRM.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '10px',
                      padding: '12px 15px',
                      background: '#FFC107',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}>
                      Cut costs by 20% and increase conversions by 20%.
                    </div>
                  </div>

                  {/* Enterprise Package */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '35px 25px',
                    border: '1px solid rgba(255,193,7,0.2)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center'
                  }}>
                    {/* Package badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'rgba(255,193,7,0.2)',
                      color: '#FFC107',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      border: '1px solid rgba(255,193,7,0.3)'
                    }}>
                      Premium
                    </div>

                    {/* Icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: '#FFC107',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px'
                    }}>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '15px'
                    }}>
                      Large Businesses (20+)
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#FFC107',
                      marginBottom: '20px',
                      fontWeight: '500'
                    }}>
                      Enterprise Package
                    </p>
                    <p style={{
                      fontSize: '14px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      opacity: 0.9,
                      flex: 1
                    }}>
                      For large businesses (20+). Full custom website, SEO optimization, multi-channel ads (Google, Facebook), and advanced GHL CRM automations.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px',
                      padding: '12px 15px',
                      background: 'rgba(255,193,7,0.1)',
                      borderRadius: '10px',
                      textAlign: 'center'
                    }}>
                      Drive 25% revenue growth with tailored strategies.
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Services Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    color: '#FFC107',
                    marginBottom: '40px'
                  }}>
                    Services Included in Our Packages
                  </h2>
                </div>

                {/* Elegant Animated Service Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  marginTop: '80px',
                  maxWidth: '1400px',
                  margin: '80px auto 0',
                  perspective: '1000px'
                }}>
                  {/* Website Build */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    borderRadius: '24px',
                    padding: '0',
                    border: 'none',
                    position: 'relative',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,193,7,0.12)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.1) rotateY(10deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1) rotateY(0deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(0)';
                  }}>
                    
                    {/* Top section with number */}
                    <div style={{
                      padding: '30px 30px 0',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '30px'
                      }}>
                        <div style={{
                          width: '2px',
                          height: '60px',
                          background: 'linear-gradient(to bottom, #FFC107, rgba(255,193,7,0.3))',
                          borderRadius: '2px'
                        }}></div>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,193,7,0.1)',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,193,7,0.2)',
                          color: '#FFC107',
                          fontWeight: '600',
                          fontSize: '18px',
                          fontFamily: 'monospace'
                        }}>
                          01
                        </div>
                      </div>

                      {/* Icon with animation */}
                      <div className="icon-container" style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, rgba(255,193,7,0.8) 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="card-content" style={{
                      padding: '0 30px 40px',
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.4s ease'
                    }}>
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        position: 'relative'
                      }}>
                        Website Build
                        <span style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '0',
                          width: '40px',
                          height: '3px',
                          background: '#FFC107',
                          borderRadius: '2px'
                        }}></span>
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: '1.7',
                        flex: 1
                      }}>
                        High-converting websites tailored for tradies and allied health, optimized for mobile and SEO to attract local clients in Sydney or Melbourne.
                      </p>
                    </div>
                  </div>

                  {/* SEO */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    borderRadius: '24px',
                    padding: '0',
                    border: 'none',
                    position: 'relative',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,193,7,0.12)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.1) rotateY(10deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1) rotateY(0deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(0)';
                  }}>
                    
                    {/* Top section with number */}
                    <div style={{
                      padding: '30px 30px 0',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '30px'
                      }}>
                        <div style={{
                          width: '2px',
                          height: '60px',
                          background: 'linear-gradient(to bottom, #FFC107, rgba(255,193,7,0.3))',
                          borderRadius: '2px'
                        }}></div>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,193,7,0.1)',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,193,7,0.2)',
                          color: '#FFC107',
                          fontWeight: '600',
                          fontSize: '18px',
                          fontFamily: 'monospace'
                        }}>
                          02
                        </div>
                      </div>

                      {/* Icon with animation */}
                      <div className="icon-container" style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, rgba(255,193,7,0.8) 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="card-content" style={{
                      padding: '0 30px 40px',
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.4s ease'
                    }}>
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        position: 'relative'
                      }}>
                        SEO
                        <span style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '0',
                          width: '40px',
                          height: '3px',
                          background: '#FFC107',
                          borderRadius: '2px'
                        }}></span>
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: '1.7',
                        flex: 1
                      }}>
                        Local SEO strategies to rank higher on Google for searches like 'tradies in Brisbane' or 'allied health in Perth', driving organic traffic.
                      </p>
                    </div>
                  </div>

                  {/* Email Marketing */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    borderRadius: '24px',
                    padding: '0',
                    border: 'none',
                    position: 'relative',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,193,7,0.12)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.1) rotateY(10deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1) rotateY(0deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(0)';
                  }}>
                    
                    {/* Top section with number */}
                    <div style={{
                      padding: '30px 30px 0',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '30px'
                      }}>
                        <div style={{
                          width: '2px',
                          height: '60px',
                          background: 'linear-gradient(to bottom, #FFC107, rgba(255,193,7,0.3))',
                          borderRadius: '2px'
                        }}></div>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,193,7,0.1)',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,193,7,0.2)',
                          color: '#FFC107',
                          fontWeight: '600',
                          fontSize: '18px',
                          fontFamily: 'monospace'
                        }}>
                          03
                        </div>
                      </div>

                      {/* Icon with animation */}
                      <div className="icon-container" style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, rgba(255,193,7,0.8) 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="card-content" style={{
                      padding: '0 30px 40px',
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.4s ease'
                    }}>
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        position: 'relative'
                      }}>
                        Email Marketing
                        <span style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '0',
                          width: '40px',
                          height: '3px',
                          background: '#FFC107',
                          borderRadius: '2px'
                        }}></span>
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: '1.7',
                        flex: 1
                      }}>
                        Automated campaigns for follow-ups and rebookings, integrated with GHL CRM to nurture leads and boost retention by 20%.
                      </p>
                    </div>
                  </div>

                  {/* Google & Facebook Ads */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                    borderRadius: '24px',
                    padding: '0',
                    border: 'none',
                    position: 'relative',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-12px) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,193,7,0.12)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1.1) rotateY(10deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                    if (icon) icon.style.transform = 'scale(1) rotateY(0deg)';
                    const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
                    if (content) content.style.transform = 'translateY(0)';
                  }}>
                    
                    {/* Top section with number */}
                    <div style={{
                      padding: '30px 30px 0',
                      position: 'relative',
                      zIndex: 2
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '30px'
                      }}>
                        <div style={{
                          width: '2px',
                          height: '60px',
                          background: 'linear-gradient(to bottom, #FFC107, rgba(255,193,7,0.3))',
                          borderRadius: '2px'
                        }}></div>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'rgba(255,193,7,0.1)',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px solid rgba(255,193,7,0.2)',
                          color: '#FFC107',
                          fontWeight: '600',
                          fontSize: '18px',
                          fontFamily: 'monospace'
                        }}>
                          04
                        </div>
                      </div>

                      {/* Icon with animation */}
                      <div className="icon-container" style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #FFC107 0%, rgba(255,193,7,0.8) 100%)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '25px',
                        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transformStyle: 'preserve-3d'
                      }}>
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="card-content" style={{
                      padding: '0 30px 40px',
                      position: 'relative',
                      zIndex: 2,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.4s ease'
                    }}>
                      <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#ffffff',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        position: 'relative'
                      }}>
                        Google & Facebook Ads
                        <span style={{
                          position: 'absolute',
                          bottom: '-8px',
                          left: '0',
                          width: '40px',
                          height: '3px',
                          background: '#FFC107',
                          borderRadius: '2px'
                        }}></span>
                      </h3>
                      <p style={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: '1.7',
                        flex: 1
                      }}>
                        Targeted ads to reach high-value clients, with GHL CRM tracking to optimize campaigns and increase ROI by 25%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    color: '#FFC107',
                    marginBottom: '40px'
                  }}>
                    How Our Digital Transformation Packages Work
                  </h2>
                </div>

                {/* Vertical Timeline Design - Crossover Style */}
                <div style={{
                  maxWidth: '800px',
                  margin: '80px auto 0',
                  padding: '0 20px',
                  position: 'relative'
                }}>
                  {/* Main Timeline Container */}
                  <div style={{
                    position: 'relative',
                    paddingLeft: '120px'
                  }}>
                    
                    {/* Step 1: Consultation */}
                    <div style={{
                      position: 'relative',
                      marginBottom: '60px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                      {/* Circle Icon */}
                      <div style={{
                        position: 'absolute',
                        left: '-120px',
                        top: '10px',
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(255,193,7,0.3)',
                        zIndex: 3
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                      </div>

                      {/* Dotted Line */}
                      <div style={{
                        position: 'absolute',
                        left: '-85px',
                        top: '80px',
                        width: '2px',
                        height: '60px',
                        background: 'repeating-linear-gradient(to bottom, #FFC107 0px, #FFC107 8px, transparent 8px, transparent 16px)',
                        zIndex: 1
                      }}></div>

                      {/* Step Number & Title */}
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                        borderRadius: '16px',
                        padding: '25px 30px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(15px)'
                      }}>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}>
                          <span style={{
                            background: '#FFC107',
                            color: '#1a1a1a',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: '800'
                          }}>
                            1
                          </span>
                          Describe the role
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          Book a free demo to discuss your business needs, from website build to ads and automations. We specialize in digital transformation for service businesses.
                        </p>
                      </div>
                    </div>

                    {/* Step 2: Customization */}
                    <div style={{
                      position: 'relative',
                      marginBottom: '60px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                      {/* Circle Icon */}
                      <div style={{
                        position: 'absolute',
                        left: '-120px',
                        top: '10px',
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(255,193,7,0.3)',
                        zIndex: 3
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>

                      {/* Dotted Line */}
                      <div style={{
                        position: 'absolute',
                        left: '-85px',
                        top: '80px',
                        width: '2px',
                        height: '60px',
                        background: 'repeating-linear-gradient(to bottom, #FFC107 0px, #FFC107 8px, transparent 8px, transparent 16px)',
                        zIndex: 1
                      }}></div>

                      {/* Step Number & Title */}
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                        borderRadius: '16px',
                        padding: '25px 30px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(15px)'
                      }}>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}>
                          <span style={{
                            background: '#FFC107',
                            color: '#1a1a1a',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: '800'
                          }}>
                            2
                          </span>
                          Set smart filters
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          We tailor the package with SEO, email marketing, ads, and GHL CRM integrations for your service business. Custom solutions from Sydney to Brisbane.
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Launch & Support */}
                    <div style={{
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                      {/* Circle Icon */}
                      <div style={{
                        position: 'absolute',
                        left: '-120px',
                        top: '10px',
                        width: '70px',
                        height: '70px',
                        background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(255,193,7,0.3)',
                        zIndex: 3
                      }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                        </svg>
                      </div>

                      {/* Step Number & Title */}
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                        borderRadius: '16px',
                        padding: '25px 30px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(15px)'
                      }}>
                        <h3 style={{
                          fontSize: '24px',
                          fontWeight: '700',
                          color: '#FFC107',
                          marginBottom: '15px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}>
                          <span style={{
                            background: '#FFC107',
                            color: '#1a1a1a',
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: '800'
                          }}>
                            3
                          </span>
                          Launch & Support
                        </h3>
                        <p style={{
                          fontSize: '16px',
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: '1.6',
                          margin: '0'
                        }}>
                          Launch your transformed digital presence with ongoing support to ensure 25% growth and 20% cost savings. Our team provides continuous optimization.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
             <Testimonial />
             <CTA
              title="Ready to Transform Your Business?"
              subtitle="Join forward-thinking business owners who have eliminated chaos and achieved scalable growth with our proven digital marketing strategies, CRM optimization, and business automation solutions."
              buttonText="Start Your Digital Transformation"
            />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
    </>
  );
};

export default DigitalMarketingStrategy;
