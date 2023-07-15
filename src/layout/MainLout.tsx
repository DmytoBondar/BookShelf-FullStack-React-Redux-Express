import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const MainLout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLout