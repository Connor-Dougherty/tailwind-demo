import { expect, test } from "vitest";
import { getLastName, removeCorrespondingItemsByTerm, merge2ArrayIntoAnArrayOfObjects } from "./lib";

test("removeCorrespondingItemsByTerm", () => {
  // Arrange
  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items
  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});

test("getLastName", () => {
  // Arrange
  // create test object to be populated by getLastName
  const champ = [
    { name: "Mark Richter" },
    { name: "Matt Dean" },
    { name: "John Marsh" },
  ];
  const answer = [
    { name: "Matt Dean" },
    { name: "John Marsh" },
    { name: "Mark Richter" },
  ];
  // Act
 
  const sorted = getLastName(champ);
 
  // Assert
  expect(sorted).toEqual(answer);
});

describe("getLastName", () => {
  it("should return the last name of a full name", () => {
    expect(getLastName("John Cena")).toBe("Cena");
  });

  it("should return the last name of a full name", () => {
    expect(getLastName("Randy Orton")).toBe("Orton");
  });

  it("should return the last name of a full name", () => {
    expect(getLastName("The Rock")).toBe("Rock");
  });
});

test("merge2ArrayIntoAnArrayOfObjects", () => {
  const a1 = ["title1", "title2", "title3"];
  const a2 = ["champion1", "champion2", "champion3"];
  const key1 = "title";
  const key2 = "champion";

  const expected = [
{ title: "title1", champion: "champion1" },
{ title: "title2", champion: "champion2" },
{ title: "title3", champion: "champion3" },
  ];

  const result = merge2ArrayIntoAnArrayOfObjects({ a1, a2, key1, key2 });

  expect(result).toEqual(expected);
});
