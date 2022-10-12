import React, { useEffect } from "react";
import { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Transition } from "react-d3-speedometer";
import colors from "../styles/_settings.scss";

const FearAndGreed = ({ fearAndGreedData }) => {
  const [colorMood, setColorMood] = useState("");

  const moodIndexCheck = (data) => {
    if (data <= 25) {
      return "Extreme fear";
    } else if (data > 25 && data <= 46) {
      return "Fear";
    } else if (data > 46 && data <= 54) {
      return "Neutral";
    } else if (data > 54 && data <= 75) {
      return "Greedy";
    } else if (data > 75 && data <= 100) {
      return "Too greedy";
    }
  };

  // allow to change color of Mood text for crypto fear index

  useEffect(() => {
    if (fearAndGreedData <= 25) {
      setColorMood(colors.red2);
    } else if (fearAndGreedData > 25 && fearAndGreedData <= 46) {
      setColorMood(colors.red1);
    } else if (fearAndGreedData > 46 && fearAndGreedData <= 54) {
      setColorMood(colors.yellow1);
    } else if (fearAndGreedData > 54 && fearAndGreedData <= 75) {
      setColorMood(colors.green2);
    } else if (fearAndGreedData > 75 && fearAndGreedData <= 100) {
      setColorMood(colors.green1);
    }
  }, [fearAndGreedData]);

  return (
    <>
      <div className="text-content">
        <h3>Fear & Greed Index</h3>
        <h4>Now :</h4>
        <h4 style={{ color: colorMood }}>{moodIndexCheck(fearAndGreedData)}</h4>
      </div>

      <div className="fear-and-greed-index">
        <ReactSpeedometer
          minValue={0}
          maxValue={100}
          customSegmentStops={[0, 25, 46, 54, 75, 100]}
          segmentColors={[
            colors.fearAndGreedExFear,
            colors.fearAndGreedFear,
            colors.fearAndGreedNeutral,
            colors.fearAndGreedGreedy,
            colors.fearAndGreedTooGreedy,
          ]}
          value={fearAndGreedData}
          fluidWidth={true}
          needleTransition={Transition.easeElastic}
          needleHeightRatio={0.65}
          ringWidth={33}
          textColor={"#ffffff"}
          valueTextFontWeight={"regular"}
          needleColor={colors.mainData}
          customSegmentLabels={[
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
            {
              text: "",
            },
          ]}
        />
      </div>
    </>
  );
};

export default FearAndGreed;
