import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Tabel from './pages/Tabel';

const {Header, Footer, Sider, Content}= Layout

const Layouting = () => {
  return (
    <div>
     <Layout>
        <Sider style={{background:"white"}}><Sidebar/></Sider>
        <Layout>
            <Header><Navbar/></Header>
            <Content><Tabel/></Content>
            <Footer>Footer</Footer>
        </Layout>
     </Layout>
    </div>
  )
}

export default Layouting