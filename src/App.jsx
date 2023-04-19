import { useState, useEffect } from 'react'
import './App.css'
import toast, { Toaster } from 'react-hot-toast';

import {NavBar, CardBattle, Filter} from './components'

function App() {
  return (
    <div className="App w-full px-4 py-4">
    <NavBar/>
    <Filter/>
    <CardBattle img="https://cdns-images.dzcdn.net/images/artist/21e53b8e8285f84f60601d895c39c900/500x500.jpg"/>
    <CardBattle img="https://prod.assets.earlygamecdn.com/images/League-of-Legends-Logo.jpg?transform=banner_webp&x=0.5&y=0.5"/>
    <CardBattle img="https://play-lh.googleusercontent.com/eOFIB3_Xb4hVKDj9DYVSNAese0LUF0MKrIa73WSWQMCrosyddPDUKLC_c67YN5wsQw=w526-h296-rw"/>
    <Toaster />
    </div>
  )
}

export default App
