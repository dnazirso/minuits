import { MinUi } from "../core";

const classes = MinUi.Css.Use("class", (theme) => ({
  Checkbox: {
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

const { Checkbox } = classes;

export default Checkbox;
