import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import AdminRegisterPage from "./pages/admin/AdminRegisterPage.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />

        <Route path='AdminLogin' element={<LoginPage role="Admin"/>}/>
        <Route path='StudentLogin' element={<LoginPage role="Student"/>}/>
        <Route path='TeacherLogin' element={<LoginPage role="Teacher"/>}/>

        <Route path='AdminRegister' element={<AdminRegisterPage/>}/>

        <Route path='*' element={<Navigate to="/"/>}/>

      </Routes>
    </Router>
  )
}

export default App