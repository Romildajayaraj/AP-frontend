import Error from "../Error";
import { ViewAuction } from "../pages/ViewAuction";
import { MainLayout } from "../layout/MainLayout";
import { CreateAuction } from "../pages/CreateAuction";
import  {MyAuction} from "../pages/MyAuction";
import { MyBids } from "../pages/MyBids";
import Profile from "../pages/Profile";
import Privacy from "../pages/Privacy";
import Dashboard from "../pages/Dashboard";
import {AuctionList} from "../pages/AuctionList";

export const protectedRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
  path: "/dashboard",
  element: <Dashboard />
  },
      {
        path: "auction",
        element: <AuctionList />,
        errorElement: <Error />,
      },
      {
        path: "myauction",
        element: <MyAuction />,
        errorElement: <Error />,
      },
      {
        path: "mybids",
        element: <MyBids />,
        errorElement: <Error />,
      },
      {
        path: "create",
        element: <CreateAuction />,
        errorElement: <Error />,
      },
      {
        path: "auction/:id",
        element: <ViewAuction />,
        errorElement: <Error />,
      },

      {
        path: "profile",
        element: <Profile />,
        errorElement: <Error />,
      },
      {
        path: "privacy",
        element: <Privacy />,
        errorElement: <Error />,
      },
    ],
  },
];
