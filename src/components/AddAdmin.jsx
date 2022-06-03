import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdmin } from "../redux/adminReducer";

function AddAdmin() {
  let dispatch = useDispatch();
  const [admin, setAdmin] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addAdmin({
        name: admin.name,
        username: admin.username,
        promocode: admin.promoCode,
      })
    );
  };
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setAdmin({ ...admin, [name]: value });
    console.log(admin);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Add admin</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={admin.name || ""}
        />
        <input
          type="text"
          name="username"
          id="username"
          value={admin.username || ""}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="number"
          name="promoCode"
          id="promoCode"
          onChange={handleChange}
          value={admin.promoCode || ""}
          placeholder="Promo Code"
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default AddAdmin;
