// const heading = React.createElement(
//   "h1",
//   { id: "header", xyz: "abc" },
//   "Hello world from react!"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am h1 element"),
      React.createElement("h1", {}, "I am h2 element")
    ),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 element"),
    React.createElement("h1", {}, "I am h2 element"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//console.log(parent);
