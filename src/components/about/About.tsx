'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface DataType {
  subtitle: string;
  title: string;
  des: string;
}

const about_content: DataType = {
  subtitle: `Our Agency Story`,
  title: `How Our Agency is Pushing the Boundaries of Online Marketing and Design`,
  des: `Digital agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising, we have the tools and expertise to elevate your online presence. Let us help you navigate the evolving world of digital to drive growth and reach your goals.`,
}

const About = () => {
  const { subtitle, title, des } = about_content;
  
  // Create refs for animation targets
  const sectionRef = useRef<any>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftDesignRef = useRef<any>(null);
  const rightDesignRef = useRef<any>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<any>(null);
  const img1Ref = useRef<any>(null);
  const img2Ref = useRef<any>(null);
  const img3Ref = useRef<any>(null);
  const img4Ref = useRef<any>(null);

  useEffect(() => {
    // Only run animations on the client
    if (typeof window !== 'undefined') {
      // Set initial positions for elements
      gsap.set([leftDesignRef.current, rightDesignRef.current], { scaleX: 0 });
      gsap.set([headingRef.current, titleRef.current, contentRef.current], { opacity: 0, y: 30 });
      gsap.set([img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current], { opacity: 0, y: 50 });

      // Create timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: 'play none none none'
        }
      });

      // Animation sequence
      tl
        // Heading animation
        .to(leftDesignRef.current, { scaleX: 1, duration: 1.2, ease: 'power3.out' }, 0)
        .to(rightDesignRef.current, { scaleX: 1, duration: 1.2, ease: 'power3.out' }, 0)
        .to(headingRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.3)
        
        // Title and content animation
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.8)
        .to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1)
        
        // Image animations
        .to(img1Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }, 1.2)
        .to(img2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }, 1.4)
        .to(img3Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }, 1.6)
        .to(img4Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }, 1.8);
    }
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div ref={leftDesignRef} className="cs_hr_design" style={{ transformOrigin: 'right center' }} />
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 ref={headingRef} className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div ref={rightDesignRef} className="cs_hr_design" style={{ transformOrigin: 'left center' }} />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 ref={titleRef} className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div ref={contentRef} className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">
                      {des}
                    </p>
                    <p className="cs_ternary_color">
                      {des}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div ref={img1Ref} className="cs_img_section_1">
              <Image 
                src="/assets/img/agency_story_1.jpg" 
                alt="Agency story" 
                width={500} 
                height={600} 
                className="w-100"
              />
            </div>
            <div ref={img2Ref} className="cs_img_section_2">
              <Image 
                src="/assets/img/agency_story_2.jpg" 
                alt="Agency story" 
                width={500} 
                height={400} 
                className="w-100"
              />
            </div>
            <div ref={img3Ref} className="cs_img_section_3">
              <div className="text-end">
                <Image 
                  ref={img4Ref}
                  src="/assets/img/agency_story_4.jpg" 
                  alt="Agency story" 
                  width={400} 
                  height={300} 
                />
                <Image 
                  src="/assets/img/agency_story_3.jpg" 
                  alt="Agency story" 
                  width={600} 
                  height={400} 
                  className="w-100 mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;