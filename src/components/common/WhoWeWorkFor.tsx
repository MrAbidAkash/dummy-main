"use client";
import Link from "next/link";
import React, { useState } from "react";

const work_for_data = [
  {
    id: 1,
    title: "Small Businesses (1–5)",
    subtitle: "Small Business. Team of 1–5.",
    fullDescription: "You're a tradie or clinician wearing all the hats—quoting, chasing leads, managing bookings. Admin chaos and missed opportunities are slowing your growth.\n\nYou're constantly switching between calls, quotes, and bookings while manual processes eat up valuable time. Every missed call could be a lost customer, and you're too busy working IN the business to work ON it.",
  },
  {
    id: 2,
    title: "Medium Businesses (5–20)",
    subtitle: "Medium Business. 5–20 staff.",
    fullDescription: "Your team is steady, but leads slip through the cracks, and marketing is inconsistent. Disorganized processes are stretching your team thin.\n\nInconsistent lead management across team members means marketing efforts lack coordination. Your team is using different systems and processes, making it difficult to maintain service quality as you scale.",
  },
  {
    id: 3,
    title: "Large Businesses (20+)",
    subtitle: "Large Businesses (20+)",
    fullDescription: "Your service business is growing fast, but disconnected systems and unclear reporting create chaos. Complexity is slowing down decision-making.\n\nMultiple systems that don't communicate create fragmented customer data across platforms. This makes it difficult to get real-time business insights while manual processes break down at scale.",
  },
];

const WhoWeWorkFor = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

  const handleBoxHover = (id: number) => {
    setHoveredBox(id);
  };

  const handleBoxLeave = () => {
    setHoveredBox(null);
  };

  return (
    <section
      style={{
        padding: "80px 0 100px 0",
        backgroundColor: "#2a2a2a",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cs_section_heading cs_style_1 text-center"
              style={{ marginBottom: "60px" }}
            >
              <h2
                className="cs_section_title"
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                  color: "#FECA15",
                }}
              >
                Who We Work With
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#cccccc",
                  maxWidth: "600px",
                  margin: "0 auto",
                  fontWeight: "500",
                }}
              >
                Service-Based Businesses in Australia
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {work_for_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="cs_service_card"
                onMouseEnter={() => handleBoxHover(item.id)}
                onMouseLeave={handleBoxLeave}
                style={{
                  background: "transparent",
                  borderRadius: "20px",
                  marginBottom: "0px",
                  position: "relative",
                  cursor: "pointer",
                  minHeight: "400px",
                  perspective: "1000px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: hoveredBox === item.id ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front of card */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      background: "#1a1a1a",
                      border: "1px solid rgba(254, 202, 21, 0.2)",
                      borderRadius: "20px",
                      padding: "40px 25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        background: "linear-gradient(135deg, #FECA15 0%, #FFD700 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "25px",
                        boxShadow: "0 4px 10px rgba(254, 202, 21, 0.4)",
                      }}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {item.id === 1 ? (
                          <path
                            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21 M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : item.id === 2 ? (
                          <path
                            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21 M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13 M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88 M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        ) : (
                          <path
                            d="M3 21H21 M5 21V7L13 3L21 7V21 M9 9V11 M15 9V11 M9 15V17 M15 15V17"
                            stroke="#1a1a1a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        )}
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#ffffff",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <h4
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#FECA15",
                        marginBottom: "20px",
                      }}
                    >
                      {item.subtitle}
                    </h4>
                  </div>

                  {/* Back of card */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      background: "#1a1a1a",
                      border: "1px solid rgba(254, 202, 21, 0.2)",
                      borderRadius: "20px",
                      padding: "40px 25px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#ffffff",
                        lineHeight: "1.6",
                        marginBottom: "20px",
                        whiteSpace: "pre-line",
                        flex: "1",
                      }}
                    >
                      {item.fullDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .cs_service_card {
              margin-bottom: 20px !important;
              padding: 30px 20px !important;
              minHeight: 350px !important;
            }
            .cs_service_card h3 {
              font-size: 20px !important;
            }
            .cs_section_title {
              font-size: 32px !important;
            }
            .cs_service_card h4 {
              font-size: 16px !important;
            }
            .cs_service_card p {
              font-size: 15px !important;
            }
            .cs_service_card .cs_round_btn {
              padding: 8px 15px !important;
              font-size: 14px !important;
            }
          }
          @media (max-width: 480px) {
            .cs_service_card {
              minHeight: 300px !important;
              padding: 20px 15px !important;
            }
            .cs_section_title {
              font-size: 28px !important;
            }
            .cs_service_card h3 {
              font-size: 18px !important;
            }
            .cs_service_card h4 {
              font-size: 14px !important;
            }
            .cs_service_card p {
              font-size: 14px !important;
            }
            .cs_service_card .cs_round_btn {
              padding: 6px 12px !important;
              font-size: 12px !important;
            }
          }
        `,
      }} />
    </section>
  );
};

export default WhoWeWorkFor;