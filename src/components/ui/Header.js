import React from "react";
import logo from "../../img/logo.svg";

const Header = ({ Logout, user }) => {
  return (
    <header className="center">
      <img src={logo} alt="logo" /> <h1>Credit Cards Canada</h1>
      <div className="user-details">
        <h3>Welcome {user.email}</h3>
        <br />
        <button onClick={Logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
