import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)

// usar a linha abaixo no comando knex do package.json caso ele nao funcione com "node --loader tsx ./node_modules/.bin/knex"
// "node --loader tsx ./node_modules/knex/bin/cli.js "
