import MinUiTheme from "../typings/MinUiTheme";

export default {
  name: "MinUItsDefaultTheme",
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  chart: {
    main: "#ffffff",
    navbar: "#aed6f1",
    button: {
      main: "#aed6f1",
      second: "#eafaf1",
      disabled: "#dedede",
      textContrasts: "#000000",
    },
    borders: {
      input: "#d3d3d3",
      button: "#aed6f1",
      main: "#e5e7e9",
    },
  },
  spacing: {
    main: 10,
    texts: 10,
    buttons: 10,
    inputs: 10,
    navbar: 50,
  },
  borderWidth: {
    main: 1,
    button: 1,
    input: 1,
  },
  radius: {
    main: 2,
    input: 2,
    button: 2,
  },
} as MinUiTheme;
