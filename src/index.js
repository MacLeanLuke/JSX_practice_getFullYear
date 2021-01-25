//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

const React = require("react");
const ReactDOM = require("react-dom");

var d = new Date();
var n = d.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by Luke MacLean</p>
    <p>Copyright {n}</p>
  </div>,
  document.getElementById("root")
);
