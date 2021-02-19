import {Client} from "./client";
import {env} from "./env";

test("get meta for station", async () => {
    const expected = {country: "SE", name: {en: "Visby Flygplats"}};
    const actual = await new Client(env("API_KEY")).getStationMeta("02590");
    expect(actual.data).toEqual(expect.objectContaining(expected));
});

