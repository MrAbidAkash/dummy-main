import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logob.png";
import { motion } from "framer-motion";

const BannerAbout = () => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="relative cs_section_heading_text">
              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
                className="cs_section_title anim_text_writting"
              >
                How Our Agency is Transforming <br /> Businesses and Brands
                through <br /> Online Solutions
              </motion.h2>
            </div>
            <div className="cs_section_heading_right">
              <div className="cs_animated_badge">
                <div className="rounded_text rotating">
                  <svg viewBox="0 0 200 200">
                    <path
                      id="textPath"
                      d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                      transform="translate(100,100)"
                      fill="none"
                      strokeWidth="0"
                    ></path>
                    <g fontSize="22.1px">
                      <text textAnchor="start">
                        <textPath
                          className="coloring"
                          href="#textPath"
                          startOffset="0%"
                        >
                          Leads360 Digital Agency . Leads360 Digital Agency .
                          &nbsp;
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="position-absolute cs_ceneter_text">
                  <Image src={logo} alt="" style={{ width: "240px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAbout;
