import filter from "./filter";
import { expect } from "chai";

it("filter should be a function", () => {
  expect(filter).to.be.a("function");
});

it("filter([1,2,3], (item) => item) should return [1,2,3]", () => {
  expect(filter([1, 2, 3], (item) => item)).to.be.deep.equal([1, 2, 3]);
});

it("filter([0,1,2], (item) => item) should return [1,2]", () => {
  expect(filter([0, 1, 2], (item) => item)).to.be.deep.equal([1, 2]);
});

it("filter([1,2,3], (item) => item < 2) should return [1]", () => {
  expect(filter([1, 2, 3], (item) => item < 2)).to.be.deep.equal([1]);
});

it("filter([1,2,3,5], (item, index) => item === index + 1) should return [1,2,3]", () => {
  expect(
    filter([1, 2, 3, 5], (item, index) => item === index + 1)
  ).to.be.deep.equal([1, 2, 3]);
});

it("filter([1,2,3,1,2,3], (item, index, array) => index === array.indexOf(item)) should return [1,2,3]", () => {
  const before = filter(
    [1, 2, 3, 1, 2, 3],
    (item, index, array) => index === array.indexOf(item)
  );
  const filtered = [1, 2, 3];
  expect(before).to.be.deep.equal(filtered);
});
