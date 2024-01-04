import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Jobs from "../pages/Jobs/Jobs";
import Favourites from "../pages/Favourites/Favourites";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Job from "../components/Job/Job";
import AddJobs from "../pages/AddJobs/AddJobs";
import Applied from "../pages/Applied/Applied";
import PrivateRoutes from "./PrivateRoutes";
import JobDetails from "../components/JobDetails/JobDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoutes>
            <Favourites />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "/jobs",
        element: (
          <PrivateRoutes>
            <Jobs />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:9000/jobs"),
      },
      {
        path: "/jobs/:jobsId",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:9000/jobs/${params.jobsId}`),
      },
      {
        path: "/addjobs",
        element: (
          <PrivateRoutes>
            <AddJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/applied",
        element: (
          <PrivateRoutes>
            <Applied />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
