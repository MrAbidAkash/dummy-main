"use client";

import React, { useEffect } from "react";
import "./scroll-slides.css";

const ScrollSlidesPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      sections.forEach((sec, i) => {
        const offset = scrollPos - sec.offsetTop;
        const content = sec.querySelector(".content") as HTMLElement;
        
        if (content) {
          if (offset >= 0 && offset < window.innerHeight) {
            // Parallax effect for visible content
            content.style.transform = `translateY(${offset * -0.2}px)`;
          } else if (offset >= window.innerHeight) {
            // Hide content that's scrolled past
            content.style.transform = `translateY(${-window.innerHeight * 0.2}px)`;
          } else {
            // Reset content that hasn't been reached yet
            content.style.transform = `translateY(0px)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-slides-container">
      {/* Fixed background */}
      <div className="background"></div>

      {/* Slide 1 */}
      <section className="slide-section">
        <div className="content">
          <h1>Welcome to Our Journey</h1>
          <p>
            Experience the power of fixed background scrolling with smooth content transitions.
            Each slide tells a unique story while maintaining a consistent visual foundation.
          </p>
        </div>
      </section>

      {/* Slide 2 */}
      <section className="slide-section">
        <div className="content">
          <h1>Innovation in Motion</h1>
          <p>
            Our cutting-edge solutions combine aesthetic appeal with functional design.
            Watch as content seamlessly flows over our beautiful background landscape.
          </p>
        </div>
      </section>

      {/* Slide 3 */}
      <section className="slide-section">
        <div className="content">
          <h1>Digital Excellence</h1>
          <p>
            Transform your digital presence with our comprehensive suite of services.
            From concept to execution, we deliver results that exceed expectations.
          </p>
        </div>
      </section>

      {/* Slide 4 */}
      <section className="slide-section">
        <div className="content">
          <h1>Future-Ready Solutions</h1>
          <p>
            Stay ahead of the curve with our forward-thinking approach to technology.
            Built for today, designed for tomorrow's challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Slide 5 */}
      <section className="slide-section">
        <div className="content">
          <h1>Let's Create Together</h1>
          <p>
            Ready to bring your vision to life? Join us on this exciting journey
            and discover what's possible when creativity meets technology.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default ScrollSlidesPage;
