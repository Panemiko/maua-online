import type { ServerComponent } from '../types'
import { readJSONSync } from 'fs-extra'
import colors from 'colorts'
import Api from './Api'
import Database from './Database'

export default function Server() {

    const server: ServerComponent = {
        config: readJSONSync(`server-config.json`, { encoding: `utf8` }),
        start
    }

    async function start(): Promise<void> {

        console.log(`> [server] ${colors(`Starting Server`).yellow}`)

        // Initializing the components
        server.api = Api(server.config.api)
        server.database = Database(server.config.database)

        // Starting the components
        await server.database.start()
        await server.api.start()

        console.log(`> [server] ${colors(`Server Started`).green}`)

    }

    return server

}
