import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.username == "superadmin" && user.password == 5) {
      alert("successs!!");
    } else {
      alert("ooppsss smth wrong");
    }
  };
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          value={user.username || ""}
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={user.password || ""}
          placeholder="enter password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
