import { Timezones } from "./factory";

export class GetCountryTime {
    async run(code: string): Promise<Timezones> {
        return Timezones.of(code)
    }
}