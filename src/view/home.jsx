import { useEffect, useState } from "react";
import CardLoading from "../components/cardLoading";
import HeroCarousel from "../components/heroCarousel";
import { Link } from "react-router-dom";
import CardImage from "../components/cardImage";
import CourseService from "../service/courseService";

function Home() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const [page, setPage] = useState(1);

    window.onscroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.offsetHeight - 200
        ) {
            if (!noData) {
                setNoData(true);
                setLoading(true);
                getcourses(page);
            }
        }
    };

    async function getcourses(pageNumber) {
        CourseService.getList(pageNumber)
            .then((response) => {
                console.log(response.data);
                setNoData(response.data.length == 0 ? true : false);
                const newPage = pageNumber + 1;
                const newList = courses.concat(response.data);
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
        getcourses(page);
    }, []);

    return (
        <>
            <HeroCarousel courses={courses} />
            <div className="flex w-screen flex-wrap justify-center ">
                <div className="mt-4 flex w-10/12 items-center justify-between">
                    <span className="text-2xl font-semibold text-gray-200">
                        Trend
                    </span>
                    <span className="text-base font-semibold text-gray-200 hover:cursor-pointer hover:underline">
                        See All
                    </span>
                </div>
                <div className="mt-2 grid w-10/12 grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {courses.map((course) => {
                        return (
                            <Link
                                to={"course/" + course.slug}
                                key={course.slug}
                            >
                                <CardImage
                                    course={course}
                                    rounded={"rounded-xl"}
                                    aspectRatio={"aspect-video"}
                                />
                            </Link>
                        );
                    })}

                    {loading ? <CardLoading /> : ""}
                </div>
            </div>
        </>
    );
}

export default Home;
