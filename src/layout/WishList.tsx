import { useDeleteUserWishMutation, useGetUserWishQuery } from "@/redux/features/wish/wishApi"
import { useAppSelector } from "@/redux/hook"
import { Link } from "react-router-dom";


const WishList = () => {
    const {userId} = useAppSelector((state) => state.auth)
    const { data, isSuccess, isError, isLoading } = useGetUserWishQuery(userId);
    const [deleteUserWish, { }] = useDeleteUserWishMutation();

    const handleDeleteWish = (wishId: string) => {
        if (wishId) {
            deleteUserWish(wishId)
        }
    }
    //decide what to render
    let content = null;
    if (isLoading) content = <div>Loading ...</div>;
    if (!isLoading && isError) content = <div>Something went wrong.</div>;
    if (!isLoading && !isError && data?.data?.length === 0) content = <div>Data is empty.</div>;
    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data.map((book: any, id: number) => (
            <div key={id + 100} className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
                <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                    <figure className="mb-2">
                        <img src={book?.book?.image} alt="" className="h-64 ml-auto mr-auto" />
                    </figure>
                    <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
                        <div>
                            <h6 className="text-white text-md leading-none">
                                {book?.book?.title}
                            </h6>
                        </div>
                        <div className="flex flex-col">
                            <div className="text-xs text-white font-light">
                                Author:  {book?.book?.author}
                            </div>
                            <div className="text-xs text-white font-light">
                                Genre:  {book?.book?.genre}
                            </div>
                            <div className="text-xs text-white font-light">
                                Publication Date:  {book?.book?.publicationDate}
                            </div>
                            <div className="mt-3 mx-auto">
        
                                <Link to={`/book/${book?.book?._id}`}>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">View</button>
                                </Link>

                      
                                <button onClick={() => handleDeleteWish(book?._id)} type="button" className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className="flex items-center bg-indigo-100 w-screen min-h-screen">
            <div className="container ml-auto mr-auto flex flex-wrap items-start">
                <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
                    <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                        Your Wish List
                    </h1>
                </div>
                {content}
            </div>
        </div>
    )
}

export default WishList