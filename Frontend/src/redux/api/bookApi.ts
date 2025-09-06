import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-mongoose.vercel.app/api/",
  }),
  tagTypes: ["book"],
  endpoints: (build) => ({
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
  }),
});

export const { useGetbooksQuery, useAddBooksMutation, useUpdatebookMutation } =
  booksApi;
