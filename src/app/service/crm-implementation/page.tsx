"use client";

import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CTA from "@/components/common/CTA";

const CRMImplementation = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <section
              className="cs_hero cs_style1 cs_center"
              style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "15vh",
                background: "linear-gradient(135deg, rgba(42, 42, 42, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%)",
                position: "relative",
                overflow: "hidden",
                padding: "60px 0"
              }}
            >
              {/* CRM Background Image */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: "url('/assets/img/blog (7).jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  zIndex: 0
                }}
              ></div>

              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(135deg, rgba(42, 42, 42, 0.85) 0%, rgba(26, 26, 26, 0.9) 100%)",
                  zIndex: 1
                }}
              ></div>

              {/* Geometric Background Pattern */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  opacity: 0.05,
                  background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20M10 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`,
                  zIndex: 2
                }}
              ></div>

              {/* Animated Lines */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath d='M0 300 Q250 200 500 300 T1000 300 L1000 0 L0 0 Z' fill='%23ffffff' opacity='0.02'/%3E%3Cpath d='M0 700 Q250 600 500 700 T1000 700 L1000 1000 L0 1000 Z' fill='%23ffffff' opacity='0.02'/%3E%3C/svg%3E")`,
                  backgroundSize: "100% 100%",
                  zIndex: 2
                }}
              ></div>

              <div className="container" style={{ position: "relative", zIndex: 10 }}>
                <div className="cs_hero_text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                  {/* Main Title */}
                  <h1
                    style={{
                      fontSize: "clamp(40px, 6vw, 72px)",
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
                      fontSize: "clamp(16px, 2vw, 20px)",
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

                {/* Three Column Benefits */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Do You Want More Customers?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Lead generation, targeted campaigns, and customer engagement
                      tools tailored for tradies in Bondi or clinicians in St Kilda.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Do You Want to Keep Your Clients Longer?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Personalized communication, satisfaction monitoring,
                      and proactive support with WebChat widgets and email automation for Australian businesses.
                    </p>
                  </div>

                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '40px 30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    textAlign: 'left'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Do You Want to Scale Your Business?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Business intelligence, invoice processing, and appointment booking
                      integrations to scale without chaos in Melbourne, Brisbane, or Sydney.
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
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
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

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '30px'
                }}>
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
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Automation Tools
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Automate repetitive tasks to save 10–15 hours weekly and
                      minimize errors for service businesses in Australia.
                    </p>
                  </div>

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
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Streamlining Tools
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Centralize data for quick decision-making and
                      secure information transfer, optimized for tradies and allied health.
                    </p>
                  </div>

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
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '20px'
                    }}>
                      Customization Tools
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Brand your CRM and build workflows tailored
                      to Australian service industries, from Sydney to Brisbane.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="cs_about_section" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '100px 0'
            }}>
              <div className="container">
                <div className="cs_section_heading cs_style_1" style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <h2 className="cs_section_title" style={{
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '40px'
                  }}>
                    Frequently Asked Questions
                  </h2>
                </div>

                <div style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px'
                }}>
                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '15px'
                    }}>
                      What's the best way to use CRM for tradies in Australia?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      Leads360's GHL CRM helps tradies track leads from calls and DMs, automate bookings, and
                      integrate with Xero for invoicing, saving 10–15 hours weekly in Sydney or Melbourne.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '15px'
                    }}>
                      How does CRM benefit allied health businesses?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      Our CRM automates patient follow-ups, review requests, and Cliniko integrations, boosting
                      rebookings by 20% for clinics across Australia.
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '15px'
                    }}>
                      Can automation scale my service business?
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      Yes, AI voice bots and chatbots handle inquiries 24/7, reducing costs by 20% and driving 25%
                      revenue growth for businesses in Brisbane or Perth.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA Section */}
            <section style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              padding: '80px 0',
              textAlign: 'center'
            }}>
              <div className="container">
                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #FFC107 0%, #FFD54F 50%, #FFC107 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '20px'
                }}>
                  Ready to Revolutionize Your Australian Service Business?
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: '#ffffff',
                  maxWidth: '700px',
                  margin: '0 auto 40px',
                  lineHeight: '1.6',
                  fontWeight: '500'
                }}>
                  Empower your business with Leads360's all-in-one GHL CRM platform. Streamline
                  operations in Sydney, Melbourne, or Brisbane—book your free demo today!
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
                  Book Your Free Demo Today
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

export default CRMImplementation;
