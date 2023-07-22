import { useCreateWishMutation } from "@/redux/features/wish/wishApi";
import { IBooks } from "@/types";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import Spinner from "@/layout/Spinner";

interface IProps {
    book: IBooks
}
const Books = ({ book }: IProps) => {
    const [createWish, { isSuccess, isError, isLoading }] = useCreateWishMutation();

    const handleAddWishList = () => {
        if (book._id) {
            createWish({ book: book._id })
        }
    }
    useEffect(() => {
        if (isSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully Added!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        if (isError) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Duplicate Book Cannot Added in Wish List !!",
                showConfirmButton: true,
                timer: 3500
            })
        }
    }, [isSuccess, isError])
    return (
        <div className="w-full bg-gradient-to-r mb-3 from-cyan-200 to-blue-100 w-120 h-60 rounded shadow-md flex card text-grey-darkest">
            <Link to={`/book/${book._id}`} className="w-1/2">
                <img className="h-full rounded-l-sm" src={book.image} alt="Room Image" />
            </Link>
            <div className="w-1/2 flex flex-col">
                <div className="p-4 pb-0 flex-1">
                    <h2 className="font-bold mb-1 text-grey-darkest">{book.title}</h2>
                    <div className="text-xs flex items-center mb-2">
                        Author :  {book.author}
                    </div>
                    <div className="text-xs flex items-center mb-2">
                        Genre :  {book.genre}
                    </div>
                    <div className="text-xs flex items-center mb-4">
                        Publication Date : {book.publicationDate}
                    </div>
                </div>
                <div className="bg-gray-300 p-3 flex items-center justify-between transition hover:bg-grey-light">
                    <button onClick={handleAddWishList} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        {isLoading ? <Spinner /> : "Add Wish"}
                    </button>
                    {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-1 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reading List</button> */}
                </div>
            </div>
        </div>
    )
}
export default Books