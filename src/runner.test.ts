import { Runner } from './runner'
import { env } from './client.test'

describe("Runner", () => {
    test("should return headers", async () => {
        const runner = new Runner()
        const actual = await runner.download({ definition: { stationId: "01358" } }, { api_key: env("API_KEY") }, { start: "2020-02-01", end: "2020-02-02" })
        const expected = { "headers": [] }
        expect(actual.data).toEqual(expect.objectContaining(expected));
    })
})
