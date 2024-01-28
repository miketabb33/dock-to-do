import React from 'react'
import Layout from './components/Layout'
import ToDoPage from './pages/ToDoPage'
import ToDoContextProvider from './contexts/ToDoProvider'

const App = () => {
  return (
    <React.StrictMode>
      <ToDoContextProvider>
        <Layout>
          <ToDoPage />
        </Layout>
      </ToDoContextProvider>
    </React.StrictMode>
  )
}

export default App
