import minui from "../core/minuits";

const Grid = minui.Use("class", (theme) => ({
  auto: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: theme.spacing?.main,
    padding: theme.spacing?.main,
  },
}));

export default Grid;
