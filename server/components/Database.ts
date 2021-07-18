import type { DatabaseComponent, DatabaseConfig } from '../Types'

import colors from 'colorts'
import { connect } from 'mongoose'

/**
 * @param config - Database config
 * @returns Database component
 * @description Creates a Database component
 */
export default async function Database(config: DatabaseConfig): Promise<DatabaseComponent> {

    const database: DatabaseComponent = {
        config,
        start
    }

    /**
     * @description Connect to the database
     */
    async function start(): Promise<void> {

        // Connecting to database on config
        console.log(`> [database] ${colors(`Connecting to Database`).yellow}`)

        await connect(
            `mongodb://${database.config.host}:${database.config.port}`,
            {
                dbName: database.config.database,
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        )

        console.log(`> [database] ${colors(`Connected to Database`).green}`)

    }

    return database

}
