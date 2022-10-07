import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Tabel from './pages/Tabel';
import Dashboard from './pages/Dashboard';

const {Header, Footer, Sider, Content}= Layout

const Layouting = () => {
  return (
    <div>
     <Layout>
        <Sider style={{background:"white"}}><Sidebar/></Sider>
        <Layout>
            <Header><Navbar/></Header>
            <Router>
              <Routes>
                <Route path='/' element={<Tabel/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
              </Routes>
            </Router>
            <Footer>Footer</Footer>
        </Layout>
     </Layout>
    </div>
  )
}

export default Layouting