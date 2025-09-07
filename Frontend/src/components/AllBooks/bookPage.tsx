"use client";

import { DataTable } from "./data-table";
import { useGetbooksQuery } from "@/redux/api/bookApi";
import { getColumns, type Book } from "./columns";
import { useState } from "react";
import UpdateForm from "./UpdateBook";
import DeleteBook from "./DeleteBook";
import BorrowBook from "./BorrowBook";



function BookPage() {
  const [borrowingBook, setBorrowingBook] = useState<Book | null>(null);
  const [editItem, setEditItem] = useState<Book | null>(null);
  const [deletingBook, setDeletingBook] = useState<Book | null>(null);
  const { data, isLoading } = useGetbooksQuery(undefined);

  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleEdit = (book: Book) => {
    setEditItem(book);
    console.log("Edit book:", book);
  };

  const handleDelete = (book: Book) => setDeletingBook(book);

  const handleBorrow = (book: Book) => setBorrowingBook(book);

  return (
    <div className="p-6">
      <h2 className="pb-6 text-xl font-semibold">Books</h2>

      {/* <DataTable columns={getColumns(handleEdit, handleDelete)} data={data?.data ?? []} /> */}

      <DataTable
        columns={getColumns(handleEdit, handleDelete, handleBorrow)}
        data={data?.data ?? []}
      />

      {editItem && (
        <UpdateForm
          book={editItem}
          open={true}
          onClose={() => setEditItem(null)}
        />
      )}

      {deletingBook && (
        <DeleteBook
          bookId={deletingBook._id}
          bookTitle={deletingBook.title}
          onClose={() => setDeletingBook(null)}
        />
      )}

      {borrowingBook && (
        <BorrowBook
          book={borrowingBook}
          open={true}
          onClose={() => setBorrowingBook(null)}
        />
      )}
    </div>
  );
}

export default BookPage;
