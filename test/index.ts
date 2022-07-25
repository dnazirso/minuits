import "./theme";
import { Box, Button, Radio } from "../src/lib";

function App() {
  const div = document.createElement("div");
  const button = document.createElement("button");
  const radio = document.createElement("input");

  button.append("hello world !!!");
  button.className = Button.contained!;
  radio.type = "radio";
  radio.className = Radio.input!;

  div.append(button, radio);
  div.className = Box.flex!;

  return div;
}

document.body.appendChild(App());
