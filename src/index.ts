import "./theme";
import { Box, Button } from "./lib";

function App() {
  const div = document.createElement("div");

  const button = document.createElement("button");

  button.append("hello world !!!");
  button.className = Button.contained;

  div.append(button);
  div.className = Box.flex;

  return div;
}

document.body.appendChild(App());
