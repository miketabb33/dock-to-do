import { uuid } from '../uuid'
import { ToDoDto } from '../dto/ToDoDto'
import { Pool } from 'pg'

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  database: 'example',
  password: 'password123',
})

const connectToDatabase = async () => {
  try {
    await pool.connect()
    console.log('Postgres Successfully Connected')
  } catch (err) {
    console.error(`MY SQL: error connecting: ${err}`)
  }
}

const runDatabaseSchema = () => {
  pool.query(`
    CREATE TABLE IF NOT EXISTS list (
      id VARCHAR(50) NOT NULL,
      message VARCHAR(255) NOT NULL,
      created_on timestamp NOT NULL,
      PRIMARY KEY (id)
    );`)
}

export const setupDatabase = () => {
  connectToDatabase()
  runDatabaseSchema()
}

export class ToDoDatabase {
  getToDos = async (): Promise<ToDoDto[]> => {
    const results = await pool.query('SELECT * FROM list;')
    const items: ToDoDto[] = results.rows
    const sortedItems = items.sort((a, b) => {
      const aNum = new Date(a.created_on).getTime()
      const bNum = new Date(b.created_on).getTime()
      return aNum - bNum
    })
    return sortedItems
  }

  createToDo = async (message: string) => {
    const now = new Date()
    const q = 'INSERT INTO list(id, message, created_on) VALUES ($1, $2, $3)'
    await pool.query(q, [uuid(), message, now])
  }

  deleteToDo = async (id: string) => {
    const q = 'DELETE FROM list WHERE id=$1;'
    await pool.query(q, [id])
  }

  editToDo = async (id: string, message: string) => {
    const q = 'UPDATE list SET message=$1 WHERE id=$2;'
    await pool.query(q, [message, id])
  }
}
