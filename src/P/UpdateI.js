import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//let firstRender = true;
const UpdateI = () => {
  const { id } = useParams();
  const moveTo = useNavigate();
  // const [trackingInfo, setTrackingInfo] = useState([]);
  // geting  user_tracking_Id
  const sendRequest = async () => {
    const res = await axios
      .get(
        `https://eplcourierservice-backend.vercel.app/api/v1/item_tracking_Id/_id/${id}`
      )
      .catch((err) => {
        moveTo("/");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      // console.log(data);
      return data;
    }
  };

  const [inputs, setInputs] = useState({
    _id: "",
    trackingID: "",
    itemName: "",
    itemPrice: "",
    itemQty: "",
    infoOne: "",
    infoTwo: "",
    infoThree: "",
  });

  const handleInputChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    sendRequest().then((data) => {
      try {
        // setTrackingInfo(data);
        setInputs((prev) => ({
          ...prev,
          _id: data[0]._id,
          trackingID: data[0].trackingID,
          itemName: data[0].itemName,
          itemPrice: data[0].itemPrice,
          itemQty: data[0].itemQty,
          infoOne: data[0].infoOne,
          infoTwo: data[0].infoTwo,
          infoThree: data[0].infoThree,
        }));
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const sendRequestP = async () => {
    const res = await axios
      .post(
        `https://eplcourierservice-backend.vercel.app/api/v1/item_tracking_Id/item/update`,
        inputs
      )
      .catch((err) => {
        moveTo("/add_new_tracking");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      // console.log(data);
      return data;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    sendRequestP().then((data) => {
      try {
        // console.log(data);
        moveTo("/home_for_item");
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // columnGap: 20,
        padding: 10,
      }}
    >
      <form
        style={{
          width: 500,
          //   height: "100vh",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          // columnGap: 20,
          padding: 10,
        }}
        onSubmit={handleFormSubmit}
      >
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Tracking-ID</InputGroup.Text>
          <Form.Control
            placeholder="Tracking-ID"
            aria-label="Tracking-ID"
            name="trackingID"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
            value={inputs.trackingID}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Item Name</InputGroup.Text>
          <Form.Control
            aria-label="itemName"
            aria-describedby="basic-addon1"
            name="itemName"
            placeholder="Item Name"
            onChange={handleInputChange}
            value={inputs.itemName}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Item Price</InputGroup.Text>
          <Form.Control
            placeholder="  Item Price"
            aria-label="  Item Price"
            aria-describedby="basic-addon1"
            name="itemPrice"
            onChange={handleInputChange}
            value={inputs.itemPrice}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Item Qty</InputGroup.Text>
          <Form.Control
            placeholder="Item Qty"
            aria-label="Item Qty"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
            name="itemQty"
            value={inputs.itemQty}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Info</InputGroup.Text>
          <Form.Control
            placeholder="Info One"
            aria-label="Amount (to the nearest dollar)"
            name="infoOne"
            onChange={handleInputChange}
            value={inputs.infoOne}
            required
          />
          <InputGroup.Text>One</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Info</InputGroup.Text>
          <Form.Control
            placeholder="Info Two"
            aria-label="Amount (to the nearest dollar)"
            name="infoTwo"
            onChange={handleInputChange}
            value={inputs.infoTwo}
            required
          />
          <InputGroup.Text>Two</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Info</InputGroup.Text>
          <Form.Control
            placeholder="Info Three"
            aria-label="Amount (to the nearest dollar)"
            name="infoThree"
            onChange={handleInputChange}
            value={inputs.infoThree}
            required
          />
          <InputGroup.Text>Three</InputGroup.Text>
        </InputGroup>
        <Button variant="primary" type="submit">
          <b> Update</b>
        </Button>{" "}
      </form>
    </div>
  );
};

export default UpdateI;
