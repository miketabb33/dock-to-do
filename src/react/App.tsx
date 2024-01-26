import React from 'react'
import Layout from './components/Layout'
import ToDoPage from './pages/ToDoPage'
import LoadingContextProvider from './context/LoadingContext'

const App = () => {
  return (
    <React.StrictMode>
      <LoadingContextProvider>
        <Layout>
          <ToDoPage />
        </Layout>
      </LoadingContextProvider>
    </React.StrictMode>
  )
}

export default App
