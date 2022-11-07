import { useState } from "react";
import "../src/styles/styles.scss";
import Card from "./components/card";

export default function ListingAd({ pic, title, address, description }) {
  const [showDescription, setShowDescription] = useState(false);
  const toggleOnClick = () => {
    setShowDescription(!showDescription);
  };
  return (
    <>
      <div className="App">
        <div className={"wrapper"}>
          {showDescription}
          <Card
            pic={pic}
            title={title}
            address={address}
            description={description}
            onClickShowDescription={toggleOnClick}
            isShowDescription={showDescription}
          />
        </div>
      </div>
    </>
  );
}
