import minui from "../core/minuits";

const Box = minui.Use("class", (theme) => ({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: theme.chart?.main,
    borderRadius: theme.radius?.main,
    padding: theme.spacing?.main,
    margin: theme.spacing?.main,
  },
}));

minui.Add("media", {
  "(max-width: 450px)": {
    [`.${Box.flex} > .${Box.flex}`]: {
      flexGrow: 1,
    },
  },
});

export default Box;
