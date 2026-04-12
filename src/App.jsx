import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import EmailDnd from "./pages/EmailDnd"

function App() {
  const routes = createRoutesFromElements(
    <Route>
      <Route index element={<EmailDnd />} />
    </Route>
  )

  const routers = createBrowserRouter(routes)
  return (
    <RouterProvider router={routers} />
  )
}

export default App
