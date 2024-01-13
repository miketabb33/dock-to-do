import React from 'react'
import Layout from './components/Layout'
import ToDoPage from './pages/ToDoPage'

const App = () => {
  return (
    <React.StrictMode>
      <Layout>
        <ToDoPage />
      </Layout>
    </React.StrictMode>
  )
}

export default App
