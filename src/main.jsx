import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Jobs from "./components/Jobs/Jobs";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import JobDetails from "./components/JobDetails/JobDetails";
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () => fetch("/public/jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/public/jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
