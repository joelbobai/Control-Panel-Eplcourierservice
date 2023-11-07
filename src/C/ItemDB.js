import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const ItemDB = ({
  _id,
  trackingID,
  itemName,
  itemPrice,
  itemQty,
  infoOne,
  infoTwo,
  infoThree,
}) => {
  const moveTo = useNavigate();
  const [toast, setToast] = useState(false);
  const deleteT = () => {
    setToast(true);
  };
  const sendRequest = async () => {
    const res = await axios
      .post(
        `https://eplcourierservice-backend.vercel.app/api/v1/item_tracking_Id/item/delete`,
        {
          _id: _id,
        }
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
  return (
    <>
      {toast && (
        <Toast
          className="d-inline-block m-1 to"
          bg="warning"
          onClick={() => {
            setToast(false);
          }}
        >
          <Toast.Header>
            <img
              src="https://tyson-west.github.io/Tracking-site/Public/images/favicon_io/favicon-32x32.png"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">EPL</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className={"text-white"}>
            You want to delete a collection in the database which cannot be
            recover?{" "}
            <Button
              variant="danger"
              style={{ marginLeft: 10 }}
              onClick={() => sendRequest()}
            >
              YES
            </Button>
          </Toast.Body>
        </Toast>
      )}
      <Accordion.Item eventKey={_id}>
        <Accordion.Header>
          # <b> {trackingID}</b>{" "}
          <Button
            variant="warning"
            style={{ marginLeft: 10 }}
            onClick={() => moveTo(`/update_item/${_id}`)}
          >
            Update
          </Button>{" "}
          <Button variant="danger" style={{ marginLeft: 10 }} onClick={deleteT}>
            Delete
          </Button>{" "}
        </Accordion.Header>
        <Accordion.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Tracking-ID</InputGroup.Text>
            <Form.Control
              placeholder={trackingID}
              aria-label="Tracking-ID"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Item Name</InputGroup.Text>
            <Form.Control
              placeholder={itemName}
              aria-label="Item Name"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Item Price</InputGroup.Text>
            <Form.Control
              placeholder={itemPrice}
              aria-label=" Item Price"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Item Qty</InputGroup.Text>
            <Form.Control
              placeholder={itemQty}
              aria-label="Item Qty"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Info</InputGroup.Text>
            <Form.Control
              placeholder={infoOne}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>One</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Info</InputGroup.Text>
            <Form.Control
              placeholder={infoTwo}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Two</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Info</InputGroup.Text>
            <Form.Control
              placeholder={infoThree}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Three</InputGroup.Text>
          </InputGroup>

          {/* <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              placeholder={total}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Total</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Location One</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationOneLocation}
              aria-label="Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={String(locationOneAtLocation)}
              aria-label="At The Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">At The Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationOneDate}
              aria-label="Date & Time"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Location Two</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationTwoLocation}
              aria-label="Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={String(locationTwoAtLocation)}
              aria-label="At The Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">At The Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationTwoDate}
              aria-label="Date & Time"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Location Three</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationThreeLocation}
              aria-label="Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={String(locationThreeAtLocation)}
              aria-label="At The Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">At The Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationThreeDate}
              aria-label="Date & Time"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Location Four</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationFourLocation}
              aria-label="Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={String(locationFourAtLocation)}
              aria-label="At The Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">At The Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationFourDate}
              aria-label="Date & Time"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Location Five</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationFiveLocation}
              aria-label="Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={String(locationFiveAtLocation)}
              aria-label="At The Location"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">At The Location</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={locationFiveDate}
              aria-label="Date & Time"
              aria-describedby="basic-addon2"
              disabled
            />
            <InputGroup.Text id="basic-addon2">Date & Time</InputGroup.Text>
          </InputGroup> */}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default ItemDB;
