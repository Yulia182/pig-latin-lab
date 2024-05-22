const { translate } = require("../src/piglatin");

describe("At least five (5) tests for words starting with different vowels.", () => {
  // first test
  test(`"apple" --> "appleway"`, () => {
    // call the fn
    const result = translate("apple");
    // expectation
    expect(result).toBe("appleway");
  });
  // second test
  test(`"icon" --> "iconway"`, () => {
    const result = translate("icon");
    expect(result).toBe("iconway");
  });
  // third test
  test(`"oval" --> "ovalway"`, () => {
    expect(translate("oval")).toBe("ovalway");
  });
  // fourth test
  test(`"umbrella" --> "umbrellaway"`, () => {
    expect(translate("umbrella")).toBe("umbrellaway");
  });
  //test five
  test(`"eager" --> "eagerway"`, () => {
    expect(translate("eager")).toBe("eagerway");
  });
});

describe("At least two tests for words starting with one consonant", () => {
  // test one
  test(`"giraffe" --> "iraffegay"`, () => {
    expect(translate("giraffe")).toBe("iraffegay");
  });
  // test two
  test(`"bottle" --> "ottlebay"`, () => {
    expect(translate("bottle")).toBe("ottlebay");
  });
});

describe("At least one test for words starting with two consonants.", () => {
  test(`"shuffle" --> "uffleshay"`, () => {
    expect(translate("shuffle")).toBe("uffleshay");
  });
  test(`"prototype" --> "ototypepray"`, () => {
    expect(translate("prototype")).toBe("ototypepray");
  });
});

describe(`At least one test for words starting with three consonants.`, () => {
  test(`"shred" --> "edshray"`, () => {
    expect(translate("shred")).toBe("edshray");
  });
});

describe("At least one test checking for lower case conversion.", () => {
  // test one
  test(`"Umbrella" --> "umbrellaway"`, () => {
    expect(translate("Umbrella")).toBe("umbrellaway");
  });
  // test two
  test(`"APPLE" --> "appleway"`, () => {
    expect(translate("APPLE")).toBe("appleway");
  });
  //test three
  test(`"BoTTle" --> "ottlebay"`, () => {
    expect(translate("BoTTle")).toBe("ottlebay");
  });
});
