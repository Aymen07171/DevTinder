
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Components/Body.jsx'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'




function App() {


  return (

    <div> 
      <BrowserRouter basename='/' >
        <Routes>
          <Route path='/' element={<Body />} >
          
            <Route path='/login' element={<Login />} />
            <Route path='profile' element={<Profile />} />
          
            </Route>

        </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
