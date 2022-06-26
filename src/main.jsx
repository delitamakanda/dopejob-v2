import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Notification from './pages/Notification'
import Message from './pages/Message'
import Offer from './pages/Offer'
import NoMatch from './pages/NoMatch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Offer />} />
          <Route
            path='messages/*'
            element={<Message />} 
          />
          <Route
            path='notifications/*'
            element={<Notification />} 
          />
          <Route
            path='dashboard/*'
            element={<Dashboard />} />
          <Route
            path='login/*'
            element={<Login />} />
          <Route
            path='signup/*'
            element={<Signup />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
