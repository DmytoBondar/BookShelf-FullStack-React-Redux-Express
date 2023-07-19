import Books from "@/components/Books";
import Sidebar from "@/layout/Sidebar";
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import { IBooks } from "@/types";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);

  //decide what to render
  let content = null;
  if (isLoading) content = <div>Loading ...</div>;
  if (!isLoading && isError) content = <div>Something went wrong.</div>;
  if (!isLoading && !isError && data?.data?.length === 0) content = <div>Data is empty.</div>;
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((book: IBooks) => <Books book={book} key={book._id} />)
  }
  return (

    <div className="grid grid-cols-6 gap-1 mt-3 mx-2 mb-2">
      <div className="col-span-1 bg-cyan-900 h-full">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <div className="grid grid-cols-2 gap-3 mb-10 mx-2">
          {content}
        </div>
      </div>
    </div>
  );
};
export default Home;