/*
* 
* <div id="parent">
*  <div id="child">
*    <h1>hello world!</h1>
*    <h2>i am an h2 tag</h2>
*  </div>
*</div>
*
*
*/

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

console.log(heading); // it will return the object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);