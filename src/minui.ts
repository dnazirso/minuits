export default class Minuits<T> {
  themes: T[] = [];

  constructor(theme: T) {
    this.themes = [...this.themes, theme];
  }

  mapCssVars<T>(theme: T) {
    return theme;
  }

  createCssVars<T>(theme: T) {
    const cssVarsTree = GetCssVarsTree<T>(theme);

    return cssVarsTree;
  }
}

function GetCssVarsTree<T>(
  stem: {
    [K in keyof T]: T[K];
  },
  preChain?: string
) {
  const rootNamesArray = Object.keys(stem);

  const names = rootNamesArray
    .filter((v, i, a) => a.indexOf(v) === i)
    .reduce(
      (root, propName) => {
        const nameChain = preChain ? `${preChain}.${propName}` : `${propName}`;

        if (typeof stem[propName as keyof T] !== "object") {
          return { ...root, [propName]: `var(--${nameChain})` };
        }

        if (typeof stem[propName as keyof T] === "object") {
          const subTree = GetCssVarsBranch(
            stem[propName as keyof T],
            nameChain
          );
          return { ...root, [propName]: subTree };
        }

        return root;
      },
      {} as {
        [K in keyof T]: T[K] extends object ? T[K] : string;
      }
    );

  return names;
}

function GetCssVarsBranch<U>(
  stem: {
    [K in keyof U]: U[K];
  },
  preChain?: string
) {
  const rootNamesArray = Object.keys(stem);

  const names = rootNamesArray
    .filter((v, i, a) => a.indexOf(v) === i)
    .reduce((root, propName) => {
      const nameChain = preChain ? `${preChain}.${propName}` : `${propName}`;

      if (typeof stem[propName as keyof U] !== "object") {
        return { ...root, [propName]: `var(--${nameChain})` };
      }

      if (typeof stem[propName as keyof U] === "object") {
        const subTree = GetCssVarsLeaves(stem[propName as keyof U], nameChain);
        return { ...root, [propName]: subTree };
      }

      return root;
    }, {} as { [V in keyof U]: U[V] extends object ? U[V] : string });

  return names;
}

function GetCssVarsLeaves<V>(
  stem: {
    [K in keyof V]: V[K];
  },
  preChain?: string
) {
  const rootNamesArray = Object.keys(stem);

  const names = rootNamesArray
    .filter((v, i, a) => a.indexOf(v) === i)
    .reduce((root, propName) => {
      const nameChain = preChain ? `${preChain}.${propName}` : `${propName}`;

      return { ...root, [propName]: `var(--${nameChain})` };
    }, {} as { [W in keyof V]: string });

  return names;
}
