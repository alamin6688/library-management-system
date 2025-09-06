"use client";

import { DataTable } from "./data-table";
import { useGetbooksQuery } from "@/redux/api/bookApi";
import { getColumns, type Book } from "./columns";
// import { useState } from "react";
// import UpdateForm from "../updateItem/UpdateItem";

function BookPage() {
  // const [editItem, setEditItem] = useState<Book | null>(null);
  const { data, isLoading } = useGetbooksQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleEdit = (book: Book) => {
    // setEditItem(book);
    console.log("Edit book:", book);
  };

  return (
    <div className="p-6">
      <h2 className="pb-6 text-xl font-semibold">Books</h2>

      {/* <DataTable columns={getColumns(handleEdit)} data={data?.data}></DataTable> */}

      <DataTable columns={getColumns(handleEdit)} data={data?.data ?? []} />

      {/* {editItem && (
        <UpdateForm
          item={editItem}
          open={true}
          onClose={() => setEditItem(null)}
        />
      )} */}
    </div>
  );
}

export default BookPage;
