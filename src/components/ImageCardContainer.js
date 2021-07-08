import React from "react";
import { ImageCard } from "./Cards";
import Skeleton from "./Skeleton";

const ImageCardContainer = ({ data = null }) => {
  // Dummy data for image is a 1x1 transparent PNG image data
  const dummyData = {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
    heading: "Waiting to travel back to your country? ",
    description: "Bhavya Bhatia",
  };

  const cardData = data || dummyData;

  return (
    <Skeleton show={!data}>
      <ImageCard {...cardData} />
    </Skeleton>
  );
};

export default ImageCardContainer;
