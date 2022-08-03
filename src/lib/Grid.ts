import { Use } from "../core/minuits";

const Grid = Use("class", (theme) => ({
  auto: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridGap: theme.spacing?.main,
    padding: theme.spacing?.main,
  },
}));

export default Grid;
