import { useGetbooksQuery } from "@/redux/api/bookApi";
import BookPage from "./bookPage";

const AllBooks: React.FC = () => {
  const { data, isLoading } = useGetbooksQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">All Books</h1>
      <p>Here is a list of all books.</p>
      <BookPage></BookPage>
    </div>
  );
};

export default AllBooks;
