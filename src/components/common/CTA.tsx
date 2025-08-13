"use client";
import React from "react";
import Link from "next/link";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CTA: React.FC<CTAProps> = ({
  title = "Ready to Grow Your Service Business?",
  subtitle = "Join service-based businesses across Australia who have eliminated chaos with our GoHighLevel CRM solutions. Book your free demo today!",
  buttonText = "Book My Free Demo",
  buttonLink = "/contact",
  className = "",
}) => {
  return (
    <section className={`cs_cta_section ${className}`} style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div className="cs_cta_wrapper">
          <div className="cs_cta_content" style={{ textAlign: 'center' }}>
            <h2 className="cs_cta_title" style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '800',
              lineHeight: '1.2',
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: 'inherit'
            }}>{title}</h2>
            <p className="cs_cta_subtitle" style={{
              fontSize: '18px',
              color: '#cccccc',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px auto',
              fontFamily: 'inherit'
            }}>{subtitle}</p>
            
            {/* Contact Form */}
            <div className="cs_cta_form" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: "18px 24px",
                    borderRadius: "12px",
                    border: "2px solid #444",
                    fontSize: "16px",
                    backgroundColor: "#2d2d2d",
                    color: "#ffffff",
                    outline: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FFC107";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 193, 7, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    padding: "18px 24px",
                    borderRadius: "12px",
                    border: "2px solid #444",
                    fontSize: "16px",
                    backgroundColor: "#2d2d2d",
                    color: "#ffffff",
                    outline: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FFC107";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 193, 7, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  style={{
                    padding: "18px 24px",
                    borderRadius: "12px",
                    border: "2px solid #444",
                    fontSize: "16px",
                    backgroundColor: "#2d2d2d",
                    color: "#ffffff",
                    outline: "none",
                    transition: "all 0.3s ease",
                    fontFamily: "inherit"
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#FFC107";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 193, 7, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#444";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "18px 30px",
                    borderRadius: "12px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #FFC107, #FFD54F)",
                    color: "#1a1a1a",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(255, 193, 7, 0.3)",
                    fontFamily: "inherit",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 193, 7, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 193, 7, 0.3)";
                  }}
                >
                  {buttonText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
