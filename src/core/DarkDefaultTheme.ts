export default {
  name: "dark",
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  chart: {
    main: "#000000",
    navbar: "#00d6f1",
    button: {
      main: "#00d6f1",
      second: "#00faf1",
      disabled: "#00dede",
      textContrasts: "#ffffff",
    },
    borders: {
      input: "#3d3d3d",
      button: "#00d6f1",
      main: "#00e7e9",
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
