import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="bg-cyan-900 h-full">
            <div className=" bg-white shadow-xl text-gray-900">
                <div className="rounded-t-lg h-20 overflow-hidden">
                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>
                <div className="mx-auto w-28 h-28 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='Ujjal zaman' />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">Ujjal Zaman</h2>
                    <p className="text-gray-500">Web developer</p>
                </div>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    <li className="flex flex-col items-center justify-around">
                        <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                        <div>Reading</div>
                        <div>12</div>
                    </li>
                    <li className="flex flex-col items-center justify-between">
                        <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                        </svg>
                        <div>Finish</div>
                        <div>15</div>
                    </li>
                    <li className="flex flex-col items-center justify-around">
                        <svg className="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                        </svg>
                        <div>Wish List</div>
                        <div>15</div>
                    </li>
                </ul>

            </div>

            <div>
                <Link to="/wish-list">
                    <h2 className="text-white hover:text-cyan-500 p-2 w-full bg-blue-900">Wish List</h2>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar