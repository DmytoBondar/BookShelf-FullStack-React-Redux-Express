import { useGetSingleBookQuery } from '@/redux/features/book/bookApi'
import { useParams } from 'react-router-dom'
import Review from './Review';
import DetailHeader from '@/layout/DetailHeader';
import Spinner from '@/layout/Spinner';
import AlertLayout from '@/layout/Alert';

const BookDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  
  let content = null;
  if (isLoading) content = <Spinner/>;
  if (!isLoading && isError) content = <AlertLayout title="Something Went Wrong !!"/>;
  if (!isLoading && !isError && data?.data) content = <AlertLayout title="No Data is Available !!"/>;
  if (!isLoading && !isError && data?.data) {
    content = (
      <>
        <DetailHeader data={data?.data}/>
        <Review id={id}/>
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