import CssKeyFramesAtValues from "../typings/CssKeyFramesAtValues";

export function queryToString(
  frames: CssKeyFramesAtValues,
  rule: { [name: string]: string; } = {}) {
  Object.keys(frames).map((frame) => {
    // can't reuse stringifyStyles!?
    rule[frame] = Object.keys(frames[frame]).reduce((prev, curr) => {
      return `${(prev += curr
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase())}:${frames[frame][curr]};`;
    }, "");
  });

  return Object.keys(rule).reduce((prev, curr) => {
    return `${(prev += curr)}{${rule[curr]}}`;
  }, "");
}
