import { searchToJson, jsonToSearch } from "../../utils/urlUtilities";

describe("URL Utilities", () => {
  const jsonSearch = { q: "Tatooine world", page: "2" };
  const stringSearch = "?q=Tatooine%20world&page=2";
  test("Should convert a search to a JSON", () => {
    const resultArray = searchToJson(stringSearch);
    expect(resultArray).toEqual(jsonSearch);
  });
  test("Should convert a JSON to a search", () => {
    const resultString = jsonToSearch(jsonSearch);
    expect(resultString).toEqual(stringSearch);
  });
});
