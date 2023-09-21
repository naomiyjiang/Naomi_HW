//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const myname = "Naomi Jiang";
const year = "2023";

ReactDOM.render(
  <div>
    <p> My name is {myname}</p>
    <p> Copywright {year} </p>
  </div>,
  document.getElementById("root")
);
