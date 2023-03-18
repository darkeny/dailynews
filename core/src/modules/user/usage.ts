import { Currency, Timezones } from "./factory";

export class GetCountryTime {
    async run(code: string): Promise<Timezones> {
        return Timezones.of(code)
    }
}

export class Exchange {
    async run(coin: number): Promise<Currency> {

    }
}