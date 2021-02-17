import {Client} from "./client";

test("get meta for station", async () => {
    const expected = {country: "SE", name: {en: "Visby Flygplats"}};
    const actual = await new Client(env("API_KEY")).getStationMeta("02590");
    console.log(actual)
    expect(actual.data).toEqual(expect.objectContaining(expected));
});

test('id and productName should match', () => {
    const obj = {
        id: '111',
        productName: 'Jest Handbook',
        url: 'https://jesthandbook.com'
    };
    expect(obj).toEqual(
        expect.objectContaining({
            id: '111',
            productName: 'Jest Handbook'
        })
    );
});

// json = {
//     "data": {
//         "country": "SE",
//         "elevation": 51,
//         "iata": "VBY",
//         "icao": "ESSV",
//         "id": "02590",
//         "inventory": {
//             "daily": {"end": "2021-02-10", "start": "1859-08-01"},
//             "hourly": {"end": "2021-02-25", "start": "1977-07-01"}
//         },
//         "latitude": 57.6667,
//         "longitude": 18.35,
//         "name": {"en": "Visby Flygplats"},
//         "national": null,
//         "region": "I",
//         "timezone": "Europe/Stockholm",
//         "wmo": "02590"
//     }, "meta": {"exec_time": 0.006, "generated": "2021-02-17 20:25:59"}
// }

function env(key: string): string {
    const value = process.env[key];
    if (typeof value == "string") {
        return value;
    }
    throw Error(`${key} not found in environment.`);
}