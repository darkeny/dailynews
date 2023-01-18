import { v4 as uuid } from 'uuid'
import { Newsletter } from '^main'

export class Feed implements Newsletter {
    constructor(
        readonly tittle: string,
        readonly content: string,
        readonly id: string = uuid()
    ) { }
}