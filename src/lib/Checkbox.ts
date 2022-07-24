import { MinUi } from "../core";

const Checkbox = MinUi.Css.Use("class", (theme) => ({
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

export default Checkbox;
