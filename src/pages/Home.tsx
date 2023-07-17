import Books from "@/components/Books";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { IBooks } from "@/types";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);

  //decide what to render
  let content = null;
  if(isLoading) content = <div>Loading ...</div>;
  if(!isLoading && isError) content = <div>Something went wrong.</div>;
  if(!isLoading && !isError && data?.data?.length === 0) content = <div>Data is empty.</div>;
  if(!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((book: IBooks) => <Books book={book} key={book._id}/>)
  }
  return (
    <div className="p-2 flex justify-center">
      {content}
    </div>
  );
};

export default Home;
