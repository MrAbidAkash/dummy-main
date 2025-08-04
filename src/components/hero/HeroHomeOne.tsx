"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface DataType {
  video: string;
  sub_title: string;    
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    video: "/assets/video/AZhoG8jnzKq124S_fIG0QQ-AZhoG8jnBsTz86_o5M4X-g.mp4", // Fixed: Using relative path from public folder
    title: "Strategy.Systems.Sales.",
    des: "From marketing strategy to hands-on implementation — we help your business grow with clarity, systems, and results that last.",
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
              style={{ height: "50vh", position: "relative", overflow: "hidden" }} /* Added position and overflow for video */
            >
              <video
                className="cs_hero_video"
                autoPlay
                muted
                loop
                playsInline
                onLoadStart={() => console.log("Video loading started")}
                onCanPlay={() => console.log("Video can play")}
                onError={(e) => console.error("Video error:", e)}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: "-1"
                }}
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="cs_hero_overlay" style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text readability
                zIndex: "1"
              }}></div>
              <div className="container" style={{ height: "45vh", maxWidth: "1000px", position: "relative", zIndex: "2" }}> {/* Added z-index to ensure content is above video */}
                <style dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes fadeInUp {
                      from {
                        opacity: 0;
                        transform: translateY(30px);
                      }
                      to {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                    
                    @keyframes fadeInScale {
                      from {
                        opacity: 0;
                        transform: scale(0.9);
                      }
                      to {
                        opacity: 1;
                        transform: scale(1);
                      }
                    }
                    
                    .cs_hero_title_animated {
                      animation: fadeInScale 1.2s ease-out 0.3s both;
                    }
                    
                    .cs_hero_tagline_animated {
                      animation: fadeInUp 1s ease-out 0.6s both;
                    }
                    
                    .cs_hero_subtitle_animated {
                      animation: fadeInUp 1s ease-out 0.9s both;
                    }
                    
                    .cs_hero_btn_animated {
                      animation: fadeInUp 1s ease-out 1.2s both;
                    }
                  `
                }} />
                <div className="cs_hero_text" style={{ fontSize: "medium", padding: "10px", maxWidth: "800px" }}>
                  <div className="cs_hero_mini_title" style={{ fontSize: "16px", textAlign: "center" }}>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_2 cs_height_lg_2"></div>
                  <h1 className="cs_hero_title cs_hero_title_animated" style={{ fontSize: "48px", lineHeight: "1.2", marginBottom: "10px", textAlign: "center" }}>
                    {item.title}
                  </h1>
                  <style dangerouslySetInnerHTML={{
                    __html: `
                      @media (max-width: 768px) {
                        .cs_hero_title {
                          font-size: 28px !important;
                          line-height: 1.1 !important;
                          padding: 0 15px !important;
                          word-break: keep-all !important;
                          white-space: nowrap !important;
                          overflow: hidden !important;
                          text-overflow: ellipsis !important;
                          max-width: 100% !important;
                        }
                        .cs_hero_tagline {
                          font-size: 16px !important;
                          padding: 0 15px !important;
                        }
                        .cs_hero_subtitle {
                          font-size: 16px !important;
                          margin-left: 20px !important;
                          margin-right: 20px !important;
                          text-align: center !important;
                        }
                        .cs_round_btn_wrap {
                          margin-left: 20px !important;
                          justify-content: center !important;
                        }
                      }
                      @media (max-width: 480px) {
                        .cs_hero_title {
                          font-size: 24px !important;
                          line-height: 1.1 !important;
                          padding: 0 20px !important;
                          word-break: keep-all !important;
                          white-space: nowrap !important;
                          overflow: hidden !important;
                          text-overflow: ellipsis !important;
                        }
                        .cs_hero_tagline {
                          font-size: 14px !important;
                          padding: 0 20px !important;
                        }
                        .cs_hero_subtitle {
                          font-size: 14px !important;
                          margin-left: 15px !important;
                          margin-right: 15px !important;
                        }
                      }
                      @media (max-width: 360px) {
                        .cs_hero_title {
                          font-size: 20px !important;
                          padding: 0 25px !important;
                        }
                      }
                    `
                  }} />
                  <div className="cs_hero_tagline cs_hero_tagline_animated" style={{ fontSize: "20px", fontStyle: "italic", textAlign: "center", marginBottom: "20px", color: "#FECA15" }}>
                    From clicks to clients on autopilot.
                  </div>
                  <div className="cs_hero_text_in" style={{ marginTop: "0" }}>
                    <div className="cs_hero_subtitle cs_hero_subtitle_animated" style={{ fontSize: "18px", lineHeight: "1.4", marginLeft: "80px", fontStyle: "italic" }}>{item.des}</div>
        

                    <div className="cs_height_15 cs_height_lg_15"></div>
                    <div className="cs_hero_btn_wrap cs_hero_btn_animated">
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
