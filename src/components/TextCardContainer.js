import React from "react";
import { TextCard } from "./Cards";
import Skeleton from "./Skeleton";

const TextCardContainer = ({ data = null }) => {
  const dummyData = {
    heading: "Get Flat 35% Off* on all Holiday Packages",
    description: "Pre-applied discount valid till 16th August 2020",
    cta: "BOOK NOW",
  };

  const cardData = data || dummyData;

  return (
    <Skeleton show={!data}>
      <TextCard {...cardData} />
    </Skeleton>
  );
};

export default TextCardContainer;
