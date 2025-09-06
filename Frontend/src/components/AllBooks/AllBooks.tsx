import { useGetbooksQuery } from "@/redux/api/bookApi";
import BookPage from "./bookPage";
import BookAddModal from "./BookAddModal";

const AllBooks: React.FC = () => {
  const { data, isLoading } = useGetbooksQuery(undefined);

  console.log(data);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold ">All Books</h1>
        <p>Here is a list of all books.</p>
      </div>

      <BookAddModal></BookAddModal>
      <BookPage></BookPage>
    </div>
  );
};

export default AllBooks;
