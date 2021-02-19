import {Client} from './client'

export interface Interval {
    start: string,
    end: string
}

export interface Source {
    definition: { stationId: string }
}

export interface Auth {
    api_key: string
}

export interface Output {
    data: {
        headers: string[],
        rows: (string | number)[][]
    }
}

export class Runner {
    public download = async (source: Source, auth: Auth, interval: Interval): Promise<Output> => {
        const client = new Client(auth.api_key);
        const stationDaily = await client.getStationDaily(source.definition.stationId, interval.start, interval.end);
        const rows = stationDaily.data.map((dailyObservation) => {
            return [dailyObservation.date, dailyObservation.tavg]
        })
        return {data: {headers: ["date", "tavg"], rows: rows}}
    }
}