import type { Request, Response } from 'express'

import verifyParams from '../middlewares/verifyParams'
import verifySyntax from '../middlewares/verifySyntax'

interface RequestBody {
    email: string
    password: string
    register: string
}

export default async function Register(req: Request, res: Response) {

    try {

        // Verify if the required params are present
        await verifyParams(req.body, [`email`, `password`, `register`])

        const { email, password, register }: RequestBody = req.body

        // Verify the parameters syntax passed
        await verifySyntax(`email`, /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i, email)
        await verifySyntax(`password`, /^.{8,64}$/, password)
        await verifySyntax(`register`, /^[0-9]{6}$/, register)

        // Return to the client
        res.send(`a`)

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}
