import type { Request, Response } from 'express'

import jwt from 'jsonwebtoken'
import { config as dotenv } from 'dotenv'

import verifyParams from '../middlewares/verifyParams'
import verifySyntax from '../middlewares/verifySyntax'

dotenv()

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
        await verifyParams(req.body, [`email`, `password`])
        const { token }: RequestBody = req.body

        // Verify the parameters syntax passed
        await verifySyntax(`token`, /^ey[0-9a-zA-Z]+\.ey[0-9a-zA-Z]+\.[0-9a-zA-Z]+/, token)

        // Get the user from their token
        const user = jwt.verify(token, process.env.REFRESH_TOKEN)

        // Creates a access token
        await createAccessToken(user.toString())

        // Return the token to the client
        res.status(200).json({ status: `success`, params: {} })

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}

function createAccessToken(user: string) {
    return new Promise<void>(resolve => {

        console.log(user)
        resolve()

    })
}
