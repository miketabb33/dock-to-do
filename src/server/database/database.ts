import { ENV } from '../../environment'
import { InMemoryDB } from './InMemoryDatabase'
import { ToDoDatabase, setupDatabase } from './ToDoDatabase'

const configureDatabase = () => {
  if (ENV.useInMemoryDatabase) {
    return new InMemoryDB()
  } else {
    setupDatabase()
    return new ToDoDatabase()
  }
}

export const toDoDatabase = configureDatabase()
