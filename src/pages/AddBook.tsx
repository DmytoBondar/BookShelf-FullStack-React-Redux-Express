import React, { useEffect } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from 'react';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { usePostBookMutation } from '@/redux/features/book/bookApi';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [postBook, { isError, isSuccess }] = usePostBookMutation();
    const navigate = useNavigate();
    const [input, setInput] = useState({})
    const [date, setDate] = React.useState<Date>()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const data = {
            ...input,
            publicationDate: date as unknown as string
        };
        if (date) {
            postBook(data)
        }
        else {
            console.log("Publication date is required")
        }

    };
    useEffect(() => {
      if(isSuccess){
        console.log("success message")
        navigate('/')
      }
      if(isError){
        console.log("success error")

      }
    }, [isSuccess, isError])
    

    return (
        <div className="my-5 mx-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div>
                <h3 className='py-1 mb-2'>Add Book</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                            <input name="title" onChange={(e) => handleChange(e)} type="text" id="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="bookAuthor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                            <input name="author" onChange={(e) => handleChange(e)} type="text" id="bookAuthor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Author" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="genreTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
                            <input name="genre" onChange={(e) => handleChange(e)} type="text" id="genreTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Genre" required />
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
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
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
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        
        </div>
    )
}

export default AddBook