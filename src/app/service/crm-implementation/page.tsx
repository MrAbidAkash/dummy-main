"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";
import FaqArea from "@/components/faq/FaqArea";

const CRMImplementation = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <section style={{
              minHeight: '100vh',
              background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(45,45,45,0.8) 100%), url("/assets/img/blog (3).jpg")',
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
                  <h1
                    style={{
                      fontSize: "clamp(28px, 4.5vw, 48px)",
                      fontWeight: "800",
                      lineHeight: "1.1",
                      marginBottom: "30px",
                      color: "#FFC107"
                      
                    }}
                  >
                    Streamline Your Service Business in Australia
                  </h1>

                  {/* Subtitle */}
                  <p
                    style={{
                      fontSize: "clamp(13px, 1.6vw, 16px)",
                      lineHeight: "1.6",
                      color: "#ffffff",
                      marginBottom: "50px",
                      maxWidth: "800px",
                      margin: "0 auto 50px"
                    }}
                  >
                    The #1 marketing platform for trades, allied health professionals, and service businesses
                    across Australia—from Sydney to Melbourne and Brisbane.
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
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "18px",
                        fontWeight: "700",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        transition: "all 0.3s ease",
                        boxShadow: "0 8px 30px rgba(255, 193, 7, 0.3)",
                        border: "none"
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

            {/* CRM Benefits Section */}
            <section className="cs_about_section" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    color: "#FFC107",
                    marginBottom: '20px'
                  }}>
                    Capture, Convert, & Close with GoHighLevel CRM
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#ffffff',
                    maxWidth: '800px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Our CRM platform helps Australian service businesses generate leads, nurture customers,
                    and optimize conversions with data-driven insights. Track leads from web, social, and calls
                    in one place to drive 25% revenue growth.
                  </p>
                </div>

                {/* Three Column Benefits - Moved above video */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px',
                  marginBottom: '80px'
                }}>
                  <div className="benefit-card" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                  }}>
                    {/* Subtle corner accent */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
                      borderRadius: '0 16px 0 60px'
                    }}></div>
                    
                    {/* Number indicator */}
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ffd700',
                      fontFamily: 'monospace'
                    }}>
                      01
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px',
                      lineHeight: '1.3',
                      letterSpacing: '-0.3px'
                    }}>
                      Do You Want More Customers?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: '0.85',
                      margin: '0'
                    }}>
                      Lead generation, targeted campaigns, and customer engagement
                      tools tailored for tradies in Bondi or clinicians in St Kilda.
                    </p>
                    
                    {/* Subtle left border accent */}
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '40%',
                      width: '3px',
                      height: '20%',
                      background: 'linear-gradient(180deg, #ffd700 0%, rgba(255, 215, 0, 0.3) 100%)',
                      borderRadius: '0 3px 3px 0',
                      transition: 'height 0.3s ease'
                    }}></div>
                  </div>

                  <div className="benefit-card" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                  }}>
                    {/* Subtle corner accent */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
                      borderRadius: '0 16px 0 60px'
                    }}></div>
                    
                    {/* Number indicator */}
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ffd700',
                      fontFamily: 'monospace'
                    }}>
                      02
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px',
                      lineHeight: '1.3',
                      letterSpacing: '-0.3px'
                    }}>
                      Do You Want to Keep Your Clients Longer?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: '0.85',
                      margin: '0'
                    }}>
                      Personalized communication, satisfaction monitoring,
                      and proactive support with WebChat widgets and email automation for Australian businesses.
                    </p>
                    
                    {/* Subtle left border accent */}
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '40%',
                      width: '3px',
                      height: '20%',
                      background: 'linear-gradient(180deg, #ffd700 0%, rgba(255, 215, 0, 0.3) 100%)',
                      borderRadius: '0 3px 3px 0',
                      transition: 'height 0.3s ease'
                    }}></div>
                  </div>

                  <div className="benefit-card" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.08)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    textAlign: 'left',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                  }}>
                    {/* Subtle corner accent */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
                      borderRadius: '0 16px 0 60px'
                    }}></div>
                    
                    {/* Number indicator */}
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 215, 0, 0.1)',
                      border: '1px solid rgba(255, 215, 0, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#ffd700',
                      fontFamily: 'monospace'
                    }}>
                      03
                    </div>
                    
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px',
                      lineHeight: '1.3',
                      letterSpacing: '-0.3px'
                    }}>
                      Do You Want to Scale Your Business?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.7',
                      opacity: '0.85',
                      margin: '0'
                    }}>
                      Business intelligence, invoice processing, and appointment booking
                      integrations to scale without chaos in Melbourne, Brisbane, or Sydney.
                    </p>
                    
                    {/* Subtle left border accent */}
                    <div style={{
                      position: 'absolute',
                      left: '0',
                      top: '40%',
                      width: '3px',
                      height: '20%',
                      background: 'linear-gradient(180deg, #ffd700 0%, rgba(255, 215, 0, 0.3) 100%)',
                      borderRadius: '0 3px 3px 0',
                      transition: 'height 0.3s ease'
                    }}></div>
                  </div>
                </div>

                {/* Video Placeholder */}
                <div style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                  padding: '40px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  textAlign: 'center',
                  marginBottom: '80px',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '2px dashed rgba(255,193,7,0.3)',
                    borderRadius: '12px',
                    padding: '60px 20px',
                    minHeight: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="#1a1a1a">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 style={{ 
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '18px', 
                      fontWeight: '600' 
                    }}>
                      AI Calling Animation for Australian CRM
                    </h3>
                    <p style={{ color: '#ffffff', fontSize: '14px' }}>
                      Video demonstration coming soon
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack Consolidation Section */}
            <section className="cs_about_section" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '80px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '40px'
                  }}>
                    Consolidate Your Tech Stack in One System
                  </h2>
                </div>

                {/* Vertical Timeline Layout */}
                <div style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  position: 'relative'
                }}>
                  {/* Central timeline line */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(180deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0.1) 50%, rgba(255, 215, 0, 0.3) 100%)',
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }}></div>

                  {/* Timeline Item 1 - Left */}
                  <div className="timeline-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '40px',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '45%',
                      textAlign: 'right',
                      paddingRight: '40px'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(255, 215, 0, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}>
                        {/* Arrow pointing to center */}
                        <div style={{
                          position: 'absolute',
                          right: '-12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '0',
                          height: '0',
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '12px solid rgba(255, 215, 0, 0.1)'
                        }}></div>
                        
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '15px'
                        }}>
                          Automation Tools
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.85',
                          margin: '0'
                        }}>
                          Automate repetitive tasks to save 10–15 hours weekly and
                          minimize errors for service businesses in Australia.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center node */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)',
                      border: '3px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '50%',
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        background: '#ffd700',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    
                    <div style={{ width: '45%' }}></div>
                  </div>

                  {/* Timeline Item 2 - Right */}
                  <div className="timeline-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '40px',
                    position: 'relative'
                  }}>
                    <div style={{ width: '45%' }}></div>
                    
                    {/* Center node */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)',
                      border: '3px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '50%',
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        background: '#ffd700',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    
                    <div style={{
                      width: '45%',
                      textAlign: 'left',
                      paddingLeft: '40px'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(255, 215, 0, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}>
                        {/* Arrow pointing to center */}
                        <div style={{
                          position: 'absolute',
                          left: '-12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '0',
                          height: '0',
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderRight: '12px solid rgba(255, 215, 0, 0.1)'
                        }}></div>
                        
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '15px'
                        }}>
                          Streamlining Tools
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.85',
                          margin: '0'
                        }}>
                          Centralize data for quick decision-making and
                          secure information transfer, optimized for tradies and allied health.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item 3 - Left */}
                  <div className="timeline-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '45%',
                      textAlign: 'right',
                      paddingRight: '40px'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(255, 215, 0, 0.1)',
                        borderRadius: '12px',
                        padding: '30px',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}>
                        {/* Arrow pointing to center */}
                        <div style={{
                          position: 'absolute',
                          right: '-12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '0',
                          height: '0',
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '12px solid rgba(255, 215, 0, 0.1)'
                        }}></div>
                        
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          marginBottom: '15px'
                        }}>
                          Customization Tools
                        </h3>
                        <p style={{
                          fontSize: '15px',
                          color: '#ffffff',
                          lineHeight: '1.6',
                          opacity: '0.85',
                          margin: '0'
                        }}>
                          Brand your CRM and build workflows tailored
                          to Australian service industries, from Sydney to Brisbane.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center node */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 215, 0, 0.1) 100%)',
                      border: '3px solid rgba(255, 215, 0, 0.3)',
                      borderRadius: '50%',
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        background: '#ffd700',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    
                    <div style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <FaqArea />

            {/* Final CTA Section */}
            <CTA
              title="Ready to Transform Your Business?"
              subtitle="Join forward-thinking business owners who have eliminated chaos and achieved scalable growth with our proven digital marketing strategies, CRM optimization, and business automation solutions."
              buttonText="Start Your Digital Transformation"
            />
          </main>
          <FooterOne />
        </div>
      </div>

      {/* Enhanced styles for benefit cards and timeline */}
      <style jsx>{`
        .benefit-card:hover {
          transform: translateY(-4px) !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%) !important;
          border-color: rgba(255, 215, 0, 0.12) !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2) !important;
        }
        
        .benefit-card:hover > div:nth-child(2) {
          background: rgba(255, 215, 0, 0.15) !important;
          border-color: rgba(255, 215, 0, 0.25) !important;
        }
        
        .benefit-card:hover > div:last-child {
          height: 40% !important;
        }
        
        .timeline-item:hover > div:nth-child(1) > div,
        .timeline-item:hover > div:nth-child(3) > div {
          transform: scale(1.02) !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%) !important;
          border-color: rgba(255, 215, 0, 0.15) !important;
        }
        
        @media (max-width: 768px) {
          .benefit-card {
            padding: 30px 20px !important;
          }
          
          .benefit-card h3 {
            font-size: 20px !important;
          }
          
          .benefit-card p {
            font-size: 14px !important;
          }
          
          .benefit-card > div:nth-child(2) {
            width: 28px !important;
            height: 28px !important;
            font-size: 12px !important;
          }
          
          .timeline-item {
            flex-direction: column !important;
            margin-bottom: 40px !important;
          }
          
          .timeline-item > div:nth-child(1),
          .timeline-item > div:nth-child(3) {
            width: 100% !important;
            text-align: center !important;
            padding: 0 !important;
            margin-bottom: 20px !important;
          }
          
          .timeline-item > div:nth-child(1) > div::after,
          .timeline-item > div:nth-child(3) > div::after {
            display: none !important;
          }
          
          .timeline-item > div:nth-child(2) {
            margin-bottom: 20px !important;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default CRMImplementation;
