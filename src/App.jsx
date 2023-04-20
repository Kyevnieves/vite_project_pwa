import { useState, useEffect } from 'react'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';
import {NavBar, CardBattle, Filter} from './components'
import {HomePage, ProfilePage, EditProfilePage} from './pages'


import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App w-full md:w-96 mx-auto px-4 py-4">
    <NavBar/>
    <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/edit-profile" element={<EditProfilePage />}></Route>
    </Routes>
    <Toaster />
    </div>
  )
}

export default App
