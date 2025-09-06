import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/Home/Home";
import AllBooks from "@/components/AllBooks/AllBooks";
import AddBook from "@/AddBook/AddBook";
import BorrowSummary from "@/BorrowSummary/BorrowSummary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "books", element: <AllBooks /> },
      { path: "create-book", element: <AddBook /> },
      { path: "borrow-summary", element: <BorrowSummary /> },
    ],
  },
]);
