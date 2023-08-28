import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { DonatePage } from "../../pages/donate";
import { Layout } from "../../shared/components/Layout";
import { HomePage } from "../../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "donate",
        element: <DonatePage />,
      },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
