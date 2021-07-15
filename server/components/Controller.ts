import type { Request, Response } from 'express'

export default function Controller(steps: Function) {

    function createController(req: Request, res: Response): void {
        try {

            steps(req, res)

        } catch (status) {

            if (typeof status === `string`) res.status(400).json({ status })
            else if (typeof status === typeof Error) res.sendStatus(500)

        }
    }

    return createController

}
