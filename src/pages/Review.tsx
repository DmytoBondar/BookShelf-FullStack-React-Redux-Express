import { useState } from 'react'

const Review = () => {
    const [input, setInput] = useState('');
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    }
    return (
        <div className='mt-72 max-w-2xl mx-auto p-5 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">'>

            <div className='flex gap-2'>
                <div className='border-amber-500 w-10'>
                    <img className='rounded-full' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
                </div>
                <div>
                    <h4 className='text-sm'>Ujjal Zaman</h4>
                    <p className='text-xs'>02 February 2023</p>
                </div>
            </div>
            <div className='mb-2 p-2'>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis voluptates optio assumenda commodi, dicta repellendus veniam, et, officiis enim nesciunt nemo! Eveniet sequi molestias, odit quidem aperiam pariatur repellendus.</p>
            </div>

            <div className='flex gap-2'>
                <div className='border-amber-500 w-10'>
                    <img className='rounded-full' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
                </div>
                <div>
                    <h4 className='text-sm'>Ujjal Zaman</h4>
                    <p className='text-xs'>02 February 2023</p>
                </div>
            </div>
            <div className='mb-2 p-2'>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perferendis voluptates optio assumenda commodi, dicta repellendus veniam, et, officiis enim nesciunt nemo! Eveniet sequi molestias, odit quidem aperiam pariatur repellendus.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className=''>
                    <div className='flex gap-2 justify-center'>
                        <input name="title" onChange={(e) => setInput(e.target.value)} type="text" id="bookTitle" className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment ..." />
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Review