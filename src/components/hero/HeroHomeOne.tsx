"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: "/assets/img/hero_img_1.jpg",
    sub_title: "Leads360",
    title:"Tired of chasing marketing advice that doesn't move the needle?",
    des: `From strategy to execution — we help businesses grow with clarity and action.`,
  },
  {
    img: "/assets/img/hero_img_2.jpg",
    sub_title: "Free Marketing Audit",
    title: "Get Your Personalized Growth Roadmap",
    des: `Take our 5-minute audit to discover exactly where your marketing stands and get a custom action plan to attract more clients, increase bookings, and grow your revenue.`,
  },
  {
    img: "/assets/img/hero_img_3.jpg",
    sub_title: "Discovery Call",
    title: "Book Your Strategy Session",
    des: `Let's discuss your business goals and challenges. In 30 minutes, we'll create a custom roadmap showing you exactly how to attract more clients and scale your business—no fluff, just results.`,
  },
];

const HeroHomeOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Listen for a message from the iframe to close the modal
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data === "quizCompleted") {
        closeModal();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className="cs_hero cs_style1 cs_center cs_parallax"
              style={{ height: "110vh" }}
            >
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container" style={{ height: "70vh" }}>
                <div className="cs_hero_text" style={{ fontSize: "medium" }}>
                  <div className="cs_hero_mini_title">
                    <svg
                      width="134"
                      height="12"
                      viewBox="0 0 134 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010"
                      />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_5 cs_height_lg_5"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "40px" }}>
                    {item.title}
                  </h1>
                  <div className="cs_height_0 cs_height_lg_0"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle -mt-15">{item.des}</div>
        

                    <div className="cs_height_0 cs_height_lg_0"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                        >
                          <span></span>
                          Get Started
                        </Link>
                        <a
                          onClick={openModal}
                          className="cs_hero_btn cs_round_btn btn-item m-3 transition"
                        >
                          <span></span>
                          Take a Quiz
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>

      {isModalOpen && (
        <div className="quiz-modal-overlay">
          <div className="quiz-modal">
            <button onClick={closeModal} className="quiz-modal-close">
              ×
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/1oVdNNnntGfeRatbS6Cn"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Quiz"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroHomeOne;
