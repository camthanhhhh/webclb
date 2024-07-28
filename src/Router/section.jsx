import {Outlet, useRoutes } from "react-router-dom";
import HomePage from "../Pages/home-page/home_page";
import DashBoardLayout from "../Layouts/dashboard";
import LoginPage from "../Pages/user/login";


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
        { path: "login", element: <LoginPage/> },
    
      ],
    },
  ]);
  return routes;
}
export default Router;