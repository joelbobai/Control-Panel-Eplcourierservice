import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import TrackingDB from "../C/TrackingDB";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import axios from "axios";

//let firstRender = true;
const HomeT = () => {
  const moveTo = useNavigate();
  const [trackingInfo, setTrackingInfo] = useState([]);

  // get all tracking
  const sendRequest = async () => {
    const res = await axios
      .get(
        `https://eplcourierservice-backend.vercel.app/api/v1/user_tracking_Id/tracking/get_all`
      )
      .catch((err) => {
        // moveTo("/");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      //  console.log(data);
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
      <Button variant="primary" onClick={() => moveTo("/add_new_tracking")}>
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
            <TrackingDB
              key={data._id}
              _id={data._id}
              trackingId={data.trackingId}
              orderDate={data.orderDate}
              estimatedDelivery={data.estimatedDelivery}
              locationOneLocation={data.locationOne.location}
              locationOneAtLocation={data.locationOne.isThere}
              locationOneDate={data.locationOne.date}
              locationTwoLocation={data.locationTwo.location}
              locationTwoAtLocation={data.locationTwo.isThere}
              locationTwoDate={data.locationTwo.date}
              locationThreeLocation={data.locationThree.location}
              locationThreeAtLocation={data.locationThree.isThere}
              locationThreeDate={data.locationThree.date}
              locationFourLocation={data.locationFour.location}
              locationFourAtLocation={data.locationFour.isThere}
              locationFourDate={data.locationFour.date}
              locationFiveLocation={data.locationFive?.location}
              locationFiveAtLocation={data.locationFive?.isThere}
              locationFiveDate={data.locationFive?.date}
              address={data.address}
              discount={data.discount}
              delivery={data.delivery}
              tax={data.tax}
              total={data.total}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HomeT;
