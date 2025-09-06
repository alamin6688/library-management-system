import { z } from "zod";

// ✅ Schema definition
export const bookSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  author: z.string().min(1, { message: "Author is required." }),
  genre: z.string().min(1, { message: "Genre is required." }),
  isbn: z.string().min(1, { message: "ISBN is required." }),
  description: z.string().optional(),
  copies: z
    .number({ error: "Copies must be a number." })
    .int()
    .min(0, { message: "Copies cannot be negative." }),
  available: z.boolean({ error: "Available must be true or false." }),
});

// ✅ Type for form data
export type BookFormData = z.infer<typeof bookSchema>;
