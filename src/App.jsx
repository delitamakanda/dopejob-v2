import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import React from 'react'
import {
  MessageOutlined,
  UserOutlined,
  NotificationOutlined,
  ReadOutlined,
  LoginOutlined,
  AccountBookOutlined
} from '@ant-design/icons'
import {
  Outlet,
  useNavigate
} from 'react-router-dom'
const { Header, Footer, Content } = Layout

const BaseLayout = () => {
  const navigate = useNavigate()
  const currentYear = `dopejob ${new Date().getFullYear()}`
  let a = []
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
  const itemsNotConnected = [
      {
        key: '1',
        icon: <ReadOutlined />,
        label: 'nav 1',
        link: '/'
      },
      {
        key: '2',
        icon: <LoginOutlined />,
        label: 'nav 2',
        link: 'signup'
      },
      {
        key: '3',
        icon: <AccountBookOutlined />,
        label: 'nav 3',
        link: 'login'
      }
  ]
  a = localStorage.getItem('token') ? items : itemsNotConnected 
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
          items={a.map((item) => ({
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
      <div>
        <BaseLayout />
      </div>
    )
}

export default App
