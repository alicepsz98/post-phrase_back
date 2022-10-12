import knex from 'knex'

export class BaseData {
  protected static dbConnection = knex({
    client: 'sqlite3', 
    connection: {
      filename: './ppdatabase.db'
    }
  })
}