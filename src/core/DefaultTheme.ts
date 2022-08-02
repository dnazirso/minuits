import MinUiTheme from "../typings/MinUiTheme";

export const mappedCssVars = {
  chart: {
    main: "var(--main)",
    navbar: "var(--navbar)",
    button: {
      main: "var(--button_main)",
      second: "var(--button_second)",
      warning: "var(--button_warning)",
      disabled: "var(--button_disabled)",
      textContrasts: "var(--button_textContrasts)",
    },
    borders: {
      main: "var(--border_main)",
      input: "var(--border_input)",
      button: "var(--border_button)",
    },
    shades: {
      box: "var(--shades_box)",
      text: "var(--shades_text)",
    },
  },
};

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
    shades: {
      box: "#000000",
      text: "#000000",
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
