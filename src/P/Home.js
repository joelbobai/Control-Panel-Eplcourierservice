import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Home = () => {
  const moveTo = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 20,
        padding: 10,
      }}
    >
      <Button
        variant="primary"
        style={{ height: 200, width: 200 }}
        onClick={() => moveTo("home_for_tracking")}
      >
        <b> TRACKING</b>
      </Button>
      <Button
        variant="secondary"
        style={{ height: 200, width: 200 }}
        onClick={() => moveTo("home_for_item")}
      >
        <b>ITEM</b>
      </Button>
    </div>
  );
};

export default Home;
