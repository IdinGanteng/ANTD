import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Tabel from './pages/Tabel';
import Dashboard from './pages/Dashboard';
import Bridkrum from './components/bridkrum';
import Formulir from './pages/Formulir';

const {Header, Footer, Sider}= Layout

const App = () => {
  return (
    <div>
     <Layout>
        <Sider style={{background:"white"}}><Sidebar/></Sider>
        <Layout>
            <Header><Navbar/></Header>
            <div style={{background:"white",paddingLeft:"1cm"}}>
            <br/>
            <Bridkrum/>
            <br/>
            <Router>
              <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/table' element={<Tabel/>}/>
                <Route path='/formulir' element={<Formulir/>}/>
              </Routes>
            </Router>

            </div>
            <Footer
              style={{
                textAlign: 'center',
                background:"white"
              }}
            > Ant Design ©2022 Created by Idin Ganteng
            </Footer>
        </Layout>
     </Layout>
    </div>
  )
}

export default App;