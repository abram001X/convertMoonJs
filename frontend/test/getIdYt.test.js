import { describe, expect, it } from "vitest";
import { getIdYt } from "../src/lib/geitIdYt";

describe("getIdYt", () => {
  it("Should to be a function", () => {
    expect(typeof getIdYt === "function").toBe(true);
  });
  it("Should return a message if the params not type of string", () => {
    expect(getIdYt([])).toBe("Ingresa una url válida");
  });
  it("Should return the id of URL", () => {
    const url =
      "https://music.youtube.com/watch?v=MJoin3xc6D8&list=RDAMVMMJoin3xc6D8";
    expect(getIdYt(url)).toBe("MJoin3xc6D8");
  });
  it("Should return the id of URL", () => {
    const url =
      "https://music.youtube.com/watch?v=Z5zK2Uy-dq8&list=RDAMVM2rN96OZnqKI";
    expect(getIdYt(url)).toBe("Z5zK2Uy-dq8");
  });
  it("Should return the id of URL", () => {
    const url =
      "https://www.youtube.com/watch?v=8GE6gg36VZE";
    expect(getIdYt(url)).toBe("8GE6gg36VZE");
  });
  it("Should return the id of URL", () => {
    const url =
      "https://www.youtube.com/watch?v=sASqnPbuskg";
    expect(getIdYt(url)).toBe("sASqnPbuskg");
  });
});
