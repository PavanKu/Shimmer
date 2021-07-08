import React, { useEffect, useState } from "react";
import "./App.css";
import ImageCardContainer from "../ImageCardContainer";
import TextCardContainer from "../TextCardContainer";

function App() {
  const [asyncData, setAsyncData] = useState(null);
  const [asyncImgData, setAsyncImgData] = useState(null);
  const cardData = {
    heading: "Get Flat 35% Off* on all Holiday Packages",
    description: "Pre-applied discount valid till 16th August 2020",
    cta: "BOOK NOW",
  };

  const imageCardData = {
    image:
      "https://cdn.zeplin.io/5f437064b24ff532f81d4cf8/assets/E3B457A0-E274-4D09-B692-20ADF675FCFA.png",
    heading: "Waiting to travel back to your country? ",
    description: "Bhavya Bhatia",
  };

  useEffect(() => {
    window.setTimeout(() => {
      setAsyncData(cardData);
      setAsyncImgData(imageCardData);
    }, 2000);
  }, [cardData, imageCardData]);

  return (
    <div className="App">
      <header className="App-header">
        <div className={"marginRight10"}>
          <TextCardContainer data={asyncData} />
        </div>
        <div className={"marginRight10"}>
          <ImageCardContainer data={asyncImgData} />
        </div>
      </header>
    </div>
  );
}

export default App;
