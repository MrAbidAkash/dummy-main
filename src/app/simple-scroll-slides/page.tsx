"use client";

import React, { useEffect } from "react";
import "./simple-scroll.css";

const SimpleScrollSlidesPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      sections.forEach((sec) => {
        const sectionElement = sec as HTMLElement;
        const offset = scrollPos - sectionElement.offsetTop;
        const content = sec.querySelector(".content") as HTMLElement;
        
        if (content && offset >= 0 && offset < window.innerHeight) {
          content.style.transform = `translateY(${offset * -0.2}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="simple-scroll-container">
      {/* Fixed background */}
      <div className="background"></div>

      <section>
        <div className="content">
          <h1>Slide 1 Content</h1>
          <p>This is the first slide with a fixed background. As you scroll, the content moves with a parallax effect while the background stays in place.</p>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Slide 2 Content</h1>
          <p>The second slide demonstrates the smooth scrolling transition. Each content box appears over the previous one as you scroll down.</p>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Slide 3 Content</h1>
          <p>This third slide showcases how multiple content sections can flow seamlessly over the same fixed background image or gradient.</p>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Slide 4 Content</h1>
          <p>The fourth slide continues the pattern, creating a captivating storytelling experience through visual scrolling.</p>
        </div>
      </section>

      <section>
        <div className="content">
          <h1>Slide 5 Content</h1>
          <p>The final slide completes our journey. This technique is perfect for portfolios, product showcases, or any narrative-driven content.</p>
        </div>
      </section>
    </div>
  );
};

export default SimpleScrollSlidesPage;
