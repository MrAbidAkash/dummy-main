
'use client'


import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import ServiceHomeFour from '@/components/service/ServiceHomeFour';
import PortfolioHomeFour from '@/components/portfolio/PortfolioHomeFour';
import Testimonial from '@/components/testimonial/Testimonial';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';



// export const metadata = {
//   title: "Creative Protfolio Leads360 - Digital  Creative Agency Next js Template",
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFour />
            <ServiceHomeFour />
            <PortfolioHomeOne />
            <Testimonial />
            <BlogHomeOne style_2={true} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;