import MinUi from "../core/MinUi";

const classes = MinUi.Css.Use("class", (theme) => ({
  Grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: theme.spacing?.main,
    padding: theme.spacing?.main,
  },
}));

const { Grid } = classes;

export default Grid;
