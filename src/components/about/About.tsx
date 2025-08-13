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
  description: string;
  mission_title: string;
  mission_content: string;
  founder_title: string;
  founder_content: string;
  founder_quote: string;
  team_title: string;
  trust_title: string;
  trust_points: Array<{
    title: string;
    description: string;
  }>;
  cta_title: string;
  cta_description: string;
}

const about_content: DataType = {
  subtitle: `About Leads360`,
  title: `Empowering Australian Businesses to Thrive`,
  description: `We help service-based businesses across Australia—tradies, allied health professionals, and beyond—stop chasing leads and start thriving with proactive marketing and custom GoHighLevel CRM solutions.`,
  mission_title: `Our Mission: Proactive Marketing for Growth`,
  mission_content: `At Leads360, we believe every service-based business in Australia deserves to thrive, not just survive. Our mission is to transform the way tradies, clinicians, and service enterprises operate by replacing lead-chasing chaos with proactive marketing systems. Using custom GoHighLevel CRM solutions, we help you save 10–15 hours weekly, cut costs by up to 20%, and drive 25% revenue growth through effective lead tracking.

We honor the traditions that make your business unique—whether it's a tradie's personal touch or a clinician's patient care—while embracing cutting-edge technology to keep you ahead in the digital race. From small startups to large enterprises, we're your partner in scaling smarter without losing what makes your business special.`,
  founder_title: `Meet Our Founder: A Visionary in Digital Transformation`,
  founder_content: `Our founder, [Your Name], brings a unique blend of expertise to Leads360. With a PhD in Molecular Genetics, experience as a fitness trainer, and a track record of building six businesses from scratch, [Your Name] understands the challenges of scaling a service-based business. As a digital transformation specialist, [Your Name] has helped countless Australian businesses—tradies, allied health professionals, and more—navigate the digital world with proactive marketing strategies.`,
  founder_quote: `"My vision is simple: help businesses thrive by focusing on proactive systems, not chasing leads. By combining tradition with innovation, we empower you to save time, make more money, and win the race in today's digital landscape."—[Your Name]`,
  team_title: `Our Team: Experts in CRM and Growth`,
  trust_title: `Why Trust Leads360?`,
  trust_points: [
    {
      title: "Proactive Marketing Experts",
      description: "We shift your focus from chasing leads to winning them with automated systems, saving 10–15 hours weekly and driving 25% revenue growth."
    },
    {
      title: "Tradition Meets Innovation", 
      description: "We honor your business's traditions—like personal customer service—while integrating AI and automation to keep you competitive."
    },
    {
      title: "Australian Business Partners",
      description: "Rooted in Australia, we understand tradies, clinicians, and service businesses, delivering solutions tailored to your unique needs."
    }
  ],
  cta_title: `Ready to Thrive with Proactive Marketing?`,
  cta_description: `Join service-based businesses across Australia who trust Leads360's GoHighLevel CRM to save time, cut costs, and scale smarter. Book your free demo today!`
}

