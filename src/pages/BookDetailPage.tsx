import { useGetSingleBookQuery } from '@/redux/features/book/bookApi'
import { Link, useParams } from 'react-router-dom'

const BookDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id)

  let content = null;
  if (isLoading) content = <div>Loading ...</div>;
  if (!isLoading && isError) content = <div>Something went wrong.</div>;
  if (!isLoading && !isError && data?.data) content = <div>Data is empty.</div>;
  if (!isLoading && !isError && data?.data) {
    content = (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.data.title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.data.author}</p>
          <Link to={`/book/edit-book/${data.data._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </Link>
        </div>
      </div>
    )
  }
  return (
    <>
      {content}
    </>
  )
}

export default BookDetailPage