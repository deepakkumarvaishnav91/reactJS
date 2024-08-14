import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement(
    "div",
    { id : "parent" },
    [React.createElement(
        "div",
        { id : "child"},[
            React.createElement("h1", {className:"heading1"}, "I am an h1 Tag!"),
            React.createElement("h2", {className:"heading2"}, "I am an h2 Tag!")
        ]),React.createElement(
            "div",
            { id : "child"},[
                React.createElement("h1", {className:"heading1"}, "I am an h1 Tag!"),
                React.createElement("h2", {className:"heading2"}, "I am an h2 Tag!")
            ])]
);


const heading = React.createElement("h1", {id:"heading"}, "Hello World from ReactJS!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);