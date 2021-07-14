import type { Request, Response } from 'express'

import verifyParams from '../middlewares/verifyParams'

export default async function Register(req: Request, res: Response): Promise<void> {

    try {

        await verifyParams(req.body, [`email`, `password`, `register`])

    } catch (err) { }

}
