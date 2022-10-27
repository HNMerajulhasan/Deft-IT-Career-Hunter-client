import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Main from "../Components/Main/Main";
//import ErrorPage from "../components/ErrorPage/ErrorPage";
//import CourseDetails from "../components/CoursesDetails/CourseDetails";
//import ErrorPage from "../components/ErrorPage/ErrorPage";
//import Main from "../components/Main/Main";
import Premium from "../Components/Premium/Premium";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                 loader: () => fetch(`https://assignment-10-server-olive.vercel.app/courses`)
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course/:_id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-10-server-olive.vercel.app/courseDetails/${params._id}`)
            },
            {
                path: '/course/:_id/checkout',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-server-olive.vercel.app/courseDetails/${params._id}`)
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
])