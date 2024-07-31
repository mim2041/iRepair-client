import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import AdminLayout from "@/components/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import AddService from "@/pages/admin/AddService";
import ServiceList from "@/pages/admin/ServiceList";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <div>login</div>
            }
        ]
    },
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "service-list",
                element: <ServiceList />
            },
            {
                path: 'add-service',
                element: <AddService />
            }
        ]
    }
]);

export default router;