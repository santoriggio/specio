import { it, expect } from "specio";
import sum from "./sum.js";

it("funzione di test", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);

  expect(result).toBe(5);
});
