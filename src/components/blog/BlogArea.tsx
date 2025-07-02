

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

import blog_img_1 from "@/assets/img/post_1.jpg";
import blog_img_2 from "@/assets/img/post_2.jpg";
import blog_img_3 from "@/assets/img/post_3.jpg";
import blog_img_4 from "@/assets/img/post_4.jpg";
import blog_img_5 from "@/assets/img/post_5.jpg";
import blog_img_6 from "@/assets/img/post_6.jpg";
import blog_img_7 from "@/assets/img/post_7.jpg";
import blog_img_8 from "@/assets/img/post_8.jpg";
import blog_img_9 from "@/assets/img/post_9.jpg";
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
  const buttonRef = useRef<HTMLDivElement>(null);

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

      // Load more button animation
      gsap.from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        ease: "elastic.out(1.2, 0.75)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup animations
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div>
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_type_1">
              <div className="cs_section_heading_text">
                <h2
                  ref={headingRef}
                  className="cs_section_title anim_heading_title"
                >
                  New Day <br /> New Inspiration
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_100 cs_height_lg_60"></div>

      <section>
        <div className="container">
          <div className="row">
            {blog_data.map((item, i) => (
              <div
                ref={addToBlogItems}
                key={i}
                className={`col-md-4 ${item.id === 2 ? "mt-0 mt-md-5" : ""} ${
                  item.id === 5 ? "mt-0 mt-md-5" : ""
                } ${item.id === 8 ? "mt-0 mt-md-5" : ""}`}
              >
                <div className="anim_div_ShowDowns">
                  <Link href="/blog-details" className="cs_blog cs_style_1">
                    <div>
                      <Image src={item.img} alt="post_1" />
                    </div>
                    <div className="cs_blog_info">
                      <h6 className="cs_blog_title">{item.title}</h6>
                      <p className="cs_blog_subtitle">{item.des}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div ref={buttonRef}>
            <div className="cs_hero_btn_wrap text-center">
              <div className="cs_round_btn_wrap">
                <a href="#" className="cs_hero_btn cs_round_btn btn-item">
                  <span></span> Load More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArea;