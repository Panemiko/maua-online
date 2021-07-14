const { readJSONSync } = require(`fs-extra`)

const dbConfig = readJSONSync(`server-config.json`).database

const config = {
  mongodb: {
    url: `mongodb://${dbConfig.host}:${dbConfig.port}`,

    databaseName: dbConfig.database,

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },

  migrationsDir: `migrations`,

  changelogCollectionName: `changelog`,

  migrationFileExtension: `.js`,

  useFileHash: false
}

module.exports = config
