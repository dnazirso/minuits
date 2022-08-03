/* eslint-disable @typescript-eslint/no-explicit-any */

import { CssKeywordMethod } from "../typings/CssAggregate";
import MinUiTheme from "../typings/MinUiTheme";

function getStyleElement(name: string) {
  let style: HTMLStyleElement | null = document.head.querySelector(`#${name}`);
  if (style != null) {
    return style;
  }
  style = document.createElement("style");
  style.id = name;
  document.head.appendChild(style);
  return style;
}

function getScriptElement(name: string) {
  let script: HTMLScriptElement | null = document.head.querySelector(
    `#${name}`
  );
  if (script != null) {
    return script;
  }
  script = document.createElement("script");
  script.id = name;
  document.head.appendChild(script);
  return script;
}

/**
 * stringify a json into a valid css keyframe and return a string
 * for server side rendering. if client side, push css in a style tag
 * @param cssObj contains css class objects
 */
export function stringifyCssObject<T extends { [x: string]: any }>(
  cssObj: T,
  keyworkMethod: CssKeywordMethod
): void {
  Object.keys(cssObj).forEach((name) => {
    const css = `${keyworkMethod.keyword}${name}{${keyworkMethod.method(
      cssObj[name]
    )}}`;
    const i = getStyleElement("MinUiTScssId").innerHTML.indexOf(css);
    if (i < 0) {
      getStyleElement("MinUiTScssId").innerHTML += ` ${css}`;
    }
  });
}

export function addCssVar(name: string, value: string) {
  const cssVars = getScriptElement("MinUiTScssJsonId").innerHTML;
  const cssvartxt = cssVars.replace("const cssvars = ", "").replace(";", "");
  let cssVarsObj = cssVars.length > 0 ? JSON.parse(cssvartxt) : {};

  function stringifyCssVars(): string {
    let cssVarString = "";
    for (const cssVar in cssVarsObj) {
      if (Object.prototype.hasOwnProperty.call(cssVarsObj, cssVar)) {
        cssVarString += `--${[cssVar]}:${cssVarsObj[cssVar]};`;
      }
    }
    return `:root{${cssVarString}}`;
  }

  cssVarsObj = { ...cssVarsObj, [name]: value };
  const cssVarsStr = stringifyCssVars();
  const text = JSON.stringify(cssVarsObj);
  getStyleElement("MinUiTScssVarsId").innerHTML = cssVarsStr;
  getScriptElement("MinUiTScssJsonId").innerHTML = `const cssvars = ${text};`;
}

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
    if (mappedChart[cssVar]) addCssVar(cssVar, mappedChart[cssVar]!);
  }
}
