import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing_page from './views/Homepage/landing_page'
import Login from './views/Loginpage/login'
import Register from './views/Signup/signup'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/Login" element={<Login />} />
        <Route path="signup" element={< Register />} />
      </Routes>
    </Router>
  );
}
export default App
