import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   { id: "header", xyz: "abc" },
//   "Hello world from react!"
// );

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement(
//       "div",
//       { id: "child" },
//       React.createElement("h1", {}, "I am h1 element"),
//       React.createElement("h1", {}, "I am h2 element")
//     ),
//   ],
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am h1 element"),
//     React.createElement("h1", {}, "I am h2 element"),
//   ])
// );
const HeadingElement = <h1>this is react element</h1>;
const title1 = <h1>this is element</h1>;
const Title = () => <h1 className="component title">This is title componet</h1>;
const HeadingComponet = () => (
  <div id="container">
    <Title></Title>
    <Title />
    {Title()}
    {title1}
    <h1 className="heading">Namaste react using JSX</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponet />);
// root.render(HeadingElement);
//console.log(parent);
