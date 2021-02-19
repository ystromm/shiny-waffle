import axios, {AxiosInstance} from "axios";

export interface StationMeta {
    data: {
        country: string,
        name: {
            en?: string
        },
        latitude: number,
        longitude: number,
    },
}
const a = {
    "meta": {
        "source": "National Oceanic and Atmospheric Administration, Deutscher Wetterdienst",
        "exec_time": 0.145,
        "generated": "2021-02-17 20:49:59"
    },
    "data": [
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
}

export interface StationDaily {
}

export class Client {
    private axiosInstance: AxiosInstance;
    private apiKey: string;

    public constructor(apiKey: string) {
        this.apiKey = apiKey;
        const baseURL = "https://api.meteostat.net/v2";
        this.axiosInstance = axios.create({baseURL});

        // interceptor
        // this.instance.interceptors.request.use(
        //       this._handleRequest,
        //       this._handleError,
        //     );
    }


    public getStationMeta = (id: string) => this.axiosInstance.get<StationMeta>('/stations/meta',
        {
            headers: {'x-api-key': this.apiKey},
            params: {id}
        }).then(result => result.data);

    public getStationDaily = (station: string, start: string, end: string) => this.axiosInstance.get<StationDaily>('/stations/daily',
        {
            headers: { 'x-api-key': this.apiKey },
            params: { station, start, end }
        }).then(result => result.data);
}