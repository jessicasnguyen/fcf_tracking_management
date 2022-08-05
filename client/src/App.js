import logo from './logo.svg'
import './App.css'
import { Routes, Route, useParams } from 'react-router-dom'
import NavBar from './components/shared/NavBar'
import Home from './components/shared/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NoMatch from './components/shared/NoMatch'
import Dashboard from './protected/Dashboard'
import ProtectedRoute from './components/shared/ProtectRoute'
import FetchUser from './components/shared/FetchUser'
import Footer from './components/shared/Footer'

function App() {
  return (
    <div>
      <NavBar />
      {/* <FetchUser> */}
      <>
        <Routes>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* OTHER ROUTES */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </>
      {/* </FetchUser> */}
      <Footer />
    </div>
  )
}

export default App
