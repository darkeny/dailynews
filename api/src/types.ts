import { z } from 'zod'

const userSchema = z.object({
    id: z.string().uuid({ message: 'Invalid uuid' }),
    name: z.string().min(3, { message: 'Nome Invalido, precisa ter 3 caracteres no minimo' }),
    email: z.string().email({ message: 'Email Invalido!' })
})

const newsletterSchema = z.object({
    id: z.string().uuid({message: 'Invalid uuid!'}),
    tittle: z.string().min(3, {message: 'Invalid Tittle!, it is too short'}),
    content: z.string().max(600, {message: 'Invalid Content! it is too large'})
})
export type User = z.infer<typeof userSchema>
export type Newsletter = z.infer<typeof newsletterSchema>



