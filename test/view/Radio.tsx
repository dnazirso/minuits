import { MinUi } from "../../src/core";

const classes = MinUi.Css.Use("class", (theme) => ({
  span: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  label: {
    margin: theme.spacing?.inputs,
  },
  input: {
    padding: theme.spacing?.inputs,
    marginTop: "auto",
    marginBottom: "auto",
    border: `${theme.borderWidth?.button}px solid ${theme.chart?.borders?.input}`,
    focus: {
      isPseudo: true,
      outline: "none",
    },
  },
}));

export default function Radio(children: string | Node) {
  const span = document.createElement("span");
  span.className = classes.span!;

  const label = document.createElement("label");
  label.className = classes.label!;
  label.append(children);
  const input = document.createElement("input");
  input.type = "radio";
  input.className = classes.input!;
  span.append(label, input);

  return span;
}
