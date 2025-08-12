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
    <section className={`cs_cta_section ${className}`}>
      <div className="container">
        <div className="cs_cta_wrapper">
          <div className="cs_cta_content">
            <h2 className="cs_cta_title">{title}</h2>
            <p className="cs_cta_subtitle">{subtitle}</p>
            
            {/* Contact Form */}
            <div className="cs_cta_form" style={{ maxWidth: "500px", margin: "0 auto" }}>
              <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#333"
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  style={{
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#333"
                  }}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  style={{
                    padding: "15px 20px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#333"
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "15px 30px",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#4A90E2",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                    e.currentTarget.style.transform = "translateY(0)";
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
