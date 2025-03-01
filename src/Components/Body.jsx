
import { Outlet } from 'react-router-dom'
import Navheader from './Navheader'
import Footer from './Footer'
import { Provider } from 'react-redux'
import appStore from '../Utils/appStore'

    const Body = () => {
    return (
        <div>
        <Provider store={appStore}>

            <Navheader />
            <Outlet  />
            <Footer />

        </Provider>
  
        </div>
    )
    }

    export default Body
