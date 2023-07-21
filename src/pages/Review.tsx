import { useAddBookCommentMutation, useGetBookCommentsQuery } from '@/redux/features/comment/commentApi';
import { useState } from 'react'

export interface IProps {
    id: string | undefined
}

const Review = ({ id }: IProps) => {
    const [input, setInput] = useState('');
    const [addBookComment, { isSuccess: commentSuccess, isError: commentError }] = useAddBookCommentMutation()
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const data = {
            bookId: id, comment: input
        }
        addBookComment(data)
        setInput('')
    }
    console.log(commentSuccess, commentError)
    const { data, isError, isLoading } = useGetBookCommentsQuery(id)

    let content = null;
    if (isLoading) content = <div>Loading ...</div>;
    if (!isLoading && isError) content = <div>Something went wrong.</div>;
    if (!isLoading && !isError && data?.data) content = <div>Data is empty.</div>;

    if (!isLoading && !isError && data?.data.length > 0) {
        content = data?.data?.map((item: { userId: { name: { firstName: string }; }; createdAt: string; comment: string }, id: any) => (
            <div key={id}>
                <div className='flex gap-2'>
                    <div className='border-amber-500 w-10'>
                        <img className='rounded-full' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="" />
                    </div>
                    <div>
                        <h4 className='text-sm'>{item?.userId?.name?.firstName}</h4>
                        <p className='text-xs'>{item.createdAt}</p>
                    </div>
                </div>
                <div className='mb-2 p-2'>
                    <p className='text-sm text-gray-700'>{item.comment}</p>
                </div>
            </div>
        ))
    }

    return (
        <div className='mt-72 max-w-2xl mx-auto p-5 my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">'>
            {content}
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <div className='flex gap-2 justify-center'>
                        <input name="title" value={input} onChange={(e) => setInput(e.target.value)} type="text" id="bookTitle" className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Comment ..." />
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comment</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Review