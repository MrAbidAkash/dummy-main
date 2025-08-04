"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

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
    img: "/assets/img/blog (1).jpg",
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
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2
                  ref={titleRef}
                  className="cs_section_title anim_heading_title"
                >
                  New Day New Inspiration
                
                </h2>
              </div>
              <div className="cs_section_heading_right cs_btn_anim">
                <Link
                  ref={btnRef as any}
                  href="/blog"
                  className="cs_btn cs_style_1"
                >
                  <span>View All Blogs</span>
                  <svg
                    width="19"
                    height="13"
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
          )}
          <div
            ref={sliderRef as any}
            className="cs_height_100 cs_height_lg_60"
          ></div>
          <Swiper
            loop={true}
            speed={1000}
            spaceBetween={30}
            slidesPerView={"auto"}
            pagination={{
              el: ".cs_pagination",
              clickable: true,
            }}
            className={`cs_slider cs_slider_3 anim_blog ${
              style_2 ? "" : "style_slider"
            }`}
          >
            {blog_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div
                  ref={(el) => {
                    if (el) {
                      postRefs.current[i] = el;
                    }
                  }}
                  className="cs_post cs_style_1"
                >
                  <Link href="/blog-details" className="cs_post_thumb">
                    <Image src={item.img} alt="image-here" width={400} height={267} />
                  </Link>
                  <div className="cs_post_info">
                    <h2 className="cs_post_title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h2>
                    <p className="cs_m0">{item.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {style_2 ? null : style_3 ? null : (
        <div className="cs_height_150 cs_height_lg_60"></div>
      )}
    </>
  );
};

export default BlogHomeOne;
