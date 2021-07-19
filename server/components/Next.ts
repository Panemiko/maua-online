import next from 'next'
import { Router } from 'express'

export default async function Next() {

    const nextRoutes = Router()

    // Check if is in production
    const dev = process.env.NODE_ENV !== `production`

    // Initialize next and nextHandler
    const app = next({ dev, quiet: true, customServer: true })
    const nextHandler = app.getRequestHandler()

    // Sets the route
    await app.prepare()
    nextRoutes.get(`/`, (req, res) => nextHandler(req, res))

    return nextRoutes

}
