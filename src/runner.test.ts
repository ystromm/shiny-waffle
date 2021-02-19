import {Runner} from './runner'
import {Client} from "./client";
import {mocked} from 'ts-jest/utils';
import {env} from "./env";

jest.mock("./client")

describe("Runner", () => {
    const runner = new Runner();

    describe("download", () => {
        test("should return headers", async () => {
            const actual = await runner.download({definition: {stationId: "01358"}}, {api_key: "apiKeyValue"}, {
                start: "2020-02-01",
                end: "2020-02-02"
            });
            const expected = {"headers": ["date", "tavg"]};
            expect(actual.data).toEqual(expect.objectContaining(expected));
        });

        test("should return rows", async () => {
            const actual = await runner.download({definition: {stationId: "01358"}}, {api_key: "apiKeyValue"}, {
                start: "2020-02-01",
                end: "2020-02-02"
            });
            const expected = {"rows": [["2020-01-01", 4.4], ["2020-01-02", 4.2]]};
            expect(actual.data).toEqual(expect.objectContaining(expected));
        });
    });
});
