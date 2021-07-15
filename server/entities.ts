import type { UserEntity } from './types'
import { model, Schema } from 'mongoose'
import { v4 as uuid } from 'uuid'

export const User = model<UserEntity>(`User`, new Schema({

    _id: { type: String, required: true, default: uuid() },
    name: { type: String, required: true },
    role: { type: String, required: true },
    subject: { type: String, required: false },
    class: { type: String, required: false }

}), `users`)

