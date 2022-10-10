import { Sequelize } from 'sequelize'

const database = new Sequelize({
  dialect: 'sqlite',
  storage: 'ppdatabase.db'
})

export default database