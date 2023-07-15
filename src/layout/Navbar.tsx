import Logo from "@/assets/logo.png";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
const Navbar = () => {

  return (
    <nav className="border-gray-200 bg-gray-900 text-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="#" className="flex">
          <img src={Logo} alt="<a href='https://pngtree.com/freepng/book-logo-design-inspiration_8925017.html'>png image from pngtree.com/</a>" width="60" height="90" />
        </a>

        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search" />
        </label>

        <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium items-center">
            <li>
              <Link to="/" className="text-gray-200 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="#" className="text-gray-200 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Features</a>
            </li>
            <li>
              <a href="#" className="text-gray-200 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Best Seller</a>
            </li>
            <li>
              <a href="#" className="text-gray-200 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-200 block pl-3 pr-4 py-2 hover:text-blue-700 md:p-0 rounded focus:outline-none" aria-current="page">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Login</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
             
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>GitHub</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <span>API</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </a>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar