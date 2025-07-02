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
  title = "Ready to Transform Your Business?",
  subtitle = "Get started with a free marketing audit and discover how we can help you attract more clients and grow your revenue.",
  buttonText = "Get Your Free Audit",
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
            <div className="cs_cta_buttons">
              <Link href={buttonLink} className="cs_btn cs_style_1 cs_color_1">
                <span>{buttonText}</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link href="/contact" className="cs_btn cs_style_2 cs_color_2">
                <span>Book a Call</span>
                <svg
                  width="19"
                  height="13"
                  viewBox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
