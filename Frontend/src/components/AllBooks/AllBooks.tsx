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
      <BookAddModal></BookAddModal>
      <BookPage></BookPage>
    </div>
  );
};

export default AllBooks;
