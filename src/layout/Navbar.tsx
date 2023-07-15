import Logo from '@/assets/logo.jpg';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-gray-200 text-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex">
          <img src={Logo} alt="" width="60" height="90" />
        </a>

        <div>
          <input type="text" placeholder='Search...' />
        </div>

        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/" className="text-gray-700 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="#" className="text-gray-700 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Features</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Best Seller</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar