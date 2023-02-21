import { GetCountryTime } from "./usage";

async function main() {
    const GetCountryTimes = await new GetCountryTime().run("mz");
    console.log(GetCountryTimes);
}
main()