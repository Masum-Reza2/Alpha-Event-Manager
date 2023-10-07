import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Router/Route'
import ControlRoom from './ControlRoom/ControlRoom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ControlRoom>
      <RouterProvider router={Route} />
    </ControlRoom>
  </React.StrictMode>,
)
