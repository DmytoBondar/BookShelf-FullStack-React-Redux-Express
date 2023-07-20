import Logo from "@/assets/logo.jpg";
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useAppDispatch } from "@/redux/hook";
import { searchValue } from "@/redux/features/book/bookSlice";

const Navbar = () => {
  const [input, setInput] =useState('');
  const dispatch = useAppDispatch();

  if(input){
    dispatch(searchValue(input))
  }

  return (
    <nav
      className="bg-cyan-900 flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white">
      <div>
        <Link to="/">
          <div className="my-2 flex justify-center items-center">
            <img className="rounded-full" src={Logo} alt="logo" width="30" />
            <h3 className="px-2 font-bold">BOOKSHELF</h3>
          </div>
        </Link>
      </div>

      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input onChange={(e) => setInput(e.target.value)} style={{ width: '400px' }} className=" placeholder:italic placeholder:text-slate-400 block bg-cyan-900  w-full border border-cyan-300  rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search" />
      </label>

      <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0">
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Features</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400" href="#">Best Selling</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar