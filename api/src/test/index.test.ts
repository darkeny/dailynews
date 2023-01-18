
import { z } from 'zod'

const userSchema = z.object({
    // id: z.string()..uuid({ message: 'Invalid uuid' }),
    name: z.string().min(3, { message: 'Nome Invalido, precisa ter 3 caracteres no minimo' }),
    email: z.string().email({ message: 'Email Invalido!' })

})

type User = z.infer<typeof userSchema>

function save(user: User) {
    const { name, email } = userSchema.parse(user)
    console.log(name, email)
}

save({
    // id: string = uuid(),
    name: 'Darken',
    email: 'darken@cloud.com'
})