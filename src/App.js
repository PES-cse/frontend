import React from 'react'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import {AuthProvider} from './context/AuthContext'
import UserPages from './pages/UserPages/UserPages'

function App() {

  return (
    <>
        <AuthProvider>
          <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route element = {<PrivateRoutes/>}>
                <Route path='/u/:username/*' element={<UserPages/>}/>
              </Route>
          </Routes>
        </AuthProvider>
    </>
  )
} 

export default App