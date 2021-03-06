import type { Request, Response } from 'express'
import type { UserEntity } from '../Types'
import type { Document } from 'mongoose'

import { User } from '../Models'
import verifyParams from '../services/checkBody'
import verifySyntax from '../services/checkSyntax'

interface RequestBody {
    email: string
    password: string
}

/**
 * @param email - The client account e-mail
 * @param password - The client account password
 * @description Query on the database a user with the passed e-mail and compare the passwords
 * @returns User's refresh token
 */
export default async function Login(req: Request, res: Response) {

    try {

        // Verify if the required params are present
        await verifyParams(req.body, [`email`, `password`])

        const { email, password }: RequestBody = req.body

        // Verify the parameters syntax passed
        await verifySyntax(`email`, email, /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
        await verifySyntax(`password`, password, /^.{8,64}$/)

        // Get user from the database by the e-mail
        const user = await getUserByEmail(email)

        // Verify if the client password is correct
        await verifyUserPassword(user, password)

        // Return the token to the client
        res.status(200).json({ status: `success`, params: { token: user.token } })

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}

/**
 * @param email - The client e-mail
 * @throws user-not-found
 * @description Get the user from the e-mail passed
 */
function getUserByEmail(email: string) {
    return new Promise<UserEntity & Document<any, any, UserEntity>>((resolve, reject) => {

        User.findOne({ email })
            .then(user => {
                if (!user) return reject(`user-not-found`)
                else resolve(user)
            })

    })
}

/**
 * @param user - The user (get from the database)
 * @param password - The client passed password
 * @throws wrong-password
 * @description Compare the user (get from the database) password with the client passed password
 */
function verifyUserPassword(user: UserEntity, password: string) {
    return new Promise<void>((resolve, reject) => {

        if (user.password !== password) return reject(`wrong-password`)
        else resolve()

    })
}
