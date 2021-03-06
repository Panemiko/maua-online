import type { ApiComponent, ApiConfig } from '../Types'

import express from 'express'
import { createServer } from 'http'
import colors from 'colorts'

import Routes from './Routes'

/**
 * @param config - Api config
 * @returns Api Component
 * @description Creates a Api Component
 */
export default async function Api(config: ApiConfig): Promise<ApiComponent> {

    const api: ApiComponent = {
        config,
        start
    }

    /**
     * @description Starts the api component
     */
    async function start(): Promise<void> {

        // Initializing the components
        console.log(`> [api] ${colors(`Starting Api`).yellow}`)
        api.app = express()
        api.http = createServer(api.app)
        api.routes = await Routes()

        // Setting up global middlewares
        console.log(`> [api] ${colors(`Setting Up Middlewares`).yellow}`)
        api.app.use(express.json())

        // Set web routes
        if (process.env.NODE_ENV === `production`) {
            console.log(`> [api] ${colors(`Setting up Web Routes`).yellow}`)
            api.app.use(`*`, express.static(`../../web`))
        }

        // Setting up api router
        console.log(`> [api] ${colors(`Setting Up Routes`).yellow}`)
        api.app.use(`/api`, api.routes)

        // Listening to port
        api.http.listen(api.config.port)
        console.log(`> [api] ${colors(`Api Started`).green}`)

    }

    return api

}
