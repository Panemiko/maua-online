import type { ServerComponent } from '../types'
import { readJSONSync } from 'fs-extra'
import Api from './Api'

export default function Server() {

    const server: ServerComponent = {
        config: readJSONSync(`server-config.json`, { encoding: `utf8` }),
        start
    }

    async function start() {

        server.api = Api(server.config.api)


    }

    return server

}
