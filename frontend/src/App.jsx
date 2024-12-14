import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignin from "./pages/UserSignin"
import CaptainSignin from "./pages/CaptainSignin"
import CaptainLogin from "./pages/CaptainLogin"
import ErrorPage from './pages/ErrorPage'
import Homepage from './pages/Homepage'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtecWrapper from './pages/CaptainProtecWrapper'
import Riding from './components/user/Riding'
import LoginSignUp from './components/user/Riding'

const App = () => {
  return (
    <div >
     
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={
            <UserProtectWrapper>
               <Homepage/>
            </UserProtectWrapper>
           
            
            }/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/Usersignin' element={<UserSignin/>}/>
          <Route path='/captainlogin' element={<CaptainLogin/>}/>
          <Route path='/riding' element={<LoginSignUp/>}/>
          <Route path='/captainsigin' element={<CaptainSignin/>}/>
          <Route path='/home/logout' element={
            <UserProtectWrapper>
                <UserLogout/>
            </UserProtectWrapper>
          }/>

          <Route path='/captainhome' element={
             <CaptainProtecWrapper>
              <CaptainHome/>
             </CaptainProtecWrapper>
            
            }/>
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
        
   
    </div>
  )
}

export default App
