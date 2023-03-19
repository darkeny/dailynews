import { GetCountryTime, GetCurrencyChanged,} from "./usage";

async function main() {
    const GetCountryTimes = await new GetCountryTime().run("mz");
    console.log(GetCountryTimes);

    const GetCurrencyChangeds = await new GetCurrencyChanged().run(1)
}


main()