const About = () => {
  const { 
    subtitle, 
    title, 
    description, 
    mission_title, 
    mission_content, 
    founder_title, 
    founder_content, 
    founder_quote, 
    team_title,
    trust_title,
    trust_points,
    cta_title,
    cta_description
  } = about_content;
  
  // Create refs for animation targets
  const sectionRef = useRef<any>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftDesignRef = useRef<any>(null);
  const rightDesignRef = useRef<any>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    // Only run animations on the client
    if (typeof window !== 'undefined') {
      // Set initial positions for elements that exist
      if (leftDesignRef.current && rightDesignRef.current) {
        gsap.set([leftDesignRef.current, rightDesignRef.current], { scaleX: 0 });
      }
      
      if (headingRef.current && titleRef.current && contentRef.current) {
        gsap.set([headingRef.current, titleRef.current, contentRef.current], { opacity: 0, y: 30 });
      }

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
        .to(contentRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1);
    }
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
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
            
            <div className="cs_height_60 cs_height_lg_40"></div>
            
            {/* Main hero content */}
            <div className="text-center">
              <h1 ref={titleRef} className="cs_section_title_2 cs_color_1 mb-4" style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>
                {title}
              </h1>
              <div ref={contentRef} className="row justify-content-center">
                <div className="col-lg-10">
                  <p className="cs_ternary_color mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    {description}
                  </p>
                  <div className="cs_btn_anim">
                    <a href="#contact" className="cs_btn cs_style_1 cs_btn_lg">
                      <span>Book a Free Demo</span>
                      <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="cs_height_150 cs_height_lg_80"></div>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="cs_section_title_2">{mission_title}</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="cs_ternary_color" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                {mission_content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4" style={{ textAlign: 'justify' }}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80"></div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="text-center mb-5">
              <h2 className="cs_section_title_2 cs_color_1">{founder_title}</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="text-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
                  <div className="cs_team_img_wrapper" style={{ maxWidth: '300px', margin: '0 auto' }}>
                    <Image 
                      src="/drive-download/Santy_Branding%20Photoshoot.jpg" 
                      alt="Leads360 Founder" 
                      width={300} 
                      height={400} 
                      className="w-100 rounded"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="cs_ternary_color mb-0" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Leads360 Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cs_ternary_color">
                  <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>{founder_content}</p>
                  <blockquote className="cs_blockquote">
                    <p className="fst-italic">{founder_quote}</p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="cs_height_150 cs_height_lg_80"></div>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="cs_section_title_2">{team_title}</h2>
          </div>
          
          <div className="team-grid">
            {/* Team Member 1 - Santy */}
            <div className="cs_team_card">
              <div className="cs_team_img_wrapper mb-4">
                <Image 
                  src="/drive-download/Santy_Branding_Pt2-2.jpg" 
                  alt="Team Member" 
                  width={300} 
                  height={300} 
                  className="w-100 rounded"
                />
              </div>
              <div className="text-center">
                <h5 className="cs_team_name mb-2" style={{ color: '#ffd700', fontWeight: '700' }}>Santy [Last Name]</h5>
                <p className="cs_team_designation cs_ternary_color mb-3" style={{ fontWeight: '600', color: '#ffffff' }}>CRM Specialist</p>
                <p className="cs_ternary_color small" style={{ lineHeight: '1.6' }}>
                  Praised as a "marketing fairy" by clients, Santy designs custom GHL workflows that save time and boost conversions for tradies and clinicians across Australia.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="cs_team_card">
              <div className="cs_team_img_wrapper mb-4">
                <Image 
                  src="/assets/img/team/teamsimg4.png" 
                  alt="Team Member" 
                  width={300} 
                  height={300} 
                  className="w-100 rounded"
                />
              </div>
              <div className="text-center">
                <h5 className="cs_team_name mb-2" style={{ color: '#ffd700', fontWeight: '700' }}>[Team Member Name]</h5>
                <p className="cs_team_designation cs_ternary_color mb-3" style={{ fontWeight: '600', color: '#ffffff' }}>Automation Expert</p>
                <p className="cs_ternary_color small" style={{ lineHeight: '1.6' }}>
                  With a passion for streamlining operations, [Team Member Name] integrates AI bots and tools like Xero and Cliniko to help businesses scale efficiently.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="cs_team_card">
              <div className="cs_team_img_wrapper mb-4">
                <Image 
                  src="/assets/img/team/teamsimg3.png" 
                  alt="Team Member" 
                  width={300} 
                  height={300} 
                  className="w-100 rounded"
                />
              </div>
              <div className="text-center">
                <h5 className="cs_team_name mb-2" style={{ color: '#ffd700', fontWeight: '700' }}>[Team Member Name]</h5>
                <p className="cs_team_designation cs_ternary_color mb-3" style={{ fontWeight: '600', color: '#ffffff' }}>Client Success Manager</p>
                <p className="cs_ternary_color small" style={{ lineHeight: '1.6' }}>
                  [Team Member Name] ensures every client achieves measurable results, from 20% cost savings to 25% revenue growth, with personalized support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80"></div>
      </section>

      {/* Trust Section */}
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="text-center mb-5">
              <h2 className="cs_section_title_2 cs_color_1">{trust_title}</h2>
            </div>
            
            <div className="row justify-content-center">
              {trust_points.map((point, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="cs_trust_card text-center p-4 h-100">
                    <h4 className="cs_color_1 mb-3">{point.title}</h4>
                    <p className="cs_ternary_color">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact">
        <div className="cs_height_150 cs_height_lg_80"></div>
        <div className="container">
          <div className="text-center">
            <h2 className="cs_section_title_2 mb-4">{cta_title}</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <p className="cs_ternary_color fs-5 mb-4">{cta_description}</p>
                <div className="cs_contact_form">
                  <form>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <input 
                          type="text" 
                          className="cs_form_field" 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input 
                          type="email" 
                          className="cs_form_field" 
                          placeholder="Your Email" 
                          required 
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <input 
                          type="text" 
                          className="cs_form_field" 
                          placeholder="Your Phone" 
                          required 
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <textarea 
                          className="cs_form_field" 
                          placeholder="Tell us about your business..." 
                          rows={4}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <div className="cs_btn_anim">
                          <button type="submit" className="cs_btn cs_style_1 cs_btn_lg">
                            <span>Book Your Free Demo</span>
                            <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z" fill="currentColor"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_150 cs_height_lg_80"></div>
      </section>
    </div>
  );
};

export default About;