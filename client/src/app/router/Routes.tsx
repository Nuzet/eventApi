import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../featues/home/HomePage";
import ActivityBord from "../../featues/activities/daschboard/ActivityBoard";
import ActivityForm from "../../featues/activities/form/ActivityForm";
import ActivityDetails from "../../featues/activities/details/ActivityDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityBord /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
        ]
    }
])