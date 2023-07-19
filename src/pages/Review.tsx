import { useState } from 'react'

const Review = () => {
    const [input, setInput] = useState('');
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
    }
    return (
        <div className='mx-10 p-5 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">'>
            <h3>{input}</h3>
            <p>user: Name</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="bookTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment</label>
                    <input name="title" onChange={(e) => setInput(e.target.value)} type="text" id="bookTitle" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book Title" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comment</button>
            </form>
        </div>
    )
}

export default Review