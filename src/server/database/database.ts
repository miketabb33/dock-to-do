import { ENV } from '../../environment'
import { InMemoryToDoDatabase } from './InMemoryToDoDatabase'
import { ToDoDatabase, setupDatabase } from './ToDoDatabase'

const configureDatabase = () => {
  if (ENV.useInMemoryDatabase) {
    return new InMemoryToDoDatabase()
  } else {
    setupDatabase()
    return new ToDoDatabase()
  }
}

export const toDoDatabase = configureDatabase()
