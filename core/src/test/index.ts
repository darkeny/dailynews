import { GetCountryTime } from "../modules/user/usage";

async function main() {
    const GetCountryTimes = await new GetCountryTime().run("mz");
    console.log(GetCountryTimes);

}
main()