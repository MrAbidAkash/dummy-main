"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";

const DigitalMarketingStrategy = () => {
  return (
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

                {/* Benefits Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px',
                  marginTop: '60px'
                }}>
                  {/* Benefit 1 */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '20px',
                    padding: '50px 35px',
                    border: '1px solid rgba(255,193,7,0.2)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Icon background */}
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(45deg, rgba(255,193,7,0.1) 0%, rgba(255,213,79,0.05) 100%)',
                      borderRadius: '50%',
                      opacity: 0.7
                    }}></div>
                    
                    {/* Icon */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 8px 25px rgba(255,193,7,0.3)'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px',
                      position: 'relative'
                    }}>
                      Save Time & Money
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: 0.9
                    }}>
                      Automate email marketing and lead tracking to save 10–15 hours weekly and cut costs by 20%.
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '20px',
                    padding: '50px 35px',
                    border: '1px solid rgba(255,193,7,0.2)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Icon background */}
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(45deg, rgba(255,193,7,0.1) 0%, rgba(255,213,79,0.05) 100%)',
                      borderRadius: '50%',
                      opacity: 0.7
                    }}></div>
                    
                    {/* Icon */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 8px 25px rgba(255,193,7,0.3)'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px',
                      position: 'relative'
                    }}>
                      Drive Growth
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: 0.9
                    }}>
                      SEO, Google ads, and Facebook ads boost visibility, leading to 25% revenue growth for your service business.
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '20px',
                    padding: '50px 35px',
                    border: '1px solid rgba(255,193,7,0.2)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Icon background */}
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '100px',
                      height: '100px',
                      background: 'linear-gradient(45deg, rgba(255,193,7,0.1) 0%, rgba(255,213,79,0.05) 100%)',
                      borderRadius: '50%',
                      opacity: 0.7
                    }}></div>
                    
                    {/* Icon */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '25px',
                      boxShadow: '0 8px 25px rgba(255,193,7,0.3)'
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    
                    <h3 style={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px',
                      position: 'relative'
                    }}>
                      Tailored for Australia
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: 0.9
                    }}>
                      Localized strategies for businesses in Sydney, Melbourne, Brisbane, and beyond, ensuring relevance and compliance.
                    </p>
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                  gap: '30px',
                  marginTop: '60px'
                }}>
                  {/* Starter Package */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '24px',
                    padding: '45px 35px',
                    border: '2px solid rgba(255,193,7,0.15)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Package badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      color: '#1a1a1a',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Popular
                    </div>
                    
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      Starter Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      marginBottom: '25px',
                      opacity: 0.9
                    }}>
                      Ideal for small businesses (1–5). Includes website build, basic SEO, email marketing setup, and GHL CRM integration for lead tracking.
                    </p>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px',
                      padding: '15px 20px',
                      background: 'rgba(255,193,7,0.1)',
                      borderRadius: '12px',
                      textAlign: 'center'
                    }}>
                      Save 10 hours/week and boost leads by 15%.
                    </div>
                  </div>

                  {/* Pro Package */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,193,7,0.08) 0%, rgba(255,213,79,0.03) 100%)',
                    borderRadius: '24px',
                    padding: '45px 35px',
                    border: '2px solid rgba(255,193,7,0.3)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 25px 50px rgba(255,193,7,0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    transform: 'scale(1.05)'
                  }}>
                    {/* Featured badge */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      color: '#1a1a1a',
                      padding: '12px 24px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: '0 8px 25px rgba(255,193,7,0.4)'
                    }}>
                      Most Popular
                    </div>
                    
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px',
                      marginTop: '15px'
                    }}>
                      Pro Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      marginBottom: '25px',
                      opacity: 0.95
                    }}>
                      For medium businesses (5–20). Adds Google and Facebook ads management, advanced email marketing, and complex automations with GHL CRM.
                    </p>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#1a1a1a',
                      marginBottom: '10px',
                      padding: '15px 20px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      boxShadow: '0 8px 25px rgba(255,193,7,0.3)'
                    }}>
                      Cut costs by 20% and increase conversions by 20%.
                    </div>
                  </div>

                  {/* Enterprise Package */}
                  <div style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
                    borderRadius: '24px',
                    padding: '45px 35px',
                    border: '2px solid rgba(255,193,7,0.15)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Package badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'linear-gradient(135deg, rgba(255,193,7,0.2) 0%, rgba(255,213,79,0.1) 100%)',
                      color: '#FFC107',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      border: '1px solid rgba(255,193,7,0.3)'
                    }}>
                      Premium
                    </div>
                    
                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      Enterprise Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      marginBottom: '25px',
                      opacity: 0.9
                    }}>
                      For large businesses (20+). Full custom website, SEO optimization, multi-channel ads (Google, Facebook), and advanced GHL CRM automations.
                    </p>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px',
                      padding: '15px 20px',
                      background: 'rgba(255,193,7,0.1)',
                      borderRadius: '12px',
                      textAlign: 'center'
                    }}>
                      Drive 25% revenue growth with tailored strategies.
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  marginTop: '50px',
                  padding: '40px 35px',
                  background: 'linear-gradient(145deg, rgba(255,193,7,0.1) 0%, rgba(255,213,79,0.05) 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,193,7,0.2)',
                  boxShadow: '0 15px 35px rgba(255,193,7,0.1)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 8px 25px rgba(255,193,7,0.3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a">
                      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.12 2 2.01 3.12 2.01 4.5L2 20.5C2 21.88 3.12 23 4.5 23h15c1.38 0 2.5-1.12 2.5-2.5V4.5C22 3.12 20.88 2 19.5 2zm0 18.5h-15V7h15v13.5z"/>
                    </svg>
                  </div>
                  <p style={{
                    fontSize: '20px',
                    color: '#ffffff',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    All packages include ongoing support to honor your business traditions while innovating for success.
                  </p>
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

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '40px',
                  marginTop: '60px'
                }}>
                  {/* Website Build */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      Website Build
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      High-converting websites tailored for tradies and allied health, optimized for mobile and SEO to attract local clients in Sydney or Melbourne.
                    </p>
                  </div>

                  {/* SEO */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      SEO
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Local SEO strategies to rank higher on Google for searches like 'tradies in Brisbane' or 'allied health in Perth', driving organic traffic.
                    </p>
                  </div>

                  {/* Email Marketing */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      Email Marketing
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Automated campaigns for follow-ups and rebookings, integrated with GHL CRM to nurture leads and boost retention by 20%.
                    </p>
                  </div>

                  {/* Google & Facebook Ads */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '20px'
                    }}>
                      Google & Facebook Ads
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Targeted ads to reach high-value clients, with GHL CRM tracking to optimize campaigns and increase ROI by 25%.
                    </p>
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

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '40px',
                  marginTop: '60px'
                }}>
                  {/* Step 1 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Step 1: Consultation
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Book a free demo to discuss your business needs, from website build to ads and automations.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Step 2: Customization
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      We tailor the package with SEO, email marketing, ads, and GHL CRM integrations for your service business.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Step 3: Launch & Support
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Launch your transformed digital presence with ongoing support to ensure 25% growth and 20% cost savings.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
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
                    Trusted by Service Businesses
                  </h2>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '40px',
                  marginTop: '60px'
                }}>
                  {/* Testimonial 1 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: '20px'
                    }}>
                      "Leads360's digital package transformed our plumbing business with a new website and ads. We saw 25% more bookings!"
                    </p>
                    <div style={{
                      fontSize: '14px',
                      color: '#FFC107',
                      fontWeight: '600'
                    }}>
                      — Julia Magesh
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      fontStyle: 'italic',
                      marginBottom: '20px'
                    }}>
                      "The SEO and email automation saved us hours and boosted rebookings. Highly recommend for allied health."
                    </p>
                    <div style={{
                      fontSize: '14px',
                      color: '#FFC107',
                      fontWeight: '600'
                    }}>
                      — Derek B
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '80px 0',
              textAlign: 'center'
            }}>
              <div className="container">
                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '700',
                  color: '#FFC107',
                  marginBottom: '20px'
                }}>
                  Ready to Transform Your Service Business?
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#ffffff',
                  maxWidth: '700px',
                  margin: '0 auto 40px',
                  lineHeight: '1.6'
                }}>
                  Start your digital transformation today with our comprehensive packages designed for Australian service businesses.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                    color: '#1a1a1a',
                    padding: '18px 36px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontSize: '18px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)'
                  }}
                >
                  Book Your Free Demo
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </Link>
              </div>
            </section>
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default DigitalMarketingStrategy;
