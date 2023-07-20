import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const MainLout = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLout