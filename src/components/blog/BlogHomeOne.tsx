"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  id: number;
  img: string;
  title: string;
  des: string;
}

const blog_data: DataType[] = [
  {
    id: 1,
    img: "/assets/img/blog (7).jpg",
    title: `What Is a CRM & Why Your Business Needs One`,
    des: `Discover how a Customer Relationship Management system can streamline your workflows, automate follow‑ups, and keep your clients coming back for more.`,
  },
  {
    id: 2,
    img: "/assets/img/blog (2).jpg",
    title: `5 Email Marketing Tips to Boost Engagement`,
    des: `Learn proven best practices—from subject lines to segmentation—that drive opens, clicks, and conversions in your email campaigns.`,
  },
  {
    id: 3,
    img: "/assets/img/blog (3).jpg",
    title: `Building Community with Social Media`,
    des: `See how authentic content and two‑way engagement on platforms like Facebook and Instagram turn followers into loyal brand advocates.`,
  },
  {
    id: 4,
    img: "/assets/img/blog (4).jpg",
    title: `Top Digital Marketing Strategies for 2025`,
    des: `Stay ahead of the curve with the latest tactics—from organic social to AI‑driven ads—that will define marketing success next year.`,
  },
  {
    id: 5,
    img: "/assets/img/blog (5).jpg",
    title: `Maximizing Your Marketing Budget`,
    des: `Get more bang for your buck with tips on prioritizing high‑ROI channels, cutting waste, and tracking the metrics that matter most.`,
  },
  {
    id: 6,
    img: "/assets/img/blog (6).jpg",
    title: `Leveraging Organic Social Growth`,
    des: `Unlock the power of community‑driven reach—learn content formats, posting cadences, and engagement hacks to grow without paid ads.`,
  },
];

