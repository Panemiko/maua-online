import type { ServerComponent } from '../Types'

import { readJSONSync } from 'fs-extra'
import colors from 'colorts'

import Api from './Api'
import Database from './Database'

/**
 * @returns Server component
 * @description Creates a Server component
 */
export default async function Server(): Promise<ServerComponent> {

    const server: ServerComponent = {
        config: readJSONSync(`config.json`, { encoding: `utf8` }),
        start
    }

    /**
     * @description Starts the Server child components
     */
    async function start(useNext?: boolean): Promise<void> {

        console.log(`> [server] ${colors(`Starting Server`).yellow}`)

        // Initializing the components
        server.api = await Api(server.config.api)
        server.database = await Database(server.config.database)

        if (useNext) { await server.api.allowNext() }

        // Starting the components
        await server.database.start()
        await server.api.start()

        console.log(`> [server] ${colors(`Server Started`).green}`)

    }

    return server

}
