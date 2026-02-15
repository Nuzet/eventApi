import { createBrowserRouter, Navigate } from "react-router";
import App from "../layout/App";
import HomePage from "../../featues/home/HomePage";
import ActivityBord from "../../featues/activities/daschboard/ActivityBoard";
import ActivityForm from "../../featues/activities/form/ActivityForm";
import ActivityDetailsPage from "../../featues/activities/details/ActivityDetailsPage";
import Counter from "../../featues/counter/Counter";
import TestErrors from "../../featues/errors/TestErrors";
import NotFound from "../../featues/errors/NotFound";
import ServerError from "../../featues/errors/ServerError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityBord /> },
            { path: 'activities/:id', element: <ActivityDetailsPage /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'counter', element: <Counter /> },
            { path: 'errors', element: <TestErrors /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]

    }
])