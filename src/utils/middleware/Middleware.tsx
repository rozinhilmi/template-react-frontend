import { Outlet } from "react-router";

export const Middleware = () => {
  console.log("MiddleWare active");
  return <Outlet />;
};
