import { InMemoryToDoDatabase } from './InMemoryToDoDatabase'
import { ToDoDatabase, setupDatabase } from './ToDoDatabase'

const useInMemoryDatabase = false

const configureDatabase = () => {
  if (useInMemoryDatabase) {
    return new InMemoryToDoDatabase()
  } else {
    setupDatabase()
    return new ToDoDatabase()
  }
}

export const toDoDatabase = configureDatabase()
