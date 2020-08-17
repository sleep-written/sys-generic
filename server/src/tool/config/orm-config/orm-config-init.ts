import { OrmConfigData } from './orm-config-data';

export const ormConfigInit: OrmConfigData[] = [
  {
    type: "mssql",
    host: "--HOST--",
    port: 1433,
    username: "--USER--",
    password: "--PASS--",
    database: "--DATABASE NAME--",
    encrypt: false,
    syncronize: false,
    logging: false,
    entities: [
      "dist/models-app/**/*.js"
    ],
    migrations: [
      "dist/migrations/**/*.js"
    ],
    cli: {
      entitiesDir: "src/models-app",
      migrationsDir: "src/migrations"
    },
    options: {
      enableArithAbort: true
    }
  },
  {
    type: "mssql",
    host: "--HOST--",
    port: 1433,
    username: "--USER--",
    password: "--PASS--",
    database: "--DATABASE NAME--",
    encrypt: false,
    syncronize: false,
    logging: false,
    entities: [
      "dist/models-dw/**/*.js"
    ],
    options: {
      enableArithAbort: true
    }
  }
]