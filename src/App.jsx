import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import React from 'react'
import {
  MessageOutlined,
  UserOutlined,
  NotificationOutlined,
  ReadOutlined
} from '@ant-design/icons'
import {
  Routes,
  Route,
  Outlet,
  useNavigate
} from 'react-router-dom'
const { Header, Footer, Content } = Layout

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Notification = React.lazy(() => import('./pages/Notification'))
const Message = React.lazy(() => import('./pages/Message'))
const Offer = React.lazy(() => import('./pages/Offer'))
import NoMatch from './pages/NoMatch'

const BaseLayout = () => {
  const navigate = useNavigate()
  const currentYear = `dopejob ${new Date().getFullYear()}`
  const items = [
      {
        key: '1',
        icon: <ReadOutlined />,
        label: 'nav 1',
        link: '/'
      },
      {
        key: '2',
        icon: <NotificationOutlined />,
        label: 'nav 2',
        link: 'notifications'
      },
      {
        key: '3',
        icon: <UserOutlined />,
        label: 'nav 3',
        link: 'dashboard'
      },
      {
        key: '4',
        icon: <MessageOutlined />,
        label: 'nav 4',
        link: 'messages'
      }
  ]
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className='logo' />
          <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items.map((item) => ({
            key: item.key,
            label: item.label,
            icon: item.icon,
            onClick: () => navigate(item.link)
          }))}
          />
        </Header>
        <Content className='site-layout' style={{ marginTop: 64, padding: '0 50px' }}>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          {currentYear}
        </Footer>
    </Layout>
  )
}

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<BaseLayout />}>
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
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    )
}

export default App
