import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import SingleGigs from "./pages/SingleGigs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Orders from "./pages/Orders";
import MyGigs from "./pages/MyGigs";
import Messages from "./pages/Messages";
import SingleMessage from "./pages/SingleMessage";
import Help from "./pages/Help";

import Add from "./pages/Add";
import Cars from "./pages/Gigs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import FeatursCars from "./component/FeatursCars";

function App() {
  const Layout = () => {
    const queryClient = new QueryClient();
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <MyGigs />,
        },
        {
          path: "/cars/:id",
          element: <SingleGigs />,
        },
        {
          path: "/order",
          element: <Orders />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <SingleMessage />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/cars",
          element: <Cars />,
        },

        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/exclusive",
          element: <FeatursCars />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
