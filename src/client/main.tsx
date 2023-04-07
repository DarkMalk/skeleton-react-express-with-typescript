import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
