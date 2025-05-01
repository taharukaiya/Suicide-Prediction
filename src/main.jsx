import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import About from "./components/About";
import Error from "./components/Error";
import PredictionForm from "./components/PredictionForm";
import Awareness from "./components/Awareness";
import Counselor from "./components/Counselor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        index: true,
        element: <Awareness />,
      },
      {
        path: "/try-prediction",
        element: <PredictionForm />,
      },
      {
        path: "/counseling",
        element: <Counselor />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
