"use client";
import React, { useState } from 'react';

const work_for_data = [
  {
    id: 1,
    title: "",
    subtitle: "Small business. Team of 1–5.",
    fullDescription: "You're juggling everything — delivering services, chasing leads, managing bookings, and handling follow-ups. Growth is exciting, but you're conscious of every dollar spent.\n\nYou need simple systems that capture enquiries, automate follow-ups, and keep clients happy without adding to your workload.\n\nYou're ready to grow smarter, not harder."
  },
  {
    id: 2,
    title: "",
    subtitle: "Medium Business. 5–20 staff.",
    fullDescription: "Your business is thriving, but coordination is becoming challenging. Lead management, team communication, and customer experience need better systems.\n\nYou need marketing automation that works in the background and streamlined processes that don't require constant oversight.\n\nYou're ready to scale efficiently without burning out your team."
  },
  {
    id: 3,
    title: "",
    subtitle: "Large Businesses (20+)",
    fullDescription: "Rapid growth has created complexity. Disconnected systems, unclear reporting, and process inefficiencies are slowing you down.\n\nYou need integrated solutions that provide clear visibility, eliminate redundancies, and support confident decision-making.\n\nYou're ready to optimize operations and scale with precision."
  }
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
    <section style={{ 
      padding: "80px 0", 
      backgroundColor: "var(--drak-color)",
      position: "relative"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cs_section_heading cs_style_1 text-center" style={{ marginBottom: "60px" }}>
              <h2 className="cs_section_title" style={{ 
                fontSize: "42px", 
                marginBottom: "20px",
                color: "var(--heading-color)"
              }}>
                Who We Work With
              </h2>
              <p style={{ 
                fontSize: "18px", 
                color: "var(--body-color)",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
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
                  border: "none",
                  borderRadius: "20px",
                  marginBottom: "30px",
                  position: "relative",
                  cursor: "pointer",
                  minHeight: "400px",
                  perspective: "1000px"
                }}
              >
                <div 
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: hoveredBox === item.id ? "rotateY(180deg)" : "rotateY(0deg)"
                  }}
                >
                  {/* Front of card */}
                  <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "#1a1a1a",
                    border: "1px solid #000000",
                    borderRadius: "20px",
                    padding: "50px 30px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden"
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: "60px",
                      height: "60px",
                      background: "linear-gradient(135deg, #FECA15 0%, #FFD700 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "25px",
                      position: "relative",
                      zIndex: "2"
                    }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {item.id === 1 ? (
                          // Single person icon for small business
                          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21 M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        ) : item.id === 2 ? (
                          // Team/group icon for medium business
                          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21 M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13 M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88 M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
                                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        ) : (
                          // Building/enterprise icon for large business
                          <path d="M3 21H21 M5 21V7L13 3L21 7V21 M9 9V11 M15 9V11 M9 15V17 M15 15V17" 
                                stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        )}
                      </svg>
                    </div>
                    
                    {/* Title */}
                    <h3 style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      color: "var(--heading-color)",
                      marginBottom: "8px",
                      position: "relative",
                      zIndex: "2"
                    }}>
                      {item.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <h4 style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#FECA15",
                      marginBottom: "15px",
                      position: "relative",
                      zIndex: "2"
                    }}>
                      {item.subtitle}
                    </h4>
                  </div>
                  
                  {/* Back of card */}
                  <div style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    background: "#1a1a1a",
                    border: "1px solid #000000",
                    borderRadius: "20px",
                    padding: "35px 25px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    transform: "rotateY(180deg)"
                  }}>
                    {/* Description */}
                    <p style={{
                      fontSize: "16px",
                      color: "var(--body-color)",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      position: "relative",
                      zIndex: "2",
                      whiteSpace: "pre-line",
                      flex: "1",
                      overflow: "visible"
                    }}>
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
          }
        `
      }} />
    </section>
  );
};

export default WhoWeWorkFor;
