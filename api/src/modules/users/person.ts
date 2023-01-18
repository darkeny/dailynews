import { v4 as uuid } from 'uuid'
import { User } from '^main'

export class Person implements User {
    constructor(
        readonly name: string,
        readonly email: string,
        readonly id: string = uuid()
        
    ) { }
}