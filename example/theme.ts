import Minuits from "../src/minui";

interface Theme {
  spacing: number;
  palette: {
    main: string;
    secondary: string;
    text: {
      contrast: string;
    };
  };
  shades: string[];
  dark: boolean;
}

const theme: Theme = {
  dark: false,
  palette: {
    main: "#123456",
    secondary: "#098765",
    text: {
      contrast: "#000000",
    },
  },
  shades: [],
  spacing: 5,
};

const minuits = new Minuits<Theme>(theme);

const cssVars = minuits.createCssVars(theme);

cssVars.palette.text.contrast;

export default cssVars;
