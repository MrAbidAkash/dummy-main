"use client";
import React from 'react';
import Image from 'next/image';
import styles from './TrustedByBusiness.module.css';

// Business logos for the trusted partners section
const business_logos = [
  {
    id: 1,
    name: 'Assure Fix Plumbing',
    logo: '/assets/logos/logo (1).jpg',
    alt: 'Assure Fix Plumbing Logo'
  },
  {
    id: 2,
    name: 'Inga Caroline Arthurs',
    logo: '/assets/logos/logo (2).jpg',
    alt: 'Inga Caroline Arthurs Property Advisory Logo'
  },
  {
    id: 3,
    name: 'Metal Roofing Australia',
    logo: '/assets/logos/logo (3).jpg',
    alt: 'Metal Roofing Australia Logo'
  },
  {
    id: 4,
    name: 'Sydney Home Upgrades',
    logo: '/assets/logos/logo (4).jpg',
    alt: 'Sydney Home Upgrades Logo'
  },
  {
    id: 5,
    name: 'CPAP Solutions Australia',
    logo: '/assets/logos/logo (5).jpg',
    alt: 'CPAP Solutions Australia Logo'
  },
  {
    id: 6,
    name: 'Brix Electrical',
    logo: '/assets/logos/logo (6).jpg',
    alt: 'Brix Electrical Logo'
  }
];

const TrustedByBusiness = ({ style_2, style_3 }: any) => {
  return (
    <>
      <section className={style_2 ? "cs_primary_bg" : ""} style={{overflow: 'visible', width: '100%', minWidth: '100vw'}}>
        <div style={{width: '100vw', margin: '0', padding: '0', overflow: 'visible'}}>
        
          <div className={`cs_section_heading cs_style_1 cs_type_1 ${style_2 ? 'cs_color_1' : ''}`} style={{textAlign: 'center', marginBottom: '80px', padding: '0 20px'}}>
            <div className="cs_section_heading_text" style={{position: 'relative', overflow: 'visible', width: '100%'}}>
              {/* Decorative background text */}
             
              
              {/* Main title - stylized two lines */}
              <div style={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}>
                <h2 className="cs_section_title" style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #FECA15 0%, #FFD700 50%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textAlign: 'center',
                  lineHeight: '1.1',
                  marginBottom: '0',
                  letterSpacing: '-0.5px',
                  textShadow: '0 4px 8px rgba(254, 202, 21, 0.2)',
                  whiteSpace: 'nowrap',
                  width: 'max-content',
                  margin: '0 auto',
                  overflow: 'visible',
                  minWidth: 'max-content'
                }}>
                  Trusted by Businesses That Trust Systems
                </h2>
                
              </div>
              
             
            </div>
          </div>
          <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push" style={{
            background: 'linear-gradient(135deg, rgba(254,202,21,0.08) 0%, rgba(255,255,255,0.12) 30%, rgba(254,202,21,0.05) 70%, rgba(255,215,0,0.08) 100%)',
            borderRadius: '25px',
            padding: '50px 0',
            margin: '30px 0',
            border: '2px solid rgba(254,202,21,0.2)',
            boxShadow: '0 20px 60px rgba(254,202,21,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              background: 'linear-gradient(45deg, transparent 48%, rgba(254,202,21,0.03) 49%, rgba(254,202,21,0.03) 51%, transparent 52%)',
              pointerEvents: 'none'
            }}></div>
            
            {/* Animated corner accents */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #FECA15, #FFD700)',
              borderRadius: '50%',
              opacity: '0.6',
              animation: 'pulse 3s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '30px',
              height: '30px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              borderRadius: '50%',
              opacity: '0.4',
              animation: 'pulse 3s ease-in-out infinite 1.5s'
            }}></div>
            
            <div className="cs_moving_section_in">
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={i} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 35px',
                    padding: '30px 35px',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(254,254,254,0.95) 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                    border: '1px solid rgba(254,202,21,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    minHeight: '120px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(0)',
                    cursor: 'pointer'
                  }}>
                    {/* Hover glow effect */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(135deg, rgba(254,202,21,0.1) 0%, rgba(255,215,0,0.05) 100%)',
                      borderRadius: '20px',
                      opacity: '0',
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none'
                    }}></div>
                    
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={180}
                      height={100}
                      style={{
                        objectFit: 'contain',
                        filter: 'grayscale(5%) contrast(1.05) brightness(1.02)',
                        transition: 'all 0.4s ease',
                        maxWidth: '100%',
                        height: 'auto',
                        position: 'relative',
                        zIndex: '2'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={`duplicate-${i}`} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 35px',
                    padding: '30px 35px',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(254,254,254,0.95) 100%)',
                    borderRadius: '20px',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.12), 0 5px 15px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                    border: '1px solid rgba(254,202,21,0.15)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    minHeight: '120px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(0)',
                    cursor: 'pointer'
                  }}>
                    {/* Hover glow effect */}
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(135deg, rgba(254,202,21,0.1) 0%, rgba(255,215,0,0.05) 100%)',
                      borderRadius: '20px',
                      opacity: '0',
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none'
                    }}></div>
                    
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={180}
                      height={100}
                      style={{
                        objectFit: 'contain',
                        filter: 'grayscale(5%) contrast(1.05) brightness(1.02)',
                        transition: 'all 0.4s ease',
                        maxWidth: '100%',
                        height: 'auto',
                        position: 'relative',
                        zIndex: '2'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
      
      {/* Enhanced animations and hover effects */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        
        .cs_partner_logo:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 25px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(254,202,21,0.2) !important;
        }
        
        .cs_partner_logo:hover > div {
          opacity: 1 !important;
        }
        
        .cs_partner_logo:hover img {
          transform: scale(1.05);
          filter: grayscale(0%) contrast(1.1) brightness(1.05) !important;
        }
        
        .cs_moving_section_wrap:hover {
          box-shadow: 0 30px 80px rgba(254,202,21,0.2), inset 0 1px 0 rgba(255,255,255,0.2) !important;
        }
        
        @media (max-width: 768px) {
          .cs_partner_logo {
            margin: 0 20px !important;
            padding: 20px 25px !important;
            min-height: 100px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TrustedByBusiness;


