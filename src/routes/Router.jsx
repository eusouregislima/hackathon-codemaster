import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Home,
  Lessons,
  Login,
  Pomodoro,
  Profille,
  Signup,
  Todo,
} from "../pages";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/lessons",
      element: <Lessons />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pomodoro",
      element: <Pomodoro />,
    },
    {
      path: "/profille",
      element: <Profille />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
