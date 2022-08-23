interface MinUiColors {
  chart?: {
    main?: string;
    navbar?: string;
    button?: {
      main: string;
      second?: string;
      warning?: string;
      disabled?: string;
      textContrasts: string;
    };
    borders?: {
      main?: string;
      input?: string;
      button?: string;
    };
    shades?: {
      box?: string;
      text?: string;
    };
  };
}

type TypoGraphySet = {
  fontFamily: string;
  fontWeight?: number | string;
  fontSize?: number | string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
};

interface MinUiSizes {
  typography?: {
    main: TypoGraphySet;
    h1: TypoGraphySet;
    h2: TypoGraphySet;
    h3: TypoGraphySet;
    h4: TypoGraphySet;
    h5: TypoGraphySet;
    h6: TypoGraphySet;
    button: TypoGraphySet;
    body: TypoGraphySet;
  };
  spacing?: {
    main?: number | string;
    navbar?: number | string;
    texts?: number | string;
    buttons?: number | string;
    inputs?: number | string;
  };
  borderWidth?: {
    main?: number | string;
    input?: number | string;
    button?: number | string;
  };
  radius?: {
    main?: number | string;
    input?: number | string;
    button?: number | string;
  };
}

interface MinUiTheme extends MinUiColors, MinUiSizes {}

export default MinUiTheme;
