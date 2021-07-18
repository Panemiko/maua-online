import Server from './components/Server'

start()

/**
 * @description Starts the server component
 */
async function start() {

    const server = await Server()

    server.start()

}
