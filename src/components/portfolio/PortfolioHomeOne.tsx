"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import portfolio_img_1 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_2 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_3 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_4 from "@/assets/img/portfolio_4.jpg";
import portfolio_img_5 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_6 from "@/assets/img/portfolio_6.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface DataType {
  img: StaticImageData;
  title: string;
  category: string;
}
[];

const portfolio_slider: DataType[] = [
  {
    img: portfolio_img_1,
    title: `E-commerce Business Growth`,
    category: `Digital Marketing Strategy / 150% Traffic Increase`,
  },
  {
    img: portfolio_img_2,
    title: `Professional Services Firm`,
    category: `CRM Implementation / 75% Lead Growth`,
  },
  {
    img: portfolio_img_3,
    title: `Manufacturing Company`,
    category: `Business Automation / 40% Efficiency Gain`,
  },
  {
    img: portfolio_img_4,
    title: `Healthcare Practice`,
    category: `Digital Marketing / 200% ROI`,
  },
  {
    img: portfolio_img_5,
    title: `Tech Startup Scaling`,
    category: `Complete Digital Transformation`,
  },
  {
    img: portfolio_img_6,
    title: `Real Estate Agency`,
    category: `CRM & Sales Pipeline Optimization`,
  },
];

const PortfolioHomeOne = () => {
  const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLAnchorElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
      },
    });

    tl.from(subtitleRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: "back.out(1.7)",
    })
      .from(
        titleRef.current,
        { y: -50, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2",
      )
      .from(
        swiperRef.current,
        { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3",
      );

    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      gsap.fromTo(
        slide,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <div className="cs_horizontal_scroll_wrap">
        <div className="cs_height_145 cs_height_lg_60"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_2">
            <div className="cs_section_heading_text">
              <div
                ref={subtitleRef}
                className="cs_section_subtitle anim_div_ShowZoom"
              >
                Portfolio
              </div>
              <h2
                ref={titleRef}
                className="cs_section_title anim_heading_title"
              >
                Successful Growth Solutions
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
        </div>
        <Swiper
          loop={true}
          speed={1000}
          slidesPerView="auto"
          pagination={{
            el: ".cs_pagination",
            clickable: true,
          }}
          className="cs_horizontal_scrolls anim_div_ShowDowns"
          ref={swiperRef as any}
        >
          {portfolio_slider.map((item, i) => (
            <SwiperSlide key={i} className="swiper-slide">
              <div className="cs_horizontal_scroll">
                <Link
                  href="/portfolio"
                  className="cs_portfolio cs_style_1"
                  ref={(el) => {
                    if (el) {
                      slideRefs.current[i] = el; // side‑effect only
                    }
                  }}
                >
                  <div className="cs_portfolio_img">
                    <Image src={item.img} alt="Thumb" />
                  </div>
                  <div className="cs_portfolio_overlay"></div>
                  <div className="cs_portfolio_info">
                    <h2 className="cs_portfolio_title">{item.title}</h2>
                    <div className="cs_portfolio_subtitle">{item.category}</div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default PortfolioHomeOne;
