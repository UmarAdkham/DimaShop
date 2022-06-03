import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addShop } from "../redux/shopReducer";

function AddShop() {
  const [shop, setShop] = useState({});
  const errorText = useRef(0);
let dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    if (shop.name  && shop.address) {
      dispatch(addShop({name:shop.name,address:shop.address}))
    } else {
      errorText.current.innerText = 'Fill out the input fields'
    }
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setShop({ ...shop, [name]: value });
    console.log(shop);
  };
  return (
    <>
      <div>
        <h3>Create shop</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={shop.name || ""}
            placeholder="Enter name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="address"
            value={shop.address || ""}
            placeholder="Enter address"
          />
          <button>Add</button>
          <p ref={errorText}></p>
        </form>
      </div>
    </>
  );
}

export default AddShop;
