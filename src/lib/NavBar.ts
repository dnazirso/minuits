import MinUi from "../core/MinUi";

const NavBar = MinUi.Css.Use("class", (theme) => ({
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
