import React from "react";
import ReactDOM from "react-dom/client";

//JSX (javascript XML) -> syntax extention for javascript, JSX is not writing HTML in javascript, it is like HTML-like/XML-like syntax.
// JSX - transpiled before it reaches to js engine. transpiled done by parcel through babel package.
// JSX conevert into React.createElement => JS object => HTML Element(render)
//const heading = ( <h1 id ="heading" className="head" tabIndex="1"> Deepak Kumar Vaishnav using JSX </h1> ); // jsx (react element)

// react Component
// 1. Class based component (old way of writing code) - use JS classes
// 2. Functional component (New way of writing code) - use JS functions. A function which return some peice of JSX (react element).

// component composition - calling a functinal compoment inside a functional component

// React functional component 

const Title1 = () => (<h1 className="head"> Deepak Kumar Vaishnav</h1>);

const number1 = 1000;

const Title = function () {
return (
    <h1 className="head"> Deepak Kumar Vaishnav</h1> 
)
};

// Title and Title1 are same

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title> </Title>   
        {Title()}
        <h2>{number1}</h2>
        <h3>{number1 + 500}</h3>
        <h2 className="header">Return React Functional Component</h2>
    </div>
);

const fn = () => true; 

const fn2 = () => { return true }; // both functions fn and fn2 are same.

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render( <HeadingComponent />);