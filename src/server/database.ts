import mysql from 'mysql'
import { uuid } from '../uuid'
import { ToDoDto } from '../dto/ToDoDto'

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'my_user',
  password: 'sandwich123',
})

const connectToDatabase = () => {
  connection.connect((err) => {
    if (err) {
      console.error('MY SQL: error connecting: ' + err.stack)
      return
    }
    console.log('MY SQL: connected as id ' + connection.threadId)
  })
}

const runDatabaseSchema = () => {
  connection.query('CREATE DATABASE IF NOT EXISTS todo;')
  connection.query(`
    CREATE TABLE IF NOT EXISTS todo.list (
      id VARCHAR(50) NOT NULL,
      message VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    );`)
}

export const setupDatabase = () => {
  connectToDatabase()
  runDatabaseSchema()
}

export const getToDos = async () => {
  const results = await query(`SELECT * FROM todo.list`)
  const toDos: ToDoDto[] = results.map((item: any) => {
    return {
      id: item.id,
      message: item.message,
    }
  })
  return toDos
}

export const createToDo = (message: string) => {
  query(`
    INSERT INTO todo.list(id,message)
    VALUES ('${uuid()}', '${message}');
  `)
}

const query = (q: string): Promise<any> => {
  return new Promise((res, rej) => {
    connection.query(q, (err, rows) => {
      if (err) {
        console.error(err.stack)
        rej(new Error(err.message))
        return
      }
      res(rows)
    })
  })
}
