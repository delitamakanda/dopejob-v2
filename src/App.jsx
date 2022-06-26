import './App.css'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Notification from './pages/Notification'
import Message from './pages/Message'
import Offer from './pages/Offer'
import NoMatch from './pages/NoMatch'
import Hoc from './hoc/hoc'
import CustomLayout from './pages/Layout'


function App(props) {
    return (
      <BrowserRouter>
        <div className='app'>
          <Hoc>
            <CustomLayout {...props}>
              <Routes>
                <Route exact path='/' element={<Offer />} />
                <Route path='/messages' element={<Message />} />
                <Route path='/notifications' element={<Notification />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NoMatch />} />
              </Routes>
            </CustomLayout>
          </Hoc>
        </div>
      </BrowserRouter>
    )
}

export default App
