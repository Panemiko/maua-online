import type { ApiComponent, ApiConfig } from '../types'

export default function Api(config: ApiConfig) {

    const api: ApiComponent = {
        config,
        start
    }

    async function start() {



    }

    return api

}
