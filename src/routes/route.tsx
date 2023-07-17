import App from "@/App";
import BookDetailPage from "@/pages/BookDetailPage";
import Home from "@/pages/Home";
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
        }
      ]
    },
  ]);
export default router