import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error()
const root = createRoot(rootElement)
root.render(<App />)