const BlogHomeOne = ({ style_2, style_3 }: any) => {
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const postRefs = useRef<HTMLDivElement[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const subs = subtitleRef.current;
    const tit = titleRef.current;
    const btn = btnRef.current;
    const sl = sliderRef.current;

    if (!subs || !tit || !sl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: subs,
        start: "top 85%",
      },
    });

    tl
      // 1) Subtitle pop‑in
      .from(subs, {
        scale: 0.5,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.5)",
      })
      // 2) Title slides in from top
      .from(
        tit,
        { y: -50, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2",
      )
      // 3) Button slides in from left (if exists)
      .from(
        btn,
        { x: -80, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      )
      // 4) Slider container fades up
      .from(
        sl,
        { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4",
      );

    // 5) Stagger each post
    postRefs.current.forEach((post: any, i: any) => {
      if (!post) return;
      gsap.fromTo(
        post,
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: post,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  // Navigation functions
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    const totalSlides = Math.ceil(blog_data.length / 3);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(blog_data.length / 3);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Calculate visible items
  const getVisibleItems = () => {
    const itemsPerSlide = 3;
    const startIndex = currentSlide * itemsPerSlide;
    return blog_data.slice(startIndex, startIndex + itemsPerSlide);
  };

  const totalSlides = Math.ceil(blog_data.length / 3);

  return (
    <>
      <section>
        <div className="container">
          {style_3 ? (
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2
                  ref={subtitleRef}
                  className="cs_section_title anim_heading_title"
                >
                  Related News <br /> New Day New Inspiration
                </h2>
              </div>
            </div>
          ) : (
            <div className="cs_section_heading cs_style_1 cs_type_1" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              borderRadius: '20px',
              padding: '50px 40px',
              marginBottom: '50px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,193,7,0.2)'
            }}>
              <div className="cs_section_heading_text" style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '30px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                    borderRadius: '25px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: 'inherit'
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    Latest Insights & Updates
                  </div>
                  <h2
                    ref={titleRef}
                    className="cs_section_title anim_heading_title"
                    style={{
                      fontSize: 'clamp(32px, 5vw, 48px)',
                      fontWeight: '800',
                      lineHeight: '1.2',
                      color: '#ffffff',
                      fontFamily: 'inherit',
                      margin: '0'
                    }}
                  >
                    Insights That Drive Growth
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#cccccc',
                    lineHeight: '1.6',
                    margin: '0',
                    maxWidth: '600px',
                    fontFamily: 'inherit'
                  }}>
                    Stay ahead with expert insights, proven strategies, and industry trends that help your business thrive in today's competitive landscape.
                  </p>
                </div>
                
                {/* Enhanced Navigation with Search */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <button style={{
                      padding: '10px 20px',
                      borderRadius: '30px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                      color: '#1a1a1a',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit',
                      boxShadow: '0 4px 12px rgba(255,193,7,0.3)'
                    }}>
                      All Posts
                    </button>
                    <button style={{
                      padding: '10px 20px',
                      borderRadius: '30px',
                      border: '2px solid #444',
                      background: 'transparent',
                      color: '#cccccc',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}>
                      Marketing
                    </button>
                    <button style={{
                      padding: '10px 20px',
                      borderRadius: '30px',
                      border: '2px solid #444',
                      background: 'transparent',
                      color: '#cccccc',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}>
                      Business
                    </button>
                    <button style={{
                      padding: '10px 20px',
                      borderRadius: '30px',
                      border: '2px solid #444',
                      background: 'transparent',
                      color: '#cccccc',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: 'inherit'
                    }}>
                      Strategy
                    </button>
                  </div>
                  
                  {/* Search Input */}
                  <div style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <input 
                      type="text" 
                      placeholder="Search articles..."
                      style={{
                        padding: '10px 40px 10px 16px',
                        borderRadius: '25px',
                        border: '2px solid #444',
                        background: '#333',
                        fontSize: '14px',
                        width: '200px',
                        outline: 'none',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.3s ease',
                        color: '#fff'
                      }}
                    />
                    <svg 
                      style={{
                        position: 'absolute',
                        right: '12px',
                        width: '16px',
                        height: '16px',
                        color: '#cccccc'
                      }}
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    </svg>
                  </div>
                  
                  {/* View All Button */}
                  <Link
                    ref={btnRef as any}
                    href="/blog"
                    className="cs_btn cs_style_1"
                    style={{
                      padding: '12px 24px',
                      borderRadius: '30px',
                      background: '#FFC107',
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(255,193,7,0.3)',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span>View All</span>
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 19 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div
            ref={sliderRef as any}
            className="cs_height_100 cs_height_lg_60"
          ></div>
          
          {/* Slider Container with Navigation Buttons */}
          <div className="slider-container" style={{ position: 'relative' }}>
            
            {/* Previous Button */}
            <button 
              className="slider-nav prev-btn"
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(255,193,7,0.3)',
                transition: 'all 0.3s ease',
                zIndex: 10,
                color: '#1a1a1a'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,193,7,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,193,7,0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            {/* Next Button */}
            <button 
              className="slider-nav next-btn"
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px rgba(255,193,7,0.3)',
                transition: 'all 0.3s ease',
                zIndex: 10,
                color: '#1a1a1a'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255,193,7,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,193,7,0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>

            {/* CSS Grid Layout with Auto-Slider */}
            <div className="blog-grid-container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '30px',
              padding: '0',
              width: '100%',
              alignItems: 'start',
              minHeight: '480px'
            }}>
              {getVisibleItems().map((item, i) => (
                <div
                  key={`${currentSlide}-${i}`}
                  ref={(el) => {
                    if (el) {
                      postRefs.current[i] = el;
                    }
                  }}
                  className="cs_post cs_style_1 slide-in-animation"
                  style={{ 
                    height: '480px',
                    display: 'flex', 
                    flexDirection: 'column',
                    background: '#2d2d2d',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,193,7,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    margin: '0',
                    width: '100%',
                    cursor: 'pointer',
                    opacity: '0',
                    transform: 'translateY(20px)',
                    animationDelay: `${i * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                {/* Image Section with Overlay */}
                <div style={{
                  height: '240px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '0'
                }}>
                  <Link href="/blog-details" className="cs_post_thumb" style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    display: 'block',
                    zIndex: '2'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.4) 100%)',
                      opacity: '0',
                      transition: 'opacity 0.3s ease',
                      zIndex: '3'
                    }} className="hover-overlay"></div>
                    <Image 
                      src={item.img} 
                      alt="image-here" 
                      width={400} 
                      height={240}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </Link>
                  
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'linear-gradient(135deg, #FFC107, #FFD54F)',
                    color: '#1a1a1a',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    zIndex: '4',
                    fontFamily: 'inherit',
                    boxShadow: '0 4px 12px rgba(255,193,7,0.3)'
                  }}>
                    {i % 3 === 0 ? 'Marketing' : i % 3 === 1 ? 'Business' : 'Strategy'}
                  </div>
                  
                  {/* Reading Time Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(45,45,45,0.95)',
                    color: '#cccccc',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '11px',
                    fontWeight: '600',
                    zIndex: '4',
                    fontFamily: 'inherit',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,193,7,0.2)'
                  }}>
                    {2 + i} min read
                  </div>
                </div>

                {/* Content Section */}
                <div 
                  className="cs_post_info"
                  style={{ 
                    height: '240px',
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    position: 'relative',
                    zIndex: '2'
                  }}
                >
                  <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                    {/* Meta Information */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      color: '#aaa',
                      fontFamily: 'inherit'
                    }}>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                        </svg>
                        Jan {15 + i}, 2025
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        Admin
                      </span>
                    </div>
                    
                    <h2 className="cs_post_title" style={{
                      fontSize: 'clamp(18px, 2.5vw, 20px)',
                      lineHeight: '1.4',
                      marginBottom: '12px',
                      fontWeight: '700',
                      color: '#ffffff',
                      height: '56px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '2',
                      WebkitBoxOrient: 'vertical',
                      letterSpacing: '-0.3px',
                      fontFamily: 'inherit'
                    }}>
                      <Link href="/blog-details" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'color 0.3s ease'
                      }}>{item.title}</Link>
                    </h2>
                    
                    <p className="cs_m0" style={{
                      color: '#cccccc',
                      lineHeight: '1.6',
                      fontSize: 'clamp(14px, 1.5vw, 15px)',
                      height: '72px',
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                      marginBottom: '20px',
                      fontWeight: '400',
                      fontFamily: 'inherit'
                    }}>{item.des}</p>
                  </div>
                  
                  {/* Read More Section */}
                  <div style={{ 
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <Link href="/blog-details" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#FFC107',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '700',
                      transition: 'all 0.3s ease',
                      gap: '8px',
                      letterSpacing: '0.3px',
                      fontFamily: 'inherit'
                    }} className="read-more-btn">
                      Read More
                      <svg width="14" height="10" viewBox="0 0 19 13" fill="none">
                        <path
                          d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          </div> {/* End slider-container */}
          
          {/* Interactive Pagination and Controls */}
          <div className="pagination-controls" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            marginTop: '50px',
            flexWrap: 'wrap'
          }}>
            
            {/* Pagination Dots */}
            <div className="custom-pagination" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px'
            }}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <div 
                  key={index}
                  className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: index === currentSlide ? '12px' : '8px',
                    height: index === currentSlide ? '12px' : '8px',
                    borderRadius: '50%',
                    background: index === currentSlide 
                      ? 'linear-gradient(135deg, #FFC107, #FFD54F)' 
                      : 'rgba(255,193,7,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: index === currentSlide 
                      ? '0 4px 12px rgba(255,193,7,0.4)' 
                      : 'none',
                    transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Blog Styling with Slider Navigation */}
      <style jsx>{`
        /* CSS Grid Layout Styles */
        .blog-grid-container {
          display: grid !important;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important;
          gap: 30px !important;
          width: 100% !important;
          align-items: start !important;
        }
        
        /* Slider Container */
        .slider-container {
          position: relative !important;
          overflow: hidden !important;
        }
        
        /* Slide-in animation for new cards */
        .slide-in-animation {
          animation: slideIn 0.6s ease-out forwards !important;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Navigation Buttons */
        .slider-nav {
          position: absolute !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 50px !important;
          height: 50px !important;
          background: linear-gradient(135deg, #FECA15, #FFD700) !important;
          border: none !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow: 0 8px 20px rgba(254,202,21,0.3) !important;
          transition: all 0.3s ease !important;
          z-index: 10 !important;
          color: #1a1a1a !important;
        }
        
        .prev-btn {
          left: -60px !important;
        }
        
        .next-btn {
          right: -60px !important;
        }
        
        .slider-nav:hover {
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: 0 12px 30px rgba(254,202,21,0.4) !important;
        }
        
        .slider-nav:active {
          transform: translateY(-50%) scale(0.95) !important;
        }
        
        /* Responsive Navigation Buttons */
        @media (max-width: 1400px) {
          .prev-btn {
            left: -50px !important;
          }
          .next-btn {
            right: -50px !important;
          }
        }
        
        @media (max-width: 1200px) {
          .prev-btn {
            left: 10px !important;
            top: -70px !important;
            transform: translateY(0) !important;
          }
          .next-btn {
            right: 10px !important;
            top: -70px !important;
            transform: translateY(0) !important;
          }
          .slider-nav:hover {
            transform: scale(1.1) !important;
          }
        }
        
        @media (max-width: 768px) {
          .slider-nav {
            width: 40px !important;
            height: 40px !important;
          }
          .prev-btn {
            left: 5px !important;
            top: -60px !important;
          }
          .next-btn {
            right: 5px !important;
            top: -60px !important;
          }
        }
        
        /* Force equal heights and stable layout */
        .cs_post {
          width: 100% !important;
          box-sizing: border-box !important;
          transform: none !important;
          margin: 0 !important;
          position: relative !important;
        }
        
        /* Subtle hover effects without lifting */
        .cs_post:hover {
          box-shadow: 0 12px 35px rgba(0,0,0,0.12) !important;
          border-color: rgba(254,202,21,0.3) !important;
          transform: none !important;
        }
        
        .cs_post:hover .hover-overlay {
          opacity: 1 !important;
        }
        
        .cs_post:hover img {
          transform: scale(1.02) !important;
        }
        
        .cs_post_title a:hover {
          color: #FECA15 !important;
        }
        
        .read-more-btn:hover {
          color: #FFD700 !important;
          transform: translateX(3px) !important;
        }
        
        .read-more-btn:hover svg {
          transform: translateX(2px) !important;
        }
        
        /* Enhanced Header Styling */
        .cs_section_heading input:focus {
          border-color: #FECA15 !important;
          box-shadow: 0 0 0 3px rgba(254,202,21,0.1) !important;
        }
        
        /* Category buttons enhanced hover */
        .cs_section_heading button:not(.active):hover {
          background: #f8f9fa !important;
          border-color: #FECA15 !important;
          color: #FECA15 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(254,202,21,0.2) !important;
        }
        
        /* View All button hover */
        .cs_btn:hover {
          background: #333 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
        }
        
        /* Custom pagination styling */
        .custom-pagination {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 12px !important;
          margin-top: 50px !important;
        }
        
        .pagination-dot {
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        
        .pagination-dot:hover {
          transform: scale(1.2) !important;
        }
        
        .pagination-dot.active {
          transform: scale(1.4) !important;
        }
        
        /* Pagination Controls Container */
        .pagination-controls {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 30px !important;
          margin-top: 50px !important;
          flex-wrap: wrap !important;
        }
        
        @media (max-width: 768px) {
          .pagination-controls {
            gap: 20px !important;
            margin-top: 40px !important;
          }
        }
        
        /* Typography and Layout Improvements */
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
        }
        
        /* Responsive Grid Layout */
        @media (max-width: 1200px) {
          .blog-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
          
          .cs_section_heading {
            flex-direction: column !important;
            gap: 24px !important;
            align-items: flex-start !important;
          }
        }
        
        @media (max-width: 768px) {
          .blog-grid-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .cs_post {
            height: 500px !important;
          }
          
          .cs_post_info {
            height: 280px !important;
            padding: 20px 18px 18px !important;
          }
          
          .cs_post_title {
            font-size: clamp(16px, 3vw, 19px) !important;
            height: 56px !important;
          }
          
          .cs_post_info p {
            height: 72px !important;
            -webkit-line-clamp: 3 !important;
          }
          
          /* Stack navigation on mobile */
          .cs_section_heading_right > div {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: stretch !important;
          }
          
          .cs_section_heading_right > div > div {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .cs_post {
            height: 480px !important;
          }
          
          .cs_post_info {
            height: 260px !important;
            padding: 18px 16px 16px !important;
          }
          
          .cs_post_title {
            font-size: clamp(15px, 4vw, 18px) !important;
            height: 50px !important;
          }
          
          .cs_post_info p {
            height: 60px !important;
            font-size: clamp(13px, 3vw, 14px) !important;
          }
          
          /* Single column on very small screens */
          .cs_section_heading_right > div > div {
            flex-direction: column !important;
            gap: 12px !important;
          }
          
          .cs_section_heading_right button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
};

export default BlogHomeOne;
