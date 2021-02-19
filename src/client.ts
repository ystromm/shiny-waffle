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

export interface StationDaily {
    data: {
        date: string,
        tavg: number,
    }[]
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
            headers: {'x-api-key': this.apiKey},
            params: {station, start, end}
        }).then(result => result.data);
}