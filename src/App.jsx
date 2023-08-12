import './App.css'
import Navbar from './Pages/Shared/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment'
import Reviews from './Pages/Reviews/Reviews'
import Contact from './Pages/Contact/Contact'

function App () {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App
