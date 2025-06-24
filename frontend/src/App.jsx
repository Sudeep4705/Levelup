import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

import Navbar from './landing_Page/Navbar'
import Footer from './landing_Page/Footer'
import HomePage from "./landing_Page/Home/HomePage"
import AboutPage from "./landing_Page/about/AboutPage"
import PlayerPage from "./landing_Page/Player/PlayerPage"
import SupportPage from "./landing_Page/support/SupportPage"
import Players from "./landing_Page/Player/Players"
import ShowPlayer from "./landing_Page/Player/ShowPlayer"
import Edit from "./landing_Page/Player/Edit"
import Signup  from "./landing_Page/user/Signup"
import Login from "./landing_Page/user/Login"


function App() {
 

  

  return (
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/about' element={<AboutPage/>}></Route>
  <Route path='/players' element={<PlayerPage/>}></Route>
  <Route path='/support' element={<SupportPage/>}></Route>
  <Route path='/addplayer' element={<Players/>}></Route>
  <Route path='/listings/show/:id' element={<ShowPlayer/>}></Route>
  <Route path='/listings/edit/:id' element={<Edit/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  


    
  
</Routes>
<Footer/>
</BrowserRouter>



    
  )
}

export default App
