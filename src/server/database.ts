import { uuid } from '../uuid'
import { ToDoDto } from '../dto/ToDoDto'
import { Client } from 'pg'

const client = new Client({
  database: 'postgres',
})

const connectToDatabase = async () => {
  try {
    await client.connect()
    console.log('Postgres Successfully Connected')
  } catch (err) {
    console.error(`MY SQL: error connecting: ${err}`)
  }
}

const runDatabaseSchema = () => {
  client.query(`
  CREATE TABLE IF NOT EXISTS list (
    id VARCHAR(50) NOT NULL,
    message VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );`)
}

export const setupDatabase = () => {
  connectToDatabase()
  runDatabaseSchema()
}

export class ToDoDatabase {
  getToDos = async (): Promise<ToDoDto[]> => {
    const results = await client.query('SELECT * FROM list;')
    const items: ToDoDto[] = results.rows
    return items
  }

  createToDo = async (message: string) => {
    await client.query(`
      INSERT INTO list(id, message)
      VALUES ('${uuid()}', '${message}');
    `)
  }

  deleteToDo = async (id: string) => {
    await client.query(`DELETE FROM list WHERE id='${id}';`)
  }

  editToDo = async (id: string, message: string) => {
    await client.query(`
      UPDATE list
      SET message = '${message}'
      WHERE id = '${id}';`)
  }
}
