// recursively merge multiple objects

export const shallowMerge = (obj1: IObject, obj2: IObject): IObject => {
  return { ...obj1, ...obj2 };
};

interface IObject {
  [p: string]: number | boolean | string | object;
}

type IArray = string[];

export const deepMerge = (obj1: IObject, obj2: IObject): IObject => {
  let final: IObject = {};

  let keysOfObj2: string[] = Object.keys(obj2);
  for (const key in obj1) {
    if (keysOfObj2.includes(key)) {
      // merge deep
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        if (obj1[key] instanceof Array && obj2[key] instanceof Array) {
          // array
          final[key] = [
            ...new Set([...(obj1[key] as IArray), ...(obj2[key] as IArray)])
          ];
        } else {
          // object
          final[key] = deepMerge(obj1[key] as IObject, obj2[key] as IObject);
        }
        // remove overlapped key
        keysOfObj2.splice(keysOfObj2.indexOf(key), 1);
      } else {
        final[key] = obj2[key];
      }
    } else {
      // insert to final
      final[key] = obj1[key];
    }
  }
  if (keysOfObj2.length) {
    for (const key of keysOfObj2) {
      final[key] = obj2[key];
    }
  }
  return final;
};
