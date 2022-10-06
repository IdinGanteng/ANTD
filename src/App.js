import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layouting from './Layouting';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layouting/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App