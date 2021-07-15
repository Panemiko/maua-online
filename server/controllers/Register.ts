import type { Request, Response } from 'express'

import verifyParams from '../middlewares/verifyParams'

export default async function Register(req: Request, res: Response) {

    try {

        await verifyParams(req.body, [`email`, `password`, `register`])

    } catch (status) {

        if (typeof status === `string`) res.status(400).json({ status })
        else if (typeof status === typeof Error) res.sendStatus(500)

    }

}
