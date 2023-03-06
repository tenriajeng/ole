import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import CardImage from "../../components/cardImage";
import CardLoading from "../../components/cardLoading";
import CourseCard from "../../components/course/courseCard";
import courseService from "../../service/courseService";

function Courses() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const [page, setPage] = useState(1);

    async function getCourses(pageNumber) {
        courseService
            .getList(pageNumber)
            .then((res) => {
                setNoData(res.data.length == 0 ? true : false);
                const newPage = pageNumber + 1;
                const newList = courses.concat(res.data);
                setCourses(newList);
                setLoading(false);
                setPage(newPage);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        setLoading(true);
        getCourses(page);
    }, []);

    return (
        <div className="flex w-screen flex-wrap justify-center ">
            {!loading ? <Breadcrumb name={"Terbaru"} /> : ""}
            <div className="mt-10 grid w-10/12 grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {courses.map((course) => {
                    return (
                        <Link to={course.slug} key={course.slug}>
                            <div className="aspect-auto overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 to-slate-900 p-2 hover:from-cyan-800 hover:to-slate-900">
                                <CardImage
                                    course={course}
                                    aspectRatio={"aspect-video"}
                                    rounded={"rounded-xl"}
                                />

                                <div className="mt-1 flex w-full gap-2 py-2">
                                    <span className="flex items-center rounded-lg px-2 py-1 text-xs text-white outline outline-1 outline-white hover:outline-cyan-500">
                                        Microservice
                                    </span>
                                    <span className="flex items-center rounded-lg px-2 py-1 text-xs text-white outline outline-1 outline-white hover:outline-cyan-500">
                                        Golang
                                    </span>
                                </div>

                                <div className="w-full">
                                    <span className="text-sm font-medium text-white">
                                        {course.name}
                                        {course.name}
                                        {course.name}
                                    </span>
                                </div>

                                <div className="mb-2 flex w-full items-center justify-between">
                                    <div className="flex w-full items-center">
                                        {/* <span className="mr-1 rounded-full bg-slate-700 p-1">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-5 w-5 fill-slate-100"
                                            >
                                                <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2z" />
                                            </svg>
                                        </span> */}
                                        <span className="text-xs text-slate-300">
                                            {course.user.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}

                {loading ? <CardLoading /> : ""}
            </div>
        </div>
    );
}

export default Courses;
