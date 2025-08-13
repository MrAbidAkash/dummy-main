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
            padding: '50px 0',
            margin: '30px 0',
            position: 'relative',
            overflow: 'hidden',
          }}>
            
            <div className="cs_moving_section_in">
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={i} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 15px',
                    padding: '30px 40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    minHeight: '90px',
                    width: '240px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(0)',
                    cursor: 'pointer'
                  }}>
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={180}
                      height={70}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        filter: 'grayscale(0%)',
                        transition: 'all 0.3s ease',
                        width: '180px',
                        height: '70px',
                        maxWidth: '180px',
                        maxHeight: '70px'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={`duplicate-${i}`} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 15px',
                    padding: '30px 40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    minHeight: '90px',
                    width: '240px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(0)',
                    cursor: 'pointer'
                  }}>
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={180}
                      height={70}
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        filter: 'grayscale(0%)',
                        transition: 'all 0.3s ease',
                        width: '180px',
                        height: '70px',
                        maxWidth: '180px',
                        maxHeight: '70px'
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
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12), 0 4px 12px rgba(254,202,21,0.15) !important;
        }
        
        .cs_partner_logo:hover > div {
          opacity: 1 !important;
        }
        
        .cs_partner_logo:hover img {
          transform: scale(1.02);
          filter: grayscale(0%) contrast(1.05) brightness(1.03) !important;
        }
        
        .cs_moving_section_wrap:hover {
          
        }
        
        @media (max-width: 768px) {
          .cs_partner_logo {
            margin: 0 15px !important;
            padding: 15px 20px !important;
            min-height: 70px !important;
            width: 160px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TrustedByBusiness;


