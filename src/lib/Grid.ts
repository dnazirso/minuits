import MinUi from "../core/MinUi";

const Grid = MinUi.Use("class", (theme) => ({
  auto: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: theme.spacing?.main,
    padding: theme.spacing?.main,
  },
}));

export default Grid;
