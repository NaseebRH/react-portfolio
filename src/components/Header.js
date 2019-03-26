import React from "react";
import Button from "./Button";

const Header = () => (
  <div className="header">
    <h1>My Header!</h1>
    <div className="navigation">
      <Button children={"i am button"} />
    </div>
  </div>
);

export default Header;
