import {StationDaily, StationMeta} from "../client";

export class Client {
    public constructor(apiKey: string) {
    }

    public getStationMeta = async (id: string): Promise<StationMeta> => {
        let json = {
            "data": {
                "country": "SE",
                "elevation": 51,
                "iata": "VBY",
                "icao": "ESSV",
                "id": "02590",
                "inventory": {
                    "daily": {
                        "end": "2021-02-10",
                        "start": "1859-08-01"
                    },
                    "hourly": {
                        "end": "2021-02-25",
                        "start": "1977-07-01"
                    }
                },
                "latitude": 57.6667,
                "longitude": 18.35,
                "name": {
                    "en": "Visby Flygplats"
                },
                "national": null,
                "region": "I",
                "timezone": "Europe/Stockholm",
                "wmo": "02590"
            },
            "meta": {
                "exec_time": 0.006,
                "generated": "2021-02-17 20:25:59"
            }
        };
        return (json as StationMeta);
    }

    public getStationDaily = async (id: string, start: string, end: string): Promise<StationDaily> => {
        let json = {
            "meta": {
                "source": "National Oceanic and Atmospheric Administration, Deutscher Wetterdienst",
                "exec_time": 0.145,
                "generated": "2021-02-17 20:49:59"
            },
            "data":
                [
                    {
                        "date": "2020-01-01",
                        "tavg": 4.4,
                        "tmin": 2.4,
                        "tmax": 5.3,
                        "prcp": 0,
                        "snow": 0,
                        "wdir": 256,
                        "wspd": 22.8,
                        "wpgt": null,
                        "pres": 1018.5,
                        "tsun": null
                    },
                    {
                        "date": "2020-01-02",
                        "tavg": 4.2,
                        "tmin": 3.2,
                        "tmax": 5.3,
                        "prcp": 0,
                        "snow": 0,
                        "wdir": 245,
                        "wspd": 27.3,
                        "wpgt": null,
                        "pres": 1013.3,
                        "tsun": null
                    }
                ]
        };
        return (json as StationDaily);
    }
}
