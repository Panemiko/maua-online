import type { Request, Response } from 'express'

import { User } from '../Models'
import verifyParams from '../services/checkBody'
import verifySyntax from '../services/checkSyntax'
import { readToken, createToken } from '../services/jwt'

interface RequestBody {
    token: string
}

/**
 * @param token - The client refresh token
 * @description Creates a access token from their refresh token
 * @returns User access token
 */
export default async function Access(req: Request, res: Response) {

    try {

        // Verify if the required params are present
        await verifyParams(req.body, [`token`])
        const { token }: RequestBody = req.body

        // Verify the parameters syntax passed
        await verifySyntax(`token`, /^ey[0-9a-zA-Z]+\.ey[0-9a-zA-Z]+\.[0-9a-zA-Z]+/, token)

        // Verify if the client token exists
        await tokenExists(token)

        // Get the user from their token
        const tokenDecrypted = await readToken(token, `refresh`)

        // Creates a access token from the user id
        const access = await createToken({ user: tokenDecrypted.user }, `access`)

        // Return the token to the client
        res.status(200).json({ status: `success`, params: { access } })

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}

/**
 * @param token - The user refresh token
 * @throws token-invalid
 * @description Find in the database the client token and verify if is registered
 */
function tokenExists(token: string) {
    return new Promise<void>((resolve, reject) => {

        User.findOne({ token })
            .then(user => {
                if (!user) return reject(`token-invalid`)
                else return resolve()
            })

    })
}
