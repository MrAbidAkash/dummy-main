"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: "/assets/img/hero_img_1.jpg",
    title: "Strategy. Execution. Growth. Nothing wasted. Everything working.",
    des: "From marketing strategy to hands-on implementation — we help your business grow with clarity, systems, and results that last.",
    sub_title: ""
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
              style={{ height: "50vh" }} /* Reduced from 110vh to a medium 50vh */
            >
              <div
                className="cs_hero_bg cs_bg cs_parallax_bg"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="container" style={{ height: "45vh", maxWidth: "1000px" }}> {/* Reduced height and set max width */}
                <div className="cs_hero_text" style={{ fontSize: "medium", padding: "0", maxWidth: "800px" }}>
                  <div className="cs_hero_mini_title" style={{ fontSize: "16px" }}>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_2 cs_height_lg_2"></div>
                  <h1 className="cs_hero_title" style={{ fontSize: "38px", lineHeight: "1.2", marginBottom: "10px" }}>
                    {item.title}
                  </h1>
                  <div className="cs_hero_text_in" style={{ marginTop: "0" }}>
                    <div className="cs_hero_subtitle" style={{ fontSize: "18px", lineHeight: "1.4", marginLeft: "80px", fontStyle: "italic" }}>{item.des}</div>
        

                    <div className="cs_height_15 cs_height_lg_15"></div>
                    <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap" style={{ display: "flex", justifyContent: "flex-start", gap: "1.1em", marginLeft: "80px" }}>
                        <Link
                          href="/contact"
                          className="cs_hero_btn cs_round_btn btn-item"
                          style={{ 
                            width: "5em", 
                            height: "5em", 
                            borderRadius: "2.5em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.78em"
                          }}
                        >
                          <span></span>
                          Get Started
                        </Link>
                        <a
                          onClick={openModal}
                          className="cs_hero_btn cs_round_btn btn-item transition"
                          style={{ 
                            width: "5em", 
                            height: "5em", 
                            borderRadius: "2.5em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.78em"
                          }}
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
