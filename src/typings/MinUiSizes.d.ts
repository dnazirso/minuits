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
