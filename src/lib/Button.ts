import MinUi from "../core/MinUi";

const keyframes = MinUi.Css.Use("keyframes", (theme) => ({
  hover: {
    "0%": {
      backgroundColor: theme.chart?.button?.main,
    },
    "100%": {
      backgroundColor: theme.chart?.button?.second,
    },
  },
  unhover: {
    "0%": {
      backgroundColor: theme.chart?.button?.second,
    },
    "100%": {
      backgroundColor: theme.chart?.button?.main,
    },
  },
  pulse: {
    "0%": {
      backgroundColor: theme.chart?.button?.second,
    },
    "50%": {
      backgroundColor: theme.chart?.button?.main,
    },
    "100%": {
      backgroundColor: theme.chart?.button?.second,
    },
  },
}));

const Button = MinUi.Css.Use("class", (theme) => ({
  contained: {
    color: theme.chart?.button?.textContrasts,
    backgroundColor: theme.chart?.button?.main,
    border: `${theme.borderWidth?.button}px solid ${theme.chart?.borders?.button}`,
    borderRadius: theme.radius?.button,
    padding: theme.spacing?.buttons,
    borderImage: "none",
    animation: `${keyframes.unhover} ease-in 0.25s 1`,
    focus: {
      isPseudo: true,
      outline: "none",
    },
    hover: {
      isPseudo: true,
      animation: `${keyframes.hover} ease-in 0.25s 1`,
      backgroundColor: theme.chart?.button?.second,
    },
    active: {
      isPseudo: true,
      animation: `${keyframes.pulse} linear 0.25s 1`,
      backgroundColor: theme.chart?.button?.second,
    },
    disabled: {
      color: "f0f0f0",
      opacity: 0.3,
      isPseudo: true,
      animation: `${keyframes.pulse} linear 0.25s 1`,
      backgroundColor: theme.chart?.button?.disabled,
    },
  },
}));

export default Button;
