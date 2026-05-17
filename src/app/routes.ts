import { createBrowserRouter } from "react-router-dom";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { PoolCatalog } from "./pages/PoolCatalog";
import { AutomationKit } from "./pages/AutomationKit";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "catalog",
        Component: PoolCatalog,
      },
      {
        path: "automation-kit",
        Component: AutomationKit,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
