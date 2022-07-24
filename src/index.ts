import "./theme";
import Box from "./lib/Box";

function App() {
  const div = document.createElement("div");

  div.append("hello world !!!");
  div.className = Box.flex;

  return div;
}

document.body.appendChild(App());
