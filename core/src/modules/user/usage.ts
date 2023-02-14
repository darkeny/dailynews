export class GetNewsTime{
    async run ():Promise<Date>{
        return new Date(Date.now())
    }
}