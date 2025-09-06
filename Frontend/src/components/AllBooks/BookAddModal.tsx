import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import AddBook from "./AddBook";
import { Button } from "../ui/button";

const BookAddModal = () => {
  return (
    <div className="p-10 flex items-center justify-end">
      <AlertDialog>
        <Button variant={"outline"}>
          <AlertDialogTrigger>Add Book</AlertDialogTrigger>
        </Button>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogDescription>
              <AddBook />
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default BookAddModal;
