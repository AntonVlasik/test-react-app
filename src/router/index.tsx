import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { About, Home } from "src/pages"
import { AppLayout } from "src/components"
import { Path } from "./path";

export const createRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.About} element={<About />} />
        <Route path="*" element={"NOT FOUND!"} />
      </Route>
    )
  )
};
