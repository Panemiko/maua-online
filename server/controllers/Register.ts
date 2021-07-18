import type { Request, Response } from 'express'
import type { Document } from 'mongoose'
import type { UserEntity } from '../Types'

import { User } from '../Models'
import verifyParams from '../services/checkBody'
import verifySyntax from '../services/checkSyntax'
import { createToken } from '../services/jwt'

interface RequestBody {
    email: string
    password: string
    register: string
}

/**
 * @param email - The e-mail to set in the account
 * @param password - The password to set in the account
 * @param register - The account register code (gave by school)
 * @description Gets the user by the register gave and update with the e-mail and password passed
 * @returns User's refresh token
*/
export default async function Register(req: Request, res: Response) {

    try {

        // Verify if the required params are present
        await verifyParams(req.body, [`email`, `password`, `register`])

        const { email, password, register }: RequestBody = req.body

        // Verify the parameters syntax passed
        await verifySyntax(`email`, email, /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)
        await verifySyntax(`password`, password, /^.{8,64}$/)
        await verifySyntax(`register`, register, /^[0-9]{6}$/)

        // Verify if the email is already used
        await emailAlreadyUsed(email)

        // Get the user from their register
        const user = await getUserFromRegister(register)

        // Create a refresh token for the user
        const token = await createToken({ user: user._id }, `refresh`)

        // Update the user with the new info
        await user.updateOne({
            $unset: { register: true },
            token,
            email,
            password
        })

        // Return to the client the user refresh token
        res.status(200).json({ status: `success`, params: { token } })

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}

/**
 * @param email - The e-mail to be verified
 * @throws email-already-used
 * @description Get the user from database by e-mail and verify if the user is null
 */
function emailAlreadyUsed(email: string) {
    return new Promise<void>((resolve, reject) => {

        User.findOne({ email }).then((user) => {
            if (user) return reject(`email-already-used`)
            else return resolve()
        })

    })
}

/**
 * @param register - The user register
 * @throws register-not-found
 * @description Get the user from the register code passed
 */
function getUserFromRegister(register: string) {
    return new Promise<UserEntity & Document<any, any, UserEntity>>((resolve, reject) => {

        User.findOne({ register })
            .then(user => {
                if (!user) return reject(`register-not-found`)
                else resolve(user)
            })

    })
}
