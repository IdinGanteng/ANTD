import './App.css';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
   <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
