import type { Request, Response, NextFunction } from 'express'

/**
 * @description Add a header to the response
 */
export default function addHeaders(req: Request, res: Response, next: NextFunction) {
    res.setHeader(`Access-Control-Allow-Origin`, `*`)
    next()
}
