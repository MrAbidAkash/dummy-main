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
    video: "/assets/video/AZhoG8jnzKq124S_fIG0QQ-AZhoG8jnBsTz86_o5M4X-g.mp4", // Fixed: Using relative path from public folder
    title: "Grow Your Service-Based Business Without Chaos",
    des: "From tradies to allied health professionals and service-based enterprises, Leads360 understands the challenges of service businesses across Australia and helps you <span style='color: #FECA15; font-weight: 700; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);'>scale smarter</span>.",
    sub_title: ""
  },
];

const HeroHomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{ clickable: true }}
        className="cs_slider cs_slider_1"
      >
        {hero_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className="cs_hero cs_style1 cs_center cs_parallax"
              style={{ height: "40vh", position: "relative", overflow: "hidden" }} /* Reduced height for better positioning */
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
              <div className="container" style={{ 
                height: "35vh", 
                maxWidth: "1000px", 
                position: "relative", 
                zIndex: "2",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: "20px"
              }}> {/* Adjusted height and added centering */}
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
                    
                    /* Enhanced button hover effects for better visibility */
                    .cs_hero_btn.cs_round_btn:hover {
                      transform: translateY(-2px) !important;
                      box-shadow: 0 8px 25px rgba(254, 202, 21, 0.4) !important;
                    }
                    
                    .cs_hero_btn.cs_round_btn:first-child:hover {
                      background-color: #000000 !important;
                      color: #FECA15 !important;
                      border-color: #000000 !important;
                    }
                    
                    .cs_hero_btn.cs_round_btn:last-child:hover {
                      background-color: #FFFFFF !important;
                      color: #000000 !important;
                      border-color: #FFFFFF !important;
                      box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3) !important;
                    }
                  `
                }} />
                <div className="cs_hero_text" style={{ 
                    fontSize: "medium", 
                    padding: "10px", 
                    maxWidth: "800px",
                    marginTop: "-20px" 
                  }}>
                  <div className="cs_hero_mini_title" style={{ fontSize: "16px", textAlign: "center" }}>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_2 cs_height_lg_2"></div>
                  <h1 className="cs_hero_title cs_hero_title_animated" style={{ 
                    fontSize: "48px", 
                    lineHeight: "1.2", 
                    marginBottom: "10px", 
                    textAlign: "center",
                    background: "linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "none",
                    fontWeight: "700",
                    filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))"
                  }}>
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
                          background: linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important;
                          background-clip: text !important;
                          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) !important;
                        }
                        .cs_hero_tagline {
                          font-size: 16px !important;
                          padding: 0 15px !important;
                          color: #FECA15 !important;
                          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8) !important;
                        }
                        .cs_hero_subtitle {
                          font-size: 16px !important;
                          margin-left: 20px !important;
                          margin-right: 20px !important;
                          text-align: center !important;
                          color: #E0E0E0 !important;
                          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7) !important;
                        }
                        .cs_round_btn_wrap {
                          margin-left: 20px !important;
                          justify-content: center !important;
                        }
                        .cs_hero_btn.cs_round_btn {
                          width: 4em !important;
                          height: 4em !important;
                          font-size: 0.7em !important;
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
                          background: linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important;
                          background-clip: text !important;
                          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) !important;
                        }
                        .cs_hero_tagline {
                          font-size: 14px !important;
                          padding: 0 20px !important;
                          color: #FECA15 !important;
                          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8) !important;
                        }
                        .cs_hero_subtitle {
                          font-size: 14px !important;
                          margin-left: 15px !important;
                          margin-right: 15px !important;
                          color: #E0E0E0 !important;
                          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7) !important;
                        }
                        .cs_hero_btn.cs_round_btn {
                          width: 3.8em !important;
                          height: 3.8em !important;
                          font-size: 0.65em !important;
                        }
                      }
                      @media (max-width: 360px) {
                        .cs_hero_title {
                          font-size: 20px !important;
                          padding: 0 25px !important;
                          background: linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%) !important;
                          -webkit-background-clip: text !important;
                          -webkit-text-fill-color: transparent !important;
                          background-clip: text !important;
                          filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) !important;
                        }
                        .cs_hero_btn.cs_round_btn {
                          width: 3.5em !important;
                          height: 3.5em !important;
                          font-size: 0.6em !important;
                        }
                      }
                    `
                  }} />
                  <div className="cs_hero_tagline cs_hero_tagline_animated" style={{ 
                    fontSize: "20px", 
                    fontStyle: "italic", 
                    textAlign: "center", 
                    marginBottom: "20px", 
                    color: "#FECA15",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                    fontWeight: "500"
                  }}>
                  
                  </div>
                  <div className="cs_hero_text_in" style={{ marginTop: "0" }}>
                    <div className="cs_hero_subtitle cs_hero_subtitle_animated" style={{ 
                      fontSize: "18px", 
                      lineHeight: "1.4", 
                      marginLeft: "40px", 
                      fontStyle: "italic",
                      color: "#E0E0E0",
                      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                      fontWeight: "400"
                    }} dangerouslySetInnerHTML={{ __html: item.des }}></div>
        

                    <div className="cs_height_15 cs_height_lg_15"></div>
                    <div className="cs_hero_btn_wrap cs_hero_btn_animated">
                      <div className="cs_round_btn_wrap" style={{ display: "flex", justifyContent: "flex-start", marginLeft: "40px" }}>
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
                            fontSize: "0.78em",
                            backgroundColor: "#FECA15",
                            color: "#000000",
                            border: "2px solid #FECA15",
                            fontWeight: "600",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(254, 202, 21, 0.3)"
                          }}
                        >
                          <span style={{ backgroundColor: "#000000" }}></span>
                          Book a Free Demo
                        </Link>
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
    </>
  );
};

export default HeroHomeOne;
