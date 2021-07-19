import Server from './server/components/Server'

start()

/**
 * @description Starts the server and set it to run nextjs
 */
async function start(): Promise<void> {

    // Initialize the component
    const server = await Server()

    // Run the server and allow nextjs
    await server.start(true)

}
