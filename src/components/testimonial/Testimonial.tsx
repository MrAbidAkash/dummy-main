"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import avatar_img from "@/assets/img/avatar_1.jpg";
import testimonial_thumb from "@/assets/img/testimonial_thumb_1.jpg";
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
    name: `Mike Johnson`,
    location: `Local Electrician, Denver`,
    des: `"Before Leads360, managing growth was chaotic - more calls meant more missed opportunities. Their CRM automation and Facebook ad strategy brought us 40% more qualified leads while streamlining our booking process. Now we grow without the stress."`,
  },
  {
    img: avatar_img,
    name: `Dr. Sarah Chen`,
    location: `Physiotherapy Clinic Owner`,
    des: `"Leads360 transformed our patient acquisition from unpredictable to systematic. Their tailored digital marketing strategy filled our appointment books consistently, bringing us 60% more new patients in 6 months - all while reducing our administrative workload."`,
  },
  {
    img: avatar_img,
    name: `Tom Williams`,
    location: `Williams Plumbing Services`,
    des: `"The challenge wasn't getting leads - it was managing sustainable growth. Leads360's custom approach optimized our entire customer journey, from initial contact to completed jobs. Revenue increased 50% while operational chaos decreased significantly."`,
  },
];

const Testimonial = ({ style_service }: any) => {
  const shape1Ref = useRef<SVGSVGElement>(null);
  const shape2Ref = useRef<SVGSVGElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (style_service) return;
    if (
      !shape1Ref.current ||
      !shape2Ref.current ||
      !thumbRef.current ||
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
        thumbRef.current,
        {
          x: -200,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.4",
      )
      .from(
        contentRef.current,
        {
          x: 200,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7",
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
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div ref={thumbRef}>
                <Image src={testimonial_thumb} alt="" className="w-100" />
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div
                ref={contentRef}
                className={`cs_testimonial ${
                  style_service ? "cs_style_2" : "cs_style_1 cs_color_1"
                }`}
              >
                <h2 className="cs_testimonial_title">
                  Client Success Stories: Real Results, Real Growth
                </h2>
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
                      >
                        <div className="cs_testimonial_quote_icon">
                          <svg
                            width="61"
                            height="44"
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
                        <blockquote className="cs_testimonial_text">
                          {item.des}
                        </blockquote>
                        <div className="cs_testimonial_meta">
                          <div className="cs_testimonial_avatar">
                            <Image src={item.img} alt="Avatar" />
                          </div>
                          <div className="cs_testimonial_meta_right">
                            <h3 className="cs_testimonial_avatar_name">
                              {item.name}
                            </h3>
                            <div className="cs_testimonial_avatar_designation">
                              {item.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                  <div className="cs_pagination cs_style1"></div>
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
