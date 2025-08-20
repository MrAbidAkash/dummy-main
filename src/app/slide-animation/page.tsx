"use client";

import React, { useEffect, useRef, useState } from 'react';
import './slide-animation.css';

const SlideAnimationPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const textObserverRef = useRef<IntersectionObserver | null>(null);

  const slides = [
    {
      id: 'style-vrtSx',
      title: 'Manage clients and campaigns without the chaos',
      description: 'Track performance, assign tasks, and control access—all from one secure, centralized dashboard. Free your team from tool-hopping and give clients the clarity they expect.',
      buttonText: 'Streamline Your Workflows',
      buttonLink: '/solutions/save-time',
      image: 'https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2Ffsj6HhHM3XwTWlCZJh5kA%2Fd4a30ccb4599703ef163c365e406fa42%2FDigital-Marketing-Client-Reporting-Software.png&w=3840&q=75'
    },
    {
      id: 'style-MYtql',
      title: 'Control access with confidence',
      description: 'Easily manage who can view or edit dashboards and reports. Protect client data while giving your team the access they need to move faster.',
      buttonText: 'Control Access',
      buttonLink: '/feature/agency-tools',
      image: 'https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F2BunMziDp7qKya1eT1WPGr%2F90604e44181d599c451ffce7a15aabc9%2FManage-Marketing-Agency-Client-Staff-Users.png&w=3840&q=75'
    },
    {
      id: 'style-rdyfC',
      title: 'Onboard clients faster with templates',
      description: 'Skip the manual setup with prebuilt reports and dashboards for SEO, PPC, ecommerce, and more. Customize every detail to match your brand and meet client expectations.',
      buttonText: 'Pick Your Template',
      buttonLink: '/templates',
      image: 'https://agencyanalytics.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fdfcvkz6j859j%2F4f2jzI5XKQeqOSHQKtt4JF%2Fcec1c6a3d1b469cb0474331c6a0de85b%2FWhitel-Label-Monthly-Client-Report-Illustration.png&w=3840&q=75'
    }
  ];

  useEffect(() => {
    // Observer for slide changes
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideIndex = parseInt(entry.target.getAttribute('data-slide') || '0');
            setActiveSlide(slideIndex);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observer for text animations
    textObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Optional: remove class when out of view for re-animation
            // entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20% 0px'
      }
    );

    // Use timeout to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const textSections = document.querySelectorAll('.text-section');
      textSections.forEach((section) => {
        observerRef.current?.observe(section);
        textObserverRef.current?.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
      textObserverRef.current?.disconnect();
    };
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="slide-animation-container">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'linear-gradient(90deg, var(--blue), var(--blue-400))',
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />
      
      {/* Slide Indicators */}
      <div 
        className="slide-indicators"
        style={{
          position: 'fixed',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: activeSlide === index ? 'var(--blue)' : 'rgba(0, 114, 238, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '2px solid white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            onClick={() => {
              const element = document.querySelector(`[data-slide="${index}"]`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ))}
      </div>
      
      <div className="container-on3">
        <div className="Sti-f9x">
          <div className="Sti-zr4">
            <div className="image-lcd">
              <div className="image-3ox style-hghs3" id="style-hghs3">
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    id={slide.id} 
                    className={`slide-image ${slide.id} ${activeSlide === index ? 'active' : ''}`}
                  >
                    <div className="image-7sf Sti-fmq style-oyznm" id="style-oyznm">
                      <img 
                        width="1117" 
                        height="1034" 
                        style={{color: 'transparent'}} 
                        src={slide.image}
                        alt={slide.title}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-pqh">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className="text-section"
                data-slide={index}
                id={`style-ltQFs-${index}`}
              >
                <div id={`style-KNHyw-${index}`} className="style-KNHyw">
                  <div className="Sta-s1c fa-s1t column-ba2">
                    <div className="Sta-s1c fa-fga column-ba2">
                      <h3 className="text-roj fa-mei Text_font-size-xl-hbg slide-title">
                        <span>{slide.title}</span>
                      </h3>
                    </div>
                    <div className="Pro-ch2">
                      <div className="text-roj fa-vln slide-description">
                        <p>{slide.description}</p>
                      </div>
                    </div>
                    <div className="button-nv5">
                      <a 
                        className="button-r6f But-imx But-h8s fa-fbq But-zv3 ani-tym slide-xsi animate-state-n5e icon-zer"
                        href={slide.buttonLink}
                      >
                        <span className="text-n2h">{slide.buttonText}</span>
                        <span className="icon-smh icon-qeh But-imx">
                          <svg 
                            aria-hidden="true" 
                            focusable="false" 
                            data-prefix="far" 
                            data-icon="chevron-right" 
                            className="svg-inline--fa fa-chevron-right" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 320 512" 
                            color="var(--white)"
                          >
                            <path 
                              fill="currentColor" 
                              d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <img 
                      width="1117" 
                      height="1034" 
                      className="image-qm3" 
                      style={{color: 'transparent'}} 
                      src={slide.image}
                      alt={slide.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideAnimationPage;
