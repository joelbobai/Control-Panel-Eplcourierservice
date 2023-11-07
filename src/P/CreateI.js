import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
const CreateI = () => {
  const moveTo = useNavigate();
  const [inputs, setInputs] = useState({
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

    // setInputs((prev) => ({
    //   ...prev,
    //   accountType: selectedValue,
    // }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(
        `https://eplcourierservice-backend.vercel.app/api/v1/item_tracking_Id/item/create`,
        inputs
      )
      .catch((err) => {
        moveTo("/add_new_tracking");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
      console.log(data);
      return data;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    sendRequest().then((data) => {
      try {
        // console.log(data);
        moveTo("/home_for_Item");
      } catch (error) {
        console.log(error);
      }
    });
  };
  // console.log(inputs);
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
        {/* <Form.Label htmlFor="basic-url">Location One</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
            name="location"
            onChange={handleSelectChangeLocationOne}
            value={locationOne.location}
            required
          />
          <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
        </InputGroup>
        <Form.Select
          value={locationOne.isThere}
          onChange={handleSelectChangeLocationOne}
          name="isThere"
          aria-label="Default select example"
        >
          <option>At The Location</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Date & Time"
            aria-label="Date & Time"
            name="date"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationOne}
            value={locationOne.date}
            required
          />
          <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="basic-url">Location Two</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"
            name="location"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationTwo}
            value={locationTwo.location}
            required
          />
          <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
        </InputGroup>
        <Form.Select
          value={locationTwo.isThere}
          name="isThere"
          onChange={handleSelectChangeLocationTwo}
          aria-label="Default select example"
        >
          <option>At The Location</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Date & Time"
            aria-label="Date & Time"
            aria-describedby="basic-addon2"
            name="date"
            onChange={handleSelectChangeLocationTwo}
            value={locationTwo.date}
            required
          />
          <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="basic-url">Location Three</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
            name="location"
            onChange={handleSelectChangeLocationThree}
            value={locationThree.location}
            required
          />
          <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
        </InputGroup>
        <Form.Select
          value={locationThree.isThere}
          name="isThere"
          onChange={handleSelectChangeLocationThree}
          aria-label="Default select example"
        >
          <option>At The Location</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Date & Time"
            aria-label="Date & Time"
            aria-describedby="basic-addon2"
            name="date"
            onChange={handleSelectChangeLocationThree}
            value={locationThree.date}
            required
          />
          <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="basic-url">Location Four</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationFour}
            value={locationFour.location}
            name="location"
            required
          />
          <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
        </InputGroup>
        <Form.Select
          value={locationFour.isThere}
          name="isThere"
          onChange={handleSelectChangeLocationFour}
          aria-label="Default select example"
        >
          <option>At The Location</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Date & Time"
            aria-label="Date & Time"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationFour}
            name="date"
            value={locationFour.date}
            required
          />
          <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
        </InputGroup>
        <Form.Label htmlFor="basic-url">Location Five</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationFive}
            name="location"
            value={locationFive.location}
            required
          />
          <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
        </InputGroup>
        <Form.Select
          value={locationFive.isThere}
          name="isThere"
          onChange={handleSelectChangeLocationFive}
          aria-label="Default select example"
        >
          <option>At The Location</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </Form.Select>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Date & Time"
            aria-label="Date & Time"
            aria-describedby="basic-addon2"
            onChange={handleSelectChangeLocationFive}
            name="date"
            value={locationFive.date}
            required
          />
          <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
        </InputGroup> */}
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
        {/* <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            placeholder="Total"
            aria-label="Amount (to the nearest dollar)"
            name="total"
            onChange={handleInputChange}
            value={inputs.total}
            required
          />
          <InputGroup.Text>Total</InputGroup.Text>
        </InputGroup> */}
        <Button variant="primary" type="submit">
          <b> Create</b>
        </Button>{" "}
      </form>
    </div>
  );
};

export default CreateI;
