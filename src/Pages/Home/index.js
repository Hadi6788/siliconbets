import Navbar from "../../Components/Navbar";
import WelcomeBanner from "../../Components/WelcomeBanner";
import Content from "../../Components/Content";
import React, { useEffect, useState } from "react";
import RecentlyAdded from "../../Components/RecentlyAdded";
import data from "../../data";
import Nft from "../../Components/Nft";

const Home = () => {
  const [items, setItems] = useState(data);

  const filtered = (title) => {
    const filteredData = data.filter((item) => {
      return item.title === title;
    });

    setItems(filteredData);
  };
  return (
    <>
      <Navbar />

      <WelcomeBanner />
      <Content />
      <RecentlyAdded items={items} />
      <Nft />
    </>
  );
};

export default Home;
