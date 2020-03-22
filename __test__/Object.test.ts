import { shallowMerge, deepMerge } from "../tutos/Object";

describe("shallowMerge test cases", () => {
  test("nested object should be overwritten", () => {
    const obj1 = { name: "isabella", age: 29, family: { grandparents: true } };
    const obj2 = {
      family: { sister: true, parents: true, brother: false },
      hobby: "dance",
      name: "zuoqin"
    };
    const expected = {
      name: "zuoqin",
      hobby: "dance",
      age: 29,
      family: {
        sister: true,
        parents: true,
        brother: false
      }
    };
    expect(shallowMerge(obj1, obj2)).toEqual(expected);
  });
});

describe("deepMerge", () => {
  test("nested object should be merged", () => {
    const obj1 = {
      name: "isabella",
      age: 29,
      hobby: ["reading"],
      family: { grandparents: true }
    };
    const obj2 = {
      hobby: ["dance"],
      family: { sister: true, parents: true, brother: false },

      name: "zuoqin"
    };
    const expected = {
      name: "zuoqin",
      hobby: ["reading", "dance"],
      age: 29,
      family: {
        sister: true,
        parents: true,
        brother: false,
        grandparents: true
      }
    };
    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });

  test("nested array should be merged, duplicated item should be removed", () => {
    const obj1 = { employee: { name: "isabella", hobby: ["reading"] } };
    const obj2 = {
      employee: { name: "zuoqin", hobby: ["reading", "dancing"] }
    };
    const expected = {
      employee: { name: "zuoqin", hobby: ["reading", "dancing"] }
    };

    expect(deepMerge(obj1, obj2)).toEqual(expected);
  });
});
