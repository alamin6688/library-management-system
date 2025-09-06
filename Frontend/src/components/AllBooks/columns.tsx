import { type ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { PenIcon, XIcon } from "lucide-react";


export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export const getColumns = (onEdit: (book: Book) => void, onDelete: (book: Book) => void): ColumnDef<Book>[] => [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "copies",
    header: "Copies",
  },
  {
    accessorKey: "available",
    header: "Availability",
    cell: ({ row }) => (
      <span
        className={
          row.original.available
            ? "text-green-600 font-semibold"
            : "text-red-600 font-semibold"
        }
      >
        {row.original.available ? "Available" : "Unavailable"}
      </span>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => row.original.description || "-",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      row.original.createdAt
        ? new Date(row.original.createdAt).toLocaleDateString()
        : "-",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) =>
      row.original.updatedAt
        ? new Date(row.original.updatedAt).toLocaleDateString()
        : "-",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const book = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="bg-blue-500 text-white"
            onClick={() => onEdit(book)}
          >
            <PenIcon className="w-4 h-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="bg-red-500 text-white"
            onClick={() => onDelete(book)}
          >
            <XIcon className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
