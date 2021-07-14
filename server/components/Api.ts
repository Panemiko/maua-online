import type { ApiComponent, ApiConfig } from '../types'
import express from 'express'
import { createServer } from 'http'
import colors from 'colorts'

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

        // Setting up global middlewares
        api.app.use(express.json())

        // Listening to port
        api.http.listen(api.config.port)
        console.log(`> [api] ${colors(`Api Started`).green}`)

    }

    return api

}
