import MinUi from "../core/MinUi";

const classes = MinUi.Css.Use("class", (theme) => ({
  mbx: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.chart?.main,
    borderRadius: theme.radius?.main,
    padding: theme.spacing?.main,
    margin: theme.spacing?.main,
  },
}));

MinUi.Css.Add("media", {
  "(max-width: 450px)": {
    [`.${classes.mbx} > .${classes.mbx}`]: {
      flexGrow: 1,
    },
  },
});

export default function Box(children: string | Node) {
  const div = document.createElement("div");

  div.append(children);
  div.className = classes.mbx;

  return div;
}
