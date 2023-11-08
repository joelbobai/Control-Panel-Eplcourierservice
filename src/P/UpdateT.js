import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//let firstRender = true;
const UpdateT = () => {
  const { id } = useParams();
  const moveTo = useNavigate();
  const [trackingInfo, setTrackingInfo] = useState([]);
  // geting  user_tracking_Id
  const sendRequest = async () => {
    const res = await axios
      .get(
        `https://eplcourierservice-backend.vercel.app/api/v1/user_tracking_Id/${id}`
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
    trackingId: "",
    orderDate: "",
    estimatedDelivery: "",
    locationOne: {
      location: "",
      isThere: "",
      date: "",
    },
    locationTwo: {
      location: "",
      isThere: "",
      date: "",
    },
    locationThree: {
      location: "",
      isThere: "",
      date: "",
    },
    locationFour: {
      location: "",
      isThere: "",
      date: "",
    },
    locationFive: {
      location: "",
      isThere: "",
      date: "",
    },
    address: "",
    discount: "",
    delivery: "",
    tax: "",
    total: "",
  });
  const [locationOne, setLocationOne] = useState({
    location: "",
    isThere: "",
    date: "",
  });
  const handleSelectChangeLocationOne = (event) => {
    setLocationOne((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [locationTwo, setLocationTwo] = useState({
    location: "",
    isThere: "",
    date: "",
  });
  const handleSelectChangeLocationTwo = (event) => {
    setLocationTwo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [locationThree, setLocationThree] = useState({
    location: "",
    isThere: "",
    date: "",
  });
  const handleSelectChangeLocationThree = (event) => {
    setLocationThree((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [locationFour, setLocationFour] = useState({
    location: "",
    isThere: "",
    date: "",
  });
  const handleSelectChangeLocationFour = (event) => {
    setLocationFour((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [locationFive, setLocationFive] = useState({
    location: "",
    isThere: "",
    date: "",
  });

  const handleSelectChangeLocationFive = (event) => {
    setLocationFive((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleInputChange = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setInputs((prev) => ({
      ...prev,
      locationOne: {
        location: locationOne.location,
        isThere: locationOne.isThere,
        date: locationOne.date,
      },
    }));
    setInputs((prev) => ({
      ...prev,
      locationTwo: {
        location: locationTwo.location,
        isThere: locationTwo.isThere,
        date: locationTwo.date,
      },
    }));
    setInputs((prev) => ({
      ...prev,
      locationThree: {
        location: locationThree.location,
        isThere: locationThree.isThere,
        date: locationThree.date,
      },
    }));
    setInputs((prev) => ({
      ...prev,
      locationFour: {
        location: locationFour.location,
        isThere: locationFour.isThere,
        date: locationFour.date,
      },
    }));
    setInputs((prev) => ({
      ...prev,
      locationFive: {
        location: locationFive.location,
        isThere: locationFive.isThere,
        date: locationFive.date,
      },
    }));
    // setInputs((prev) => ({
    //   ...prev,
    //   accountType: selectedValue,
    // }));
  };
  useEffect(() => {
    sendRequest().then((data) => {
      try {
        setTrackingInfo(data);
        setInputs((prev) => ({
          ...prev,
          trackingId: data.trackingId,
          orderDate: data.orderDate,
          estimatedDelivery: data.estimatedDelivery,
          address: data.address,
          discount: data.discount,
          delivery: data.delivery,
          tax: data.tax,
          total: data.total,
        }));
        setLocationFive((prev) => ({
          ...prev,
          location: data.locationFive?.location,
          isThere: data.locationFive?.isThere,
          date: data.locationFive?.date,
        }));
        setLocationOne((prev) => ({
          ...prev,
          location: data.locationOne?.location,
          isThere: data.locationOne?.isThere,
          date: data.locationOne?.date,
        }));
        setLocationTwo((prev) => ({
          ...prev,
          location: data.locationTwo?.location,
          isThere: data.locationTwo?.isThere,
          date: data.locationTwo?.date,
        }));
        setLocationThree((prev) => ({
          ...prev,
          location: data.locationThree?.location,
          isThere: data.locationThree?.isThere,
          date: data.locationThree?.date,
        }));
        setLocationFour((prev) => ({
          ...prev,
          location: data.locationFour?.location,
          isThere: data.locationFour?.isThere,
          date: data.locationFour?.date,
        }));
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  const sendRequestP = async () => {
    const res = await axios
      .post(
        `https://eplcourierservice-backend.vercel.app/api/v1/user_tracking_Id/tracking/update`,
        {
          _id: trackingInfo._id,
          trackingId: inputs.trackingId,
          orderDate: inputs.orderDate,
          estimatedDelivery: inputs.estimatedDelivery,
          locationOne: {
            location: locationOne.location,
            isThere: locationOne.isThere,
            date: locationOne.date,
          },
          locationTwo: {
            location: locationTwo.location,
            isThere: locationTwo.isThere,
            date: locationTwo.date,
          },
          locationThree: {
            location: locationThree.location,
            isThere: locationThree.isThere,
            date: locationThree.date,
          },
          locationFour: {
            location: locationFour.location,
            isThere: locationFour.isThere,
            date: locationFour.date,
          },
          locationFive: {
            location: locationFive.location,
            isThere: locationFive.isThere,
            date: locationFive.date,
          },
          address: inputs.address,
          discount: inputs.discount,
          delivery: inputs.delivery,
          tax: inputs.tax,
          total: inputs.total,
        }
      )
      .catch((err) => {
        moveTo("/add_new_tracking");
        // errorHandle(err.response?.data);
        console.log(err, err?.response?.data);
      });

    if (res) {
      const data = await res?.data;
       console.log(data);
        console.log( {
          _id: trackingInfo._id,
          trackingId: inputs.trackingId,
          orderDate: inputs.orderDate,
          estimatedDelivery: inputs.estimatedDelivery,
          locationOne: {
            location: locationOne.location,
            isThere: locationOne.isThere,
            date: locationOne.date,
          },
          locationTwo: {
            location: locationTwo.location,
            isThere: locationTwo.isThere,
            date: locationTwo.date,
          },
          locationThree: {
            location: locationThree.location,
            isThere: locationThree.isThere,
            date: locationThree.date,
          },
          locationFour: {
            location: locationFour.location,
            isThere: locationFour.isThere,
            date: locationFour.date,
          },
          locationFive: {
            location: locationFive.location,
            isThere: locationFive.isThere,
            date: locationFive.date,
          },
          address: inputs.address,
          discount: inputs.discount,
          delivery: inputs.delivery,
          tax: inputs.tax,
          total: inputs.total,
        });
      return data;
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    sendRequestP().then((data) => {
      try {
        // console.log(data);
        moveTo("/home_for_tracking");
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
            name="trackingId"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
            value={inputs.trackingId}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Order-Date</InputGroup.Text>
          <Form.Control
            aria-label="Order-Date"
            aria-describedby="basic-addon1"
            name="orderDate"
            placeholder="Order-Date"
            onChange={handleInputChange}
            value={inputs.orderDate}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">
            Estimated-Delivery
          </InputGroup.Text>
          <Form.Control
            placeholder="Estimated-Delivery"
            aria-label="Estimated-Delivery"
            aria-describedby="basic-addon1"
            name="estimatedDelivery"
            onChange={handleInputChange}
            value={inputs.estimatedDelivery}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
          <Form.Control
            placeholder="Address"
            aria-label="Address"
            aria-describedby="basic-addon1"
            onChange={handleInputChange}
            name="address"
            value={inputs.address}
            required
          />
        </InputGroup>
        <Form.Label htmlFor="basic-url">Location One</Form.Label>
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
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            placeholder="Discount"
            aria-label="Amount (to the nearest dollar)"
            name="discount"
            onChange={handleInputChange}
            value={inputs.discount}
            required
          />
          <InputGroup.Text>Discount</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            placeholder="Delivery"
            aria-label="Amount (to the nearest dollar)"
            name="delivery"
            onChange={handleInputChange}
            value={inputs.delivery}
            required
          />
          <InputGroup.Text>Delivery</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            placeholder="Tax"
            aria-label="Amount (to the nearest dollar)"
            name="tax"
            onChange={handleInputChange}
            value={inputs.tax}
            required
          />
          <InputGroup.Text>Tax</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-3">
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
        </InputGroup>
        <Button variant="primary" type="submit">
          <b> Update</b>
        </Button>{" "}
      </form>
    </div>
  );
};

export default UpdateT;
