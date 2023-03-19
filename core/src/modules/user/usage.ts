import { Exchange, Timezones } from "./factory";

export class GetCountryTime {
    async run(code: string): Promise<Timezones> {
        return Timezones.of(code)
    }
}

export class GetCurrencyChanged {
    async run(coin: number): Promise<Exchange> {
        if (coin <= 0) return 0;
        return Exchange.change
    }
}