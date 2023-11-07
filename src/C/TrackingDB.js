import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
const TrackingDB = ({
  _id,
  trackingId,
  orderDate,
  estimatedDelivery,
  locationOneLocation,
  locationOneAtLocation,
  locationOneDate,
  locationTwoLocation,
  locationTwoAtLocation,
  locationTwoDate,
  locationThreeLocation,
  locationThreeAtLocation,
  locationThreeDate,
  locationFourLocation,
  locationFourAtLocation,
  locationFourDate,
  locationFiveLocation,
  locationFiveAtLocation,
  locationFiveDate,
  address,
  discount,
  delivery,
  tax,
  total,
}) => {
  const moveTo = useNavigate();
  const [toast, setToast] = useState(false);
  const deleteT = () => {
    setToast(true);
  };
  const sendRequest = async () => {
    const res = await axios
      .post(
        `https://eplcourierservice-backend.vercel.app/api/v1/user_tracking_Id/tracking/delete`,
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
      <Accordion.Item eventKey={trackingId}>
        <Accordion.Header>
          # <b> {trackingId}</b>{" "}
          <Button
            variant="warning"
            style={{ marginLeft: 10 }}
            onClick={() => moveTo(`/update_tracking/${trackingId}`)}
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
              placeholder={trackingId}
              aria-label="Tracking-ID"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Order-Date</InputGroup.Text>
            <Form.Control
              placeholder={orderDate}
              aria-label="Order-Date"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Estimated-Delivery
            </InputGroup.Text>
            <Form.Control
              placeholder={estimatedDelivery}
              aria-label="Estimated-Delivery"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
            <Form.Control
              placeholder={address}
              aria-label="Address"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              placeholder={discount}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Discount</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              placeholder={delivery}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Delivery</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              placeholder={tax}
              aria-label="Amount (to the nearest dollar)"
              disabled
            />
            <InputGroup.Text>Tax</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
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
          </InputGroup>

          {/* <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>

        <InputGroup>
          <InputGroup.Text>With textarea</InputGroup.Text>
          <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup> */}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default TrackingDB;
