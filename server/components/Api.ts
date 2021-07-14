import type { ApiComponent, ApiConfig } from '../types'
import express from 'express'
import { createServer } from 'http'
import colors from 'colorts'
import Routes from './Routes'

export default function Api(config: ApiConfig) {

    const api: ApiComponent = {
        config,
        start
    }

    async function start(): Promise<void> {

        // Initializing the components
        console.log(`> [api] ${colors(`Starting Api`).yellow}`)
        api.app = express()
        api.http = createServer(api.app)
        api.routes = Routes()

        // Setting up global middlewares
        console.log(`> [api] ${colors(`Setting Up Middlewares`).yellow}`)
        api.app.use(express.json())

        // Setting up api router
        console.log(`> [api] ${colors(`Setting Up Routes`).yellow}`)
        api.app.use(`/api`, api.routes)

        // Listening to port
        api.http.listen(api.config.port)
        console.log(`> [api] ${colors(`Api Started`).green}`)

    }

    return api

}
