import { getPlanets, API_URL } from "../../utils/swapiAPI";
import mockAxios from "jest-mock-axios";

describe("Fetch SWAPI API", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("Llamar la SWAPI API y retornar datos", () => {
    const apiUrl = `${API_URL}/planets/?search=Tatooine`;
    getPlanets("Tatooine")
    const lastReq = mockAxios.lastReqGet();
    expect(lastReq).toBeTruthy()
    expect(lastReq.config.url).toEqual(apiUrl);
  });
});
