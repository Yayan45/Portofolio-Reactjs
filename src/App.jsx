import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import HomePage from "./components/HomePage";
import ReadMore from "./pages/ReadMore";
import Gallery from "./pages/Gallery";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "//Readmore/:id",
    element: <ReadMore />,
  },
  {
    path: "//Gallery",
    element: <Gallery />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
