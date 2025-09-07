"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBorrowBooksMutation } from "@/redux/api/bookApi";
import type { Book } from "./columns";
import { useNavigate } from "react-router-dom";

// ✅ Define validation schema
const borrowSchema = z.object({
  quantity: z
    .number({ error: "Quantity is required" })
    .min(1, { message: "Quantity must be at least 1" }),
  dueDate: z.string().min(1, { message: "Due date is required" }),
});

type BorrowFormData = z.infer<typeof borrowSchema>;

interface BorrowBookProps {
  book: Book;
  open: boolean;
  onClose: () => void;
}

const BorrowBook: React.FC<BorrowBookProps> = ({ book, open, onClose }) => {
  const [borrowBook, { isLoading }] = useBorrowBooksMutation();
  const navigate = useNavigate();

  const form = useForm<BorrowFormData>({
    resolver: zodResolver(borrowSchema),
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (values: BorrowFormData) => {
    try {
      await borrowBook({
        book: book._id,
        quantity: values.quantity,
        dueDate: values.dueDate,
      }).unwrap();

      form.reset();
      onClose();
      navigate("/borrow-summary");
    } catch (err) {
      console.error("Failed to borrow book:", err);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogTrigger asChild>
        <Button variant="default" className="hidden" />
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AlertDialogHeader>
            <AlertDialogTitle>Borrow "{book.title}"</AlertDialogTitle>
          </AlertDialogHeader>

          <div className="flex flex-col gap-4 py-4">
            {/* Quantity field */}
            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <Input
                type="number"
                min={1}
                {...form.register("quantity", { valueAsNumber: true })}
              />
              {form.formState.errors.quantity && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.quantity.message}
                </p>
              )}
            </div>

            {/* Due Date field */}
            <div>
              <label className="block text-sm font-medium">Due Date</label>
              <Input type="date" {...form.register("dueDate")} />
              {form.formState.errors.dueDate && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.dueDate.message}
                </p>
              )}
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel type="button">Cancel</AlertDialogCancel>
            <Button
              type="submit"
              className="bg-green-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Borrowing..." : "Confirm Borrow"}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BorrowBook;
