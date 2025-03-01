
import { Outlet } from 'react-router-dom'
import Navheader from './Navheader'
import Footer from './Footer'


    const Body = () => {
    return (
        <div>
      

            <Navheader />
            <Outlet  />
            <Footer />


  
        </div>
    )
    }

    export default Body
