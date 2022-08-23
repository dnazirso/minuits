import { Use } from "../../src/core";

const Radio = Use("class", (theme) => ({
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

export default Radio;
