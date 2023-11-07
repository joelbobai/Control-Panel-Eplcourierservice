import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import ItemDB from "../C/ItemDB";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";

//let firstRender = true;
const HomeI = () => {
  const moveTo = useNavigate();
  const [trackingInfo, setTrackingInfo] = useState([]);

  // get all tracking
  const sendRequest = async () => {
    const res = await axios
      .get(
        `https://eplcourierservice-backend.vercel.app/api/v1/item_tracking_Id/item/get_all`
      )
      .catch((err) => {
        // moveTo("/");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      // console.log(data);
      return data;
    }
  };

  useEffect(() => {
    //   if (firstRender) {
    //  firstRender = false;
    sendRequest().then((data) => {
      try {
        setTrackingInfo(data);
      } catch (error) {
        console.log(error);
      }
    });
    //  }
  });
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: 10,
      }}
    >
      <Button variant="primary" onClick={() => moveTo("/add_new_item")}>
        <b> Add</b>
      </Button>
      <div
        style={{
          width: "100%",
          // height: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 20,
          padding: 10,
        }}
      >
        <Accordion defaultActiveKey="0">
          {trackingInfo?.map((data) => (
            <ItemDB
              key={data._id}
              _id={data._id}
              trackingID={data.trackingID}
              itemName={data.itemName}
              itemPrice={data.itemPrice}
              itemQty={data.itemQty}
              infoOne={data.infoOne}
              infoTwo={data.infoTwo}
              infoThree={data.infoThree}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HomeI;
