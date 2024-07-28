import {Outlet, useRoutes } from "react-router-dom";
import HomePage from "../Pages/home-page/home_page";
import DashBoardLayout from "../Layouts/dashboard";
function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashBoardLayout>
          <Outlet />
        </DashBoardLayout>
      ),
      children: [
        { path :"/", element:  <HomePage></HomePage>},
        { path: "home", element: <HomePage /> },
        // { path: "history", element: <HistoryPage /> },
    
      ],
    },
  ]);
  return routes;
}
export default Router;