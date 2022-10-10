import { DataTypes } from 'sequelize'
import database from '../data/database'
import User from './User'

const Post = database.define('post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Input cannot be empty!'
      }
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Input cannot be empty!'
      }
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Input cannot be empty!'
      }
    }
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Input cannot be empty!'
      }
    }
  },
  user_id: {
    type: DataTypes.UUID,
    unique: true,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, { freezeTableName: true })

export default Post