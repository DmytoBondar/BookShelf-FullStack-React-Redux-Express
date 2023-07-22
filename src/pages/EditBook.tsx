import React, { useState, useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useGetSingleBookQuery, useUpdateBookMutation } from '@/redux/features/book/bookApi'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Spinner from '@/layout/Spinner';


interface IState {
    title?: string;
    author?: string;
    genre?: string;
    image?: string;
    publicationDate?: Date | null
}

const EditBook = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id);
    const navigate = useNavigate();
    const [updateBook, { isSuccess: updateSuccess, isError: updateError, isLoading: updateLoading }] = useUpdateBookMutation()
    const [input, setInput] = useState<IState>({
        title: '',
        author: '',
        genre: '',
        image: '',
        publicationDate: null
    });

    const [date, setDate] = React.useState<Date>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (date) {
            setInput({ ...input, publicationDate: date })
        }
        const data = {
            id, data:input
        }
        updateBook(data);

    }
    useEffect(() => {
        if (updateSuccess) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully Updated!',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/');
        }
        if (updateError) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something Went Wrong !!",
                showConfirmButton: true,
                timer: 3500
            })
        }
        if (date) {
            setInput({ ...input, publicationDate: date })
        }
    }, [updateSuccess, setInput, date,updateError]);


    return (
        <div className="my-5 mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>
                <h3 className='py-1 mb-2'>Edit Book</h3>
                {
                    isLoading ? <Spinner />
                        : <div>
                            <form onSubmit={handleSubmit}
                            >
                                <div className="mb-6">
                                    <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input onChange={(e) => handleChange(e)} defaultValue={data?.data?.title} name="title" type="text" id="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="bookAuthor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                                    <input onChange={(e) => handleChange(e)} defaultValue={data?.data?.author} name="author" type="text" id="bookAuthor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Author" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="genreTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                                    <input onChange={(e) => handleChange(e)} defaultValue={data?.data?.genre} name="genre" type="text" id="genreTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Genre" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="imageTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Link</label>
                                    <input onChange={(e) => handleChange(e)} defaultValue={data?.data?.image} name="image" type="text" id="imageTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Genre" required />
                                </div>

                                <div className='mb-6'>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[280px] justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>{data?.data?.publicationDate}</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <button disabled={updateLoading} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {updateLoading ? <Spinner /> : "Submit"}
                                </button>
                            </form>
                        </div>
                }
            </div>
        </div>
    )
}
export default EditBook;