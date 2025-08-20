"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

interface DataType {
  video: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    video: "/assets/video/AZhoG8jnzKq124S_fIG0QQ-AZhoG8jnBsTz86_o5M4X-g.mp4",
    title: "Grow Your Service-Based Business Without Chaos",
    des: "From tradies to allied health professionals and service-based enterprises, Leads360 understands the challenges of service businesses across Australia and helps you <span style='color: #FECA15; font-weight: 700; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);'>scale smarter</span>.",
    sub_title: "",
  },
];

const HeroHomeOne = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      className="cs_slider cs_slider_1"
    >
      {hero_slider.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div
            className="cs_hero cs_style1 cs_center cs_parallax"
            style={{ height: "100vh", position: "relative", overflow: "hidden" }}
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
                zIndex: "-1",
              }}
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="cs_hero_overlay"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                zIndex: "1",
              }}
            ></div>
            <div
              className="container"
              style={{
                height: "100%",
                maxWidth: "1200px",
                position: "relative",
                zIndex: "2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 15px",
                minHeight: "100%",
              }}
            >
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
                  .cs_hero_subtitle_animated {
                    animation: fadeInUp 1s ease-out 0.6s both;
                  }
                  .cs_hero_btn_animated {
                    animation: fadeInUp 1s ease-out 0.9s both;
                  }
                  .cs_hero_btn.cs_round_btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(254, 202, 21, 0.4);
                  }
                  .cs_hero_btn.cs_round_btn {
                    background-color: #FECA15;
                    color: #000000;
                    border: 2px solid #FECA15;
                  }
                  .cs_hero_btn.cs_round_btn:hover {
                    background-color: #FFD700;
                    color: #000000;
                    border-color: #FFD700;
                  }
                `,
              }} />
              <div
                className="cs_hero_text"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  maxWidth: "800px",
                  width: "100%",
                }}
              >
                <div
                  className="cs_hero_mini_title"
                  style={{ fontSize: "16px", color: "#FECA15", marginBottom: "10px" }}
                >
                  {item.sub_title}
                </div>
                <h1
                  className="cs_hero_title cs_hero_title_animated"
                  style={{
                    fontSize: "56px",
                    lineHeight: "1.2",
                    marginBottom: "25px",
                    background: "linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    fontWeight: "700",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
                  }}
                >
                  {item.title}
                </h1>
                <div
                  className="cs_hero_subtitle cs_hero_subtitle_animated"
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.5",
                    color: "#E0E0E0",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    fontWeight: "400",
                    fontStyle: "italic",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.des }}
                ></div>
                <div className="cs_height_30 cs_height_lg_30"></div>
                <div className="cs_hero_btn_wrap cs_hero_btn_animated">
                  <div
                    className="cs_round_btn_wrap"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Link
                      href="/contact"
                      className="cs_hero_btn cs_round_btn btn-item"
                      style={{
                        width: "220px",
                        height: "65px",
                        borderRadius: "32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "19px",
                        backgroundColor: "#FECA15",
                        color: "#000000",
                        border: "2px solid #FECA15",
                        fontWeight: "600",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(254, 202, 21, 0.3)",
                      }}
                    >
                      Book a Free Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="cs_pagination cs_style1"></div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .cs_hero {
              height: 50vh !important;
              min-height: 400px !important;
            }
            .cs_hero .container {
              justify-content: center !important;
              padding: 20px 15px !important;
              height: 100% !important;
            }
            .cs_hero_text {
              max-width: 95% !important;
              padding: 15px !important;
              text-align: center !important;
            }
            .cs_hero_title {
              font-size: 32px !important;
              margin-bottom: 15px !important;
              line-height: 1.2 !important;
            }
            .cs_hero_subtitle {
              font-size: 16px !important;
              padding: 0 10px !important;
              margin-bottom: 20px !important;
              line-height: 1.4 !important;
            }
            .cs_hero_btn.cs_round_btn {
              width: 180px !important;
              height: 55px !important;
              font-size: 16px !important;
            }
            .cs_height_30 {
              height: 15px !important;
            }
          }
          @media (max-width: 480px) {
            .cs_hero {
              height: 45vh !important;
              min-height: 350px !important;
            }
            .cs_hero .container {
              justify-content: center !important;
              padding: 15px 10px !important;
              height: 100% !important;
            }
            .cs_hero_text {
              max-width: 98% !important;
              padding: 10px !important;
              text-align: center !important;
            }
            .cs_hero_title {
              font-size: 28px !important;
              margin-bottom: 12px !important;
              line-height: 1.2 !important;
            }
            .cs_hero_subtitle {
              font-size: 15px !important;
              padding: 0 8px !important;
              margin-bottom: 18px !important;
              line-height: 1.4 !important;
            }
            .cs_hero_btn.cs_round_btn {
              width: 170px !important;
              height: 50px !important;
              font-size: 15px !important;
            }
            .cs_height_30 {
              height: 12px !important;
            }
          }
          @media (max-width: 360px) {
            .cs_hero {
              height: 40vh !important;
              min-height: 320px !important;
            }
            .cs_hero .container {
              padding: 10px 8px !important;
            }
            .cs_hero_text {
              padding: 8px !important;
            }
            .cs_hero_title {
              font-size: 24px !important;
              margin-bottom: 10px !important;
            }
            .cs_hero_subtitle {
              font-size: 14px !important;
              padding: 0 5px !important;
              margin-bottom: 15px !important;
            }
            .cs_hero_btn.cs_round_btn {
              width: 160px !important;
              height: 48px !important;
              font-size: 14px !important;
            }
            .cs_height_30 {
              height: 10px !important;
            }
          }
        `,
      }} />
    </Swiper>
  );
};

export default HeroHomeOne;