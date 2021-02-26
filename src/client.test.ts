import { Client } from "./client";

test("get meta for station", async () => {
    const expected = {country: "SE", name: {en: "Visby Flygplats"}};
    const actual = await new Client(env("API_KEY")).getStationMeta("02590");
    expect(actual.data).toEqual(expect.objectContaining(expected));
});


export function env(key: string): string {
    const value = process.env[key];
    if (typeof value == "string") {
        return value;
    }
    throw Error(`${key} not found in environment.`);
}