import type { Request, Response } from 'express'

import verifyParams from '../services/verifyParams'
import verifySyntax from '../services/verifySyntax'
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
