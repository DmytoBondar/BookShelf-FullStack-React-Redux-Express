import { useGetSingleBookQuery } from '@/redux/features/book/bookApi'
import { useParams } from 'react-router-dom'
import Review from './Review';
import DetailHeader from '@/layout/DetailHeader';

const BookDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id)

  let content = null;
  if (isLoading) content = <div>Loading ...</div>;
  if (!isLoading && isError) content = <div>Something went wrong.</div>;
  if (!isLoading && !isError && data?.data) content = <div>Data is empty.</div>;
  if (!isLoading && !isError && data?.data) {
    content = (
      <>
        <DetailHeader data={data?.data}/>
        <Review />
      </>
    )
  }
  return (
    <>
      {content}
    </>
  )
}

export default BookDetailPage