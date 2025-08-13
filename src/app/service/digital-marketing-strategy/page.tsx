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
                      Save Time & Money
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      Automate email marketing and lead tracking to save 10–15 hours weekly and cut costs by 20%.
                    </p>
                  </div>

                  {/* Benefit 2 */}
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
                      Drive Growth
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
                    }}>
                      SEO, Google ads, and Facebook ads boost visibility, leading to 25% revenue growth for your service business.
                    </p>
                  </div>

                  {/* Benefit 3 */}
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
                      Tailored for Australia
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6'
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
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '40px',
                  marginTop: '60px'
                }}>
                  {/* Starter Package */}
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
                      Starter Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      Ideal for small businesses (1–5). Includes website build, basic SEO, email marketing setup, and GHL CRM integration for lead tracking.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Save 10 hours/week and boost leads by 15%.
                    </div>
                  </div>

                  {/* Pro Package */}
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
                      Pro Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      For medium businesses (5–20). Adds Google and Facebook ads management, advanced email marketing, and complex automations with GHL CRM.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Cut costs by 20% and increase conversions by 20%.
                    </div>
                  </div>

                  {/* Enterprise Package */}
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
                      Enterprise Package
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: '1.6',
                      marginBottom: '20px'
                    }}>
                      For large businesses (20+). Full custom website, SEO optimization, multi-channel ads (Google, Facebook), and advanced GHL CRM automations.
                    </p>
                    <div style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFC107',
                      marginBottom: '10px'
                    }}>
                      Drive 25% revenue growth with tailored strategies.
                    </div>
                  </div>
                </div>

                <div style={{
                  textAlign: 'center',
                  marginTop: '40px',
                  padding: '30px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px'
                }}>
                  <p style={{
                    fontSize: '18px',
                    color: '#ffffff',
                    margin: '0'
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
