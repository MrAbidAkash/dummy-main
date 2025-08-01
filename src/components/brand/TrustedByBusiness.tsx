"use client";
import React from 'react';
import Image from 'next/image';

// You'll need to add the actual logo images to your assets
// For now, I'm using existing partner logos as placeholders - update these with your actual business logos
const business_logos = [
  {
    id: 1,
    name: 'Brick Selector',
    logo: '/assets/img/partner_1.svg', // Update with actual Brick Selector logo
    alt: 'Brick Selector Logo'
  },
  {
    id: 2,
    name: 'Inga',
    logo: '/assets/img/partner_2.svg', // Update with actual Inga logo
    alt: 'Inga Logo'
  },
  {
    id: 3,
    name: 'Ashofix',
    logo: '/assets/img/partner_3.svg', // Update with actual Ashofix logo
    alt: 'Ashofix Logo'
  },
  {
    id: 4,
    name: 'C-PAP Services',
    logo: '/assets/img/partner_4.svg', // Update with actual C-PAP Services logo
    alt: 'C-PAP Services Logo'
  }
];

const TrustedByBusiness = ({ style_2, style_3 }: any) => {
  return (
    <>
      <section className={style_2 ? "cs_primary_bg" : ""}>
        <div className="container">
          <div className="cs_height_140 cs_height_lg_70"></div>
          <div className={`cs_section_heading cs_style_1 cs_type_1 text-center ${style_2 ? 'cs_color_1' : ''}`}>
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title cs_fs_72 cs_fs_lg_46">
                Trusted by Businesses
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="row align-items-center justify-content-center">
            {business_logos.map((item, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 cs_mb_40">
                <div className="cs_partner_logo text-center">
                  <Image
                    src={item.logo}
                    alt={item.alt}
                    width={150}
                    height={80}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="cs_height_140 cs_height_lg_70"></div>
        </div>
      </section>
      {style_3 ? null : <div className="cs_height_150 cs_height_lg_60"></div>}
    </>
  );
};

export default TrustedByBusiness;


