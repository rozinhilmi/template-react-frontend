import { Outlet } from "react-router";

const Middleware = () => {
  console.log("MiddleWare active");
  return <Outlet />;
};

export default Middleware;
