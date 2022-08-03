import minui from "../core/minuits";

const NavBar = minui.Use("class", (theme) => ({
  navbar: {
    top: 0,
    left: 0,
    right: 0,
    minHeight: theme.spacing?.navbar,
    display: "flex",
    position: "absolute",
    backgroundColor: theme.chart?.navbar,
  },
  navbarSpacer: {
    top: 0,
    left: 0,
    right: 0,
    opacity: 0,
    display: "flex",
    minHeight: theme.spacing?.navbar,
  },
}));

export default NavBar;
