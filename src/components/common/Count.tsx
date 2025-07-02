"use client";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
  text: string;
  add_style?: boolean;
}

const Count = ({ number, text, add_style }: CountType) => {
  return (
    <InView threshold={0.5}>
      {({ inView, ref }) => (
        <div ref={ref} className="cs_counter">
          <div className="cs_counter_number">
            {inView && (
              <CountUp
                start={0}
                end={number}
                duration={2.5}
                separator=","
                useEasing={true}
              />
            )}
            {add_style && <span>+</span>}
          </div>
          <div className="cs_counter_text">{text}</div>
        </div>
      )}
    </InView>
  );
};

export default Count;
