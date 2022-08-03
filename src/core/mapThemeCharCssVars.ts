import MinUiBuilder from "./MinUiBuilder";
import MinUiTheme from "../typings/MinUiTheme";

export function mapThemeCharCssVars(theme: MinUiTheme) {
  const mappedChart = {
    border_button: theme.chart?.borders?.button,
    border_input: theme.chart?.borders?.input,
    border_main: theme.chart?.borders?.main,
    button_main: theme.chart?.button?.main,
    button_disabled: theme.chart?.button?.disabled,
    button_second: theme.chart?.button?.second,
    button_textContrasts: theme.chart?.button?.textContrasts,
    button_warning: theme.chart?.button?.warning,
    main: theme.chart?.main,
    navbar: theme.chart?.navbar,
    shades_box: theme.chart?.shades?.box,
    shades_text: theme.chart?.shades?.text,
  };

  let cssVar: keyof typeof mappedChart;
  for (cssVar in mappedChart) {
    MinUiBuilder.Css.addCssVar(cssVar, mappedChart[cssVar]!);
  }
}
