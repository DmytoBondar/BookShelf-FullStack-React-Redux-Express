import App from "@/App";
import AddBook from "@/pages/AddBook";
import BookDetailPage from "@/pages/BookDetailPage";
import EditBook from "@/pages/EditBook";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>, 
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
          path: 'book/:id',
          element: <BookDetailPage/>
        },
        {
          path: 'book/add-book',
          element: <AddBook/>
        },
        {
          path: 'book/edit-book/:id',
          element: <EditBook/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]);
export default router