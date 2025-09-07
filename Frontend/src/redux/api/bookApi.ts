import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-mongoose.vercel.app/api/",
  }),
  tagTypes: ["book", "borrow"],
  endpoints: (build) => ({
    // --- Books ---
    getbooks: build.query({
      query: () => `books`,
      providesTags: ["book"],
    }),

    addBooks: build.mutation({
      query: (body) => ({
        url: `books`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["book"],
    }),

    updatebook: build.mutation({
      query: ({ id, body }) => ({
        url: `books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["book"],
    }),

    deletebook: build.mutation({
      query: ({ id }) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    // --- Borrow ---
    getBorrowedBooks: build.query({
      query: () => `borrow`,
      providesTags: ["borrow"],
    }),

    borrowBooks: build.mutation({
      query: (body) => ({
        url: `borrow`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["borrow", "book"],
    }),
    //  borrowBooks: build.mutation<void, { book: string; quantity: number; dueDate: string }>({
    //   query: (body) => ({
    //     url: "borrow",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["borrow"],
    // }),

  }),
});

export const {
  useGetbooksQuery,
  useAddBooksMutation,
  useUpdatebookMutation,
  useDeletebookMutation,
  useGetBorrowedBooksQuery,
  useBorrowBooksMutation,
} = booksApi;
