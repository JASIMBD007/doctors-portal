import './App.css'
import Navbar from './Pages/Shared/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Login from './Pages/Login/Login'
import Appointment from './Pages/Appointment/Appointment'
import SignUp from './Pages/Login/SignUp'
import ProtectedRoute from './Pages/Login/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {


  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<ProtectedRoute>
          <Appointment />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
