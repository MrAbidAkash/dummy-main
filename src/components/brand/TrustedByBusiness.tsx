"use client";
import React from 'react';
import Image from 'next/image';

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
      <section className={style_2 ? "cs_primary_bg" : ""}>
        <div className="container">
        
          <div className={`cs_section_heading cs_style_1 cs_type_1 ${style_2 ? 'cs_color_1' : ''}`} style={{textAlign: 'left'}}>
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title cs_fs_72 cs_fs_lg_46" style={{whiteSpace: 'nowrap'}}>
                Real Businesses. 
              </h2>
              <h2 className="cs_section_title cs_fs_48 cs_fs_lg_32" style={{whiteSpace: 'nowrap', color: '', fontStyle: '', marginTop: '10px'}}>
                Real Success. Real Growth.
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_moving_section_wrap cs_bold cs_moving_section_hover_push" style={{
            background: 'linear-gradient(135deg, rgba(254,202,21,0.03) 0%, rgba(255,255,255,0.05) 50%, rgba(254,202,21,0.03) 100%)',
            borderRadius: '20px',
            padding: '40px 0',
            margin: '20px 0',
            border: '1px solid rgba(254,202,21,0.1)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="cs_moving_section_in">
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={i} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 30px',
                    padding: '20px 25px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    minHeight: '100px',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={160}
                      height={90}
                      style={{
                        objectFit: 'contain',
                        filter: 'grayscale(10%) contrast(1.1)',
                        transition: 'all 0.3s ease',
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="cs_moving_section">
                {business_logos.map((item, i) => (
                  <div key={`duplicate-${i}`} className="cs_partner_logo" style={{
                    display: 'inline-flex', 
                    margin: '0 30px',
                    padding: '20px 25px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    minHeight: '100px',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={160}
                      height={90}
                      style={{
                        objectFit: 'contain',
                        filter: 'grayscale(10%) contrast(1.1)',
                        transition: 'all 0.3s ease',
                        maxWidth: '100%',
                        height: 'auto'
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
    </>
  );
};

export default TrustedByBusiness;


