import Card from "../Card";
import React, { useEffect, useState } from "react";

import "./style.css";
// import Button from "../../Units/Button";
const RecentlyAdded = ({ items }) => {
  return (
    <div className="recentlyadded">
      <h1>Recently Added</h1>

      <div className="cardgrid">
        {items.map(({ title, desc, img }) => {
          return (
            <>
              <div>
                <Card title={title} desc={desc} img={img} />
              </div>
            </>
          );
        })}

        {/* <Card items={items} /> */}
      </div>
    </div>
  );
};

export default RecentlyAdded;
