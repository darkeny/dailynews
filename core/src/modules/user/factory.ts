import { Timezone } from "./types";

export abstract class Timezones {

    public static offset(code: string): number {
        if (code == "mz") return 2;
        throw new Error("No offset for " + code)
    }

    public static of(code: string): Timezones {
        const offsetNumber = this.offset(code);
        const time = new Date(Date.now() + offsetNumber * 1000 * 60 * 60);

        return new TimezoneImp(time.getDate() + ":" + time.getMinutes() + ":" + time.getSeconds());

    }


}
class TimezoneImp implements Timezone {
    constructor(
        readonly time: string,
    ) { }
}

export abstract class Currency {
    public static quotes = {
        USD: 63.2,
        ZAR: 3.36,
        EUR: 67.99
    }
}