import { Route, Routes } from "react-router-dom";
import Article from "../view/article";
import Home from "../view/home";
import CourseDetail from "../view/course/courseDetail";
import CourseMaterialPage from "../view/course/courseMaterialPage";
import Courses from "../view/course/courses";
import Login from "../view/login";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/golang" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route
                path="/course/:slug/:slugMaterial"
                element={<CourseMaterialPage />}
            />
            <Route path="/article" element={<Article />} />
            <Route path="/subscription" element={<Article />} />
        </Routes>
    );
}

export default Router;
