import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import "./Modal.css";

function Modal({ visible, setVisible }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      console.log(name, email, phone);
      setVisible(false);
    } else {
      alert("some values are missing");
    }
  };
  return (
    <>
      <Rodal
        visible={visible}
        onClose={() => setVisible(false)}
        animation="zoom"
        duration={200}
        width={300}
        height={500}
        className="rodal-modal"
      >
        <h4>Enter Details</h4>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="name">FullName</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" class="submit">
            Submit
          </button>
        </form>
      </Rodal>
    </>
  );
}

export default Modal;
