import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { Middleware } from "./utils/middleware/Middleware";
import { Layout } from "./pages/Layout";
import { Dashboard, DetailStore, NotFoundPage, Store } from "./pages";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Middleware />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="store">
              <Route index element={<Store />} />
              <Route path=":id" element={<DetailStore />} />
            </Route>

            <Route path="about">
              <Route index element={<h1>About Page</h1>} />
              <Route path="About-child-page" element={<h1>About Child Page</h1>} />
            </Route>
            {/* <Route path="localStorage" element={<pre>{JSON.stringify(JSON.parse(localStorage?.store), null, 2)}</pre>} /> */}
            {/* end of route here */}
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="error" element={<h1>error</h1>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};
