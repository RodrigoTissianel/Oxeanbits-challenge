import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./src/pages/RootLayout";
import Home from "./src/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> }],
    },
]);

export default router;
