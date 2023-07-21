import { useAppSelector } from "@/redux/hook"
import { Link } from "react-router-dom"

const DetailHeader = ({ data }: any) => {
    const state = useAppSelector((state) => state.auth.userId);

    return (
        <div className="">
            <div className="h-80 w-full bg-purple-400 relative">
                <div className="flex justify-between absolute top-20 left-10">
                    <div className="h-70 w-80 border-red-700 bg-purple-300 ">
                        <img className="rounded-lg p-1 max-h-full" src={data.image} alt="" />
                    </div>
                    <div className=" p-2">
                        <div>
                            <h1 className="text-4xl text-white p-2">{data.title}</h1>
                            <div className="p-2 text-white flex items-center mb-2">
                                Author : {data.author}
                            </div>
                            <div className="p-2 text-white flex items-center mb-2">
                                Genre :  {data.genre}
                            </div>
                            <div className="p-2 text-white flex items-center mb-2">
                                Publication Date : {data.publicationDate}
                            </div>
                        </div>
                        {state == data.createdBy && <div>
                            <Link to={`/book/edit-book/${data._id}`}>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit Book</button>
                            </Link>

                            <button type="button" className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                        </div>}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailHeader