import React from "react";
import classes from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const LowerHeader = () => {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <AiOutlineMenu /> All
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
