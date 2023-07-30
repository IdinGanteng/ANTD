import './App.css';
import Navbar from  './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ActivityDetail from './Pages/ActivityDetail';

function App() {
  return (
    <>
   <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/activity-detail/:id' element={<ActivityDetail/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
