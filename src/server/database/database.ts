import { InMemoryDB } from './InMemoryDatabase'
import { ToDoDatabase, setupDatabase } from './ToDoDatabase'

const useInMemoryDb = true

const configureDatabase = () => {
  if (useInMemoryDb) {
    return new InMemoryDB()
  } else {
    setupDatabase()
    return new ToDoDatabase()
  }
}

export const toDoDatabase = configureDatabase()
