"use client";

import React, { useState } from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroHomeOne from "@/components/hero/HeroHomeOne";
import AboutHomeOne from "@/components/about/AboutHomeOne";
import WhoWeWorkFor from "@/components/common/WhoWeWorkFor";
import MarqueeAreaHomeOne from "@/components/brand/MarqueeAreaHomeOne";
import PortfolioHomeOne from "@/components/portfolio/PortfolioHomeOne";
import AwardsHomeOne from "@/components/awards/AwardsHomeOne";
import Testimonial from "@/components/testimonial/Testimonial";
import FunFactHomeOne from "@/components/funfact/FunFactHomeOne";
import TrustedByBusiness from "@/components/brand/TrustedByBusiness";
import VideoHomeOne from "@/components/video/VideoHomeOne";
import BlogHomeOne from "@/components/blog/BlogHomeOne";
import SubscribeHomeOne from "@/components/subscribe/SubscribeHomeOne";
import BrandHomeOne from "@/components/brand/BrandHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Wrapper from "@/layouts/Wrapper";
import VideoPopup from "@/components/modals/VideoPopup";
import QuizModal from "@/components/quizModal/QuizModal";
import FaqArea from "@/components/faq/FaqArea";
import CTA from "@/components/common/CTA";

// export const metadata = {
//   title: "Leads360 - Digital  Creative Agency Next js Template",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            {/* <MarqueeAreaHomeOne /> */}
            <WhoWeWorkFor />
            <AboutHomeOne />
            {/* <ServiceHomeOne /> */}
            {/* <AwardsHomeOne /> */}
            <Testimonial />
            {/* <TrustedByBusiness /> */}
            {/* <VideoHomeOne setIsVideoOpen={setIsVideoOpen} /> */}
            {/* <BlogHomeOne /> */}
            {/* <FaqArea /> */}
            <CTA
              title="Ready to Transform Your Business?"
              subtitle="Join forward-thinking business owners who have eliminated chaos and achieved scalable growth with our proven digital marketing strategies, CRM optimization, and business automation solutions."
              buttonText="Start Your Digital Transformation"
            />
            {/* <SubscribeHomeOne /> */}

          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;
