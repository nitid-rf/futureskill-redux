import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Read from '../read'
import ShowListBook from '../listRead'
// import { AddBookForm } from '../../components/Book/AddBookForm'
import { Layout, Menu } from 'antd';

const { Header, Footer  } = Layout;
const App = () => (
  <div>
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about-us">About Us</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/readed-book">Readed Book</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/list-book">List Book</Link></Menu.Item>
      </Menu>
    </Header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/readed-book" component={Read} />
      <Route exact path="/list-book" component={ShowListBook} />
    </main>
    <Footer style={{ textAlign: 'center' }}>
      Interview ©2018 Created by Promphat
    </Footer>
  </div>
)

export default App
