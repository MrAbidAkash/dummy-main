"use client";

import React from "react";
import { motion } from "framer-motion";

const VideoHomeOne = ({ style_2, setIsVideoOpen }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {style_2 ? <div className="cs_height_100 cs_height_lg_60"></div> : null}
      <div className="container">
        <div className="cs_parallax">
          <a
            onClick={() => setIsVideoOpen(true)}
            className="cs_video_block cs_style1 cs_video_open cs_bg cs_parallax_bg"
            style={{
              backgroundImage: "url(/assets/img/video_block.jpg)",
              cursor: "pointer",
            }}
          >
            <span className="cs_player_btn cs_accent_color">
              <span></span>
            </span>
          </a>
        </div>
      </div>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </motion.div>
  );
};

export default VideoHomeOne;
