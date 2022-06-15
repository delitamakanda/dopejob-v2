import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import App from './App'
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Signup = React.lazy(() => import('./pages/Signup'))
const Login = React.lazy(() => import('./pages/Login'))
const Notification = React.lazy(() => import('./pages/Notification'))
const Message = React.lazy(() => import('./pages/Message'))
const Offer = React.lazy(() => import('./pages/Offer'))
import NoMatch from './pages/NoMatch'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={
            <React.Suspense fallback={<>...</>}>
              <Offer />
            </React.Suspense>
          } />
          <Route
            path='messages/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Message />
              </React.Suspense>
            } 
          />
          <Route
            path='notifications/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Notification />
              </React.Suspense>
            } 
          />
          <Route
            path='dashboard/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Dashboard />
              </React.Suspense>
            } />
          <Route
            path='login/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            } />
          <Route
            path='signup/*'
            element={
              <React.Suspense fallback={<>...</>}>
                <Signup />
              </React.Suspense>
            } />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
