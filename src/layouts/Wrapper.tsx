 
 'use client';

import { useEffect } from "react";  
import { gsap } from 'gsap';

import animationTitle from "@/utils/animationTitle";
// MouseMove component removed to disable bubble effect
import ScrollToTop from "@/components/common/ScrollToTop";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";


import { ScrollSmoother, } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);


const Wrapper = ({ children }: any) => {  

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {

    // buttonAnimation()
    // animationTitle()
    scrollSmother();
  }, [])



  return <>
    {/* MouseMove component removed to disable bubble effect */}
    {children}
    <ScrollToTop />

  </>;
};

export default Wrapper;

