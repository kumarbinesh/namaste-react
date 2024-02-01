{
  /* <div id="parent">
    <div id="child">
        <h1>i am an h1</h1>
        <h2>i am an h1</h2>
    </div>
    <div id="child2">
    <h1>i am an h1</h1>
        <h2>i am an h1</h2>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head" }, "i am an h1"),
    React.createElement("h2", { id: "bad" }, "i am an h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am an h3"),
    React.createElement("h2", {}, "i am an h4"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "hello react world"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
