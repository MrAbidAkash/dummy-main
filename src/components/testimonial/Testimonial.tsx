"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img from "@/assets/img/avatar_1.jpg";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface DataType {
  img: StaticImageData;
  name: string;
  location: string;
  des: string;
}

const testimonial_data: DataType[] = [
  {
    img: avatar_img,
    name: `Julia Magesh`,
    location: ``,
    des: `"Santy from Leads360 is a marketing fairy. She over delivers and is very strategic in her social media campaigns. She built a great customer review management system for my husband's plumbing business. This has saved us so much time and built credibility."`,
  },
  {
    img: avatar_img,
    name: `John Kennedy`,
    location: ``,
    des: `"We engaged with Leads360 for digital marketing and social media management. Santy built our website and completed full SEO - we're now ranking on the first page of Google with increased traffic."`,
  },
  {
    img: avatar_img,
    name: `Derek B`,
    location: `Local Guide`,
    des: `"We engaged Santy and the Leads 360 team to help us set up email marketing campaigns and automations - I cannot speak highly enough of her expertise."`,
  },
];

const Testimonial = ({ style_service }: any) => {
  const shape1Ref = useRef<SVGSVGElement>(null);
  const shape2Ref = useRef<SVGSVGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (style_service) return;
    if (
      !shape1Ref.current ||
      !shape2Ref.current ||
      !contentRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 75%",
      },
    });

    tl.from(shape1Ref.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "bounce.out",
    })
      .from(
        shape2Ref.current,
        { scale: 0, opacity: 0, duration: 0.8, ease: "bounce.out" },
        "-=0.6",
      )
      .from(
        contentRef.current,
        {
          x: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .from(
        contentRef.current.querySelector(".cs_testimonial_title")!,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(1.5)",
        },
        "-=0.5",
      )
      .addLabel("boxes", "-=0.4")
      .fromTo(
        slideRefs.current,
        { y: 50, opacity: 0, rotation: -5 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 50%",
          },
        },
        "boxes",
      );
  }, [style_service]);

  return (
    <>
      <section
        className={`${
          style_service ? "cs_shape_wrap_3" : "cs_primary_bg cs_shape_wrap_2"
        }`}
      >
        {style_service ? null : (
          <>
            <div className="cs_shape_1">
              <svg
                ref={shape1Ref}
                width="1041"
                height="1005"
                viewBox="0 0 1041 1005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.3"
                  cx="538.5"
                  cy="502.5"
                  r="501.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="501.5"
                  cy="526.5"
                  r="458.5"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="453"
                  cy="570"
                  r="424"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="396"
                  cy="591"
                  r="377"
                  stroke="#454545"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.3"
                  cx="330"
                  cy="630"
                  r="329"
                  stroke="#454545"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="cs_shape_2">
              <svg
                ref={shape2Ref}
                width="149"
                height="149"
                viewBox="0 0 149 149"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.23">
                  <path
                    d="M54.7532 1.16162C47.1932 42.2265 41.0646 48.3548 0 55.9147C41.065 63.4746 47.1932 69.6029 54.7532 110.668C62.3131 69.6029 68.4414 63.4746 109.506 55.9147C68.4414 48.3548 62.3128 42.2265 54.7532 1.16162Z"
                    fill="#454545"
                  />
                  <path
                    d="M114.179 78.1968C109.372 104.312 105.474 108.21 79.3584 113.018C105.474 117.825 109.372 121.723 114.179 147.838C118.987 121.723 122.885 117.825 149 113.018C122.884 108.21 118.987 104.312 114.179 78.1968Z"
                    fill="#454545"
                  />
                </g>
              </svg>
            </div>
          </>
        )}

        <div className="cs_height_150 cs_height_lg_60"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <h2 className="cs_testimonial_title" style={{textAlign: 'left', marginBottom: '30px', lineHeight: '1.2', fontSize: '48px'}}>
                Testimonials
              </h2>
            </div>
          </div>
          <div className="row justify-content-center" style={{marginTop: '40px'}}>
            <div className="col-lg-8 col-md-10">
              <div
                ref={contentRef}
                className={`cs_testimonial ${
                  style_service ? "cs_style_2" : "cs_style_1 cs_color_1"
                }`}
                style={{marginTop: '0px'}}
              >
                <Swiper
                  loop={true}
                  speed={1000}
                  autoplay={true}
                  modules={[Autoplay]}
                  pagination={{
                    el: ".cs_pagination",
                    clickable: true,
                  }}
                  className="cs_slider cs_slider_4"
                >
                  {testimonial_data.map((item, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <div
                        ref={(el) => {
                          if (el) slideRefs.current[index] = el;
                        }}
                        className="cs_testimonial_box"
                        style={{
                          background: 'rgba(0,0,0,0.05)',
                          borderRadius: '12px',
                          padding: '25px',
                          margin: '5px auto',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <div className="cs_testimonial_quote_icon" style={{marginBottom: '20px'}}>
                          <svg
                            width="45"
                            height="32"
                            viewBox="0 0 61 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 26.2855H12.9844L4.32807 43.4283H17.3125L25.9689 26.2855V0.571289H0V26.2855Z"
                              fill="#FECA15"
                            />
                            <path
                              d="M34.625 0.571289V26.2855H47.6094L38.9531 43.4283H51.9375L60.5939 26.2855V0.571289H34.625Z"
                              fill="#FECA15"
                            />
                          </svg>
                        </div>
                        <blockquote className="cs_testimonial_text" style={{fontSize: '18px', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic'}}>
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                          <div className="cs_testimonial_avatar">
                            <Image 
                              src={item.img} 
                              alt="Avatar" 
                              width={60} 
                              height={60}
                              style={{
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '2px solid #FECA15',
                                display: 'block'
                              }}
                            />
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <h3 className="cs_testimonial_avatar_name" style={{fontSize: '18px', fontWeight: '600', marginBottom: '4px'}}>
                              {item.name}
                            </h3>
                            <div className="cs_testimonial_avatar_designation" style={{fontSize: '14px', opacity: '0.8'}}>
                              {item.location || 'Client'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="cs_pagination cs_style1" style={{textAlign: 'center', marginTop: '30px'}}></div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        {style_service ? null : (
          <div className="cs_height_150 cs_height_lg_60"></div>
        )}
      </section>
      {style_service ? null : (
        <div className="cs_height_115 cs_height_lg_60"></div>
      )}
    </>
  );
};

export default Testimonial;
