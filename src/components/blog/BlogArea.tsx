

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import blog_img_1 from "@/assets/img/blog (1).jpg";
import blog_img_2 from "@/assets/img/blog (2).jpg";
import blog_img_3 from "@/assets/img/blog (3).jpg";
import blog_img_4 from "@/assets/img/blog (4).jpg";
import blog_img_5 from "@/assets/img/blog (5).jpg";
import blog_img_6 from "@/assets/img/blog (6).jpg";
import blog_img_7 from "@/assets/img/blog (7).jpg";
import blog_img_8 from "@/assets/img/blog (8).jpg";
import blog_img_9 from "@/assets/img/blog (1).jpg"; // Reusing blog (1).jpg since (9).jpg doesn't exist
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
}

const blog_data: DataType[] = [
  {
    id: 1,
    img: blog_img_1,
    title: `What Is a CRM & Why Your Business Needs One`,
    des: `Learn how a CRM can organize your client interactions, automate follow‑ups, and boost repeat business with minimal effort.`,
  },
  {
    id: 2,
    img: blog_img_2,
    title: `Top 5 Email Marketing Strategies for 2025`,
    des: `Discover the newest tactics—from personalization to automation—that drive higher open rates, clicks, and customer loyalty.`,
  },
  {
    id: 3,
    img: blog_img_3,
    title: `Organic Social: Building Community Without Ads`,
    des: `See how authentic storytelling, consistent posting, and engagement hacks can grow your audience organically on Facebook & Instagram.`,
  },
  {
    id: 4,
    img: blog_img_4,
    title: `Maximizing Your Marketing Budget`,
    des: `A practical guide to prioritizing high‑ROI channels, eliminating waste, and tracking the metrics that matter most for small businesses.`,
  },
  {
    id: 5,
    img: blog_img_5,
    title: `Crafting a Winning Digital Strategy Roadmap`,
    des: `Step‑by‑step on how to audit your current efforts, set measurable goals, and build a bespoke plan that aligns with your growth targets.`,
  },
  {
    id: 6,
    img: blog_img_6,
    title: `Leveraging LinkedIn for B2B Lead Generation`,
    des: `Best practices for optimizing your profile, creating thought leadership content, and running targeted outreach to decision‑makers.`,
  },
  {
    id: 7,
    img: blog_img_7,
    title: `SEO Fundamentals for Small Business Websites`,
    des: `Understand on‑page, technical, and local SEO tactics that will help your site rank higher and attract more qualified traffic.`,
  },
  {
    id: 8,
    img: blog_img_8,
    title: `Designing High‑Converting Landing Pages`,
    des: `Key design and copywriting principles—headlines, CTAs, layouts—that turn visitors into leads and customers.`,
  },
  {
    id: 9,
    img: blog_img_9,
    title: `Case Study: How We Drove 3× ROI for a Local Handyman`,
    des: `An inside look at our Facebook ad funnel, review automation, and CRM setup that delivered three‑times return on ad spend.`,
  },
];



const BlogArea = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const blogItemsRef = useRef<HTMLDivElement[]>([]);

  // Store blog items in ref array
  const addToBlogItems = (el: HTMLDivElement) => {
    if (el && !blogItemsRef.current.includes(el)) {
      blogItemsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Stagger animation for blog items
      blogItemsRef.current.forEach((item: any, i: any) => {
        const delay = i * 0.15;

        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        });

        // Hover animations
        const blogLink = item.querySelector(".cs_blog");
        if (!blogLink) return;

        blogLink.addEventListener("mouseenter", () => {
          gsap.to(blogLink.querySelector("img"), {
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(blogLink.querySelector(".cs_blog_info"), {
            y: -10,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        blogLink.addEventListener("mouseleave", () => {
          gsap.to(blogLink.querySelector("img"), {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          gsap.to(blogLink.querySelector(".cs_blog_info"), {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <div ref={sectionRef} style={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      minHeight: '100vh',
      paddingBottom: '80px'
    }}>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
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
                    ref={headingRef}
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
                    New Day New Inspiration
                  </h2>
                  <p style={{
                    fontSize: '18px',
                    color: '#cccccc',
                    lineHeight: '1.6',
                    margin: '0',
                    maxWidth: '600px',
                    fontFamily: 'inherit'
                  }}>
                    Explore our latest articles, insights, and expert tips to help your business grow and thrive in today's digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            alignItems: 'start'
          }}>
            {blog_data.map((item, i) => (
              <div
                ref={addToBlogItems}
                key={i}
                style={{ marginBottom: '0' }}
              >
                <div className="anim_div_ShowDowns">
                  <Link href="" className="cs_blog cs_style_1" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#2d2d2d',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,193,7,0.1)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    height: '100%',
                    minHeight: '500px'
                  }}>
                    <div style={{ 
                      position: 'relative', 
                      overflow: 'hidden',
                      height: '250px'
                    }}>
                      <Image 
                        src={item.img} 
                        alt={`blog-${item.id}`} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
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
                    </div>
                    <div className="cs_blog_info" style={{
                      padding: '30px 25px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '15px',
                      flexGrow: 1,
                      justifyContent: 'space-between'
                    }}>
                      {/* Meta Information */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
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
                      
                      <h6 className="cs_blog_title" style={{
                        fontSize: 'clamp(18px, 2.5vw, 22px)',
                        lineHeight: '1.3',
                        fontWeight: '700',
                        color: '#ffffff',
                        margin: '0',
                        fontFamily: 'inherit'
                      }}>{item.title}</h6>
                      <p className="cs_blog_subtitle" style={{
                        color: '#cccccc',
                        lineHeight: '1.6',
                        fontSize: '15px',
                        margin: '0',
                        fontWeight: '400',
                        fontFamily: 'inherit'
                      }}>{item.des}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Styling */}
      <style jsx>{`
        .cs_blog:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4) !important;
          border-color: rgba(255,193,7,0.3) !important;
        }

        .cs_blog:hover img {
          transform: scale(1.05) !important;
        }

        .cs_blog:hover .cs_blog_info {
          transform: translateY(-5px) !important;
        }

        .cs_blog:hover span:last-child {
          color: #FFD54F !important;
          transform: translateX(3px) !important;
        }

        .cs_blog:hover span:last-child svg {
          transform: translateX(2px) !important;
        }

        .cs_hero_btn:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 30px rgba(255,193,7,0.4) !important;
        }

        /* Grid responsive behavior */
        @media (max-width: 1200px) {
          .row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .cs_blog {
            min-height: 450px !important;
          }
        }

        @media (max-width: 480px) {
          .cs_blog {
            min-height: 400px !important;
          }
        }

        /* Ensure equal heights for all blog cards */
        .cs_blog {
          height: 100% !important;
        }

        /* Handle last row alignment */
        .row > div:nth-last-child(-n+3) {
          margin-bottom: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default BlogArea;