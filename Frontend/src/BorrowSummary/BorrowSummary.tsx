"use client";

import { useGetBorrowedBooksQuery } from "@/redux/api/bookApi";

interface BorrowedBookResponse {
  _id: string;
  totalQuantity: number;
  book?: {
    _id?: string;
    title: string;
    isbn: string;
  };
}

interface Borrow {
  _id: string;
  book: {
    _id?: string;
    title: string;
    isbn: string;
  };
  quantity: number;
  dueDate: string;
}

const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowedBooksQuery(undefined);

  const borrowedArray: BorrowedBookResponse[] = Array.isArray(data)
    ? data
    : data && "data" in data && Array.isArray(data.data)
    ? data.data
    : [];

  const borrowed: Borrow[] = borrowedArray
    .filter((item) => item.book)
    .map((item) => ({
      _id: item._id,
      book: {
        _id: item.book?._id,
        title: item.book!.title,
        isbn: item.book!.isbn,
      },
      quantity: item.totalQuantity,
      dueDate: new Date().toISOString(),
    }));

  if (isLoading) return <p>Loading borrowed books...</p>;
  if (isError)
    return <p className="text-red-500">Failed to load borrowed books.</p>;

  return (
    <div>
      <h2 className="text-xl text-center py-8 font-semibold mb-4">Borrow Summary</h2>

      {borrowed.length > 0 ? (
        <ul className="space-y-2">
          {borrowed.map((borrow) => (
            <li
              key={borrow._id}
              className="p-3 border rounded-md shadow-sm bg-gray-50"
            >
              <p className="font-bold">Title: {borrow.book.title}</p>
              <p className="text-sm text-gray-600">ISBN: {borrow.book.isbn}</p>
              <p className="text-sm text-gray-600">
                Quantity: {borrow.quantity}
              </p>
              <p className="text-sm text-gray-500">
                Due Date: {new Date(borrow.dueDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No borrowed books found.</p>
      )}
    </div>
  );
};

export default BorrowSummary;
