import type { Request, Response, NextFunction } from 'express'

/**
 * @description Remove the headers from the response
 */
export default function removeHeaders(req: Request, res: Response, next: NextFunction) {
    res.removeHeader(`X-Powered-By`)
    next()
}
