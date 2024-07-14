const heading = React.createElement(
  "h1",
  { id: "heading", xyx: "rrf" },
  "Hello World from React"
);
const parent = React.createElement(
  "div",
  { id: "parent", xyx: "rrf" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello ji"),
    React.createElement("h1", {}, "hello ji"),
  ])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
root.render(heading);
