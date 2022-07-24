import MinUi from "../core/MinUi";

const classes = MinUi.Css.Use("class", (theme) => ({
  Box: {
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
    [`.${classes.Box} > .${classes.Box}`]: {
      flexGrow: 1,
    },
  },
});

const { Box } = classes;
export default Box;
