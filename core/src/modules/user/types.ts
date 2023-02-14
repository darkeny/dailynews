import { z } from 'zod'

const userSchema = z.object({
    id: z.string().uuid({ message: 'Invalid uuid!' }),
    email: z.string().email({ message: 'Invalid email' }),
    name: z.string().min(3, { message: 'Invalid name, is too shot' })
})

export type User = z.infer<typeof userSchema>

export interface saveUserArgs {
    name: string;
    email: string;
}

export interface deleteUserArgs{
    id: string;
}

export interface updateUserArgs{
    id: string;
}

export interface findUserArgs{
    id: string
}
export interface userRepository {
    save(params :saveUserArgs): Promise<User>
    delete(params:deleteUserArgs): Promise<User>
    update(params:updateUserArgs): Promise<User>
    find(query: findUserArgs): Promise<User>
}