function deepMergeInner<T>(target: T, source: T) {
  Object.keys(source).forEach((key: string) => {
    const targetValue = target[key as keyof T];
    const sourceValue = source[key as keyof T];

    if (isObject(targetValue) && isObject(sourceValue)) {
      target[key as keyof T] = deepMergeInner(
        Object.assign({}, targetValue),
        sourceValue
      );
    } else {
      target[key as keyof T] = sourceValue;
    }
  });

  return target;
}

function isObject<T>(obj: T) {
  return obj && typeof obj === "object";
}

export function deepMerge<T>(...objects: T[]) {
  if (objects.length < 2) {
    throw new Error(
      "deepMerge: this function expects at least 2 objects to be provided"
    );
  }

  if (objects.some((object) => !isObject(object))) {
    throw new Error('deepMerge: all values should be of type "object"');
  }

  const target = objects.shift();
  let source: T;

  while ((source = objects.shift() as T)) {
    deepMergeInner(target, source);
  }

  return target;
}
