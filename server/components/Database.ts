import type { DatabaseComponent, DatabaseConfig } from '../Types'
import colors from 'colorts'
import { connect } from 'mongoose'

export default function Database(config: DatabaseConfig) {

    const database: DatabaseComponent = {
        config,
        start
    }

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
