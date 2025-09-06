"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeletebookMutation } from "@/redux/api/bookApi";

interface DeleteBookProps {
  bookId: string;
  bookTitle: string;
  onClose: () => void;
}

const DeleteBook: React.FC<DeleteBookProps> = ({
  bookId,
  bookTitle,
  onClose,
}) => {
  const [deleteBook, { isLoading }] = useDeletebookMutation();

  const handleDelete = async () => {
    await deleteBook({ id: bookId });
    onClose();
  };

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="hidden" />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion?</AlertDialogTitle>
          <p>Are you sure you want to delete "{bookTitle}"?</p>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-500 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBook;
