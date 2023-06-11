import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CardImage from "../../components/cardImage";
import CardLoading from "../../components/cardLoading";
import parse from "html-react-parser";
import courseService from "../../service/courseService";
import ShareToSocialMedia from "../../components/shareToSocialMedia";
import CourseSection from "../../components/course/courseSection";
import Breadcrumb from "../../components/breadcrumb";
import { actions } from "../../store/index";
import { useDispatch } from "react-redux";

function CourseDetail() {
    let { slug } = useParams();
    const dispatch = useDispatch();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    const setGlobalCourse = (data) => {
        dispatch(actions.setCourse(data));
    };

    async function getSinglecourse() {
        await courseService
            .getCourseBySlug(slug)
            .then((data) => {
                console.log(data.data);
                setCourse(data.data);
                setLoading(false);
                setGlobalCourse(data.data);
            })
            .catch((err) => {
                console.log(err);
                return null;
            });
    }

    useEffect(() => {
        getSinglecourse();
    }, []);

    return (
        <div className="flex w-screen flex-wrap justify-center ">
            {!loading ? (
                <Breadcrumb name={course.name} slug={course.slug} />
            ) : (
                ""
            )}
            <div className="mt-10 grid w-10/12 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
                <div className="w-full">
                    <div className="sticky top-5 h-auto rounded-2xl bg-gradient-to-b from-cyan-800/25 to-slate-900 p-10">
                        {loading ? (
                            <CardLoading aspectRatio={"aspect-video"} />
                        ) : (
                            <CardImage
                                course={course}
                                rounded={"rounded-xl"}
                                aspectRatio={"aspect-video"}
                            />
                        )}
                        <div className="w-full py-2">
                            <h1 className="text-2xl font-bold text-gray-200">
                                {!loading ? course.name : ""}
                            </h1>
                        </div>
                        <div className="w-full py-2 text-gray-200">
                            {/* {!loading ? parse(course.description) : ""} */}
                            {!loading ? course.description : ""}
                        </div>
                        <div className="flex w-full gap-2 py-2">
                            <button className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-normal text-gray-200 outline outline-1 hover:outline-cyan-500">
                                Microservice
                            </button>
                            <button className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-normal text-gray-200 outline outline-1 hover:outline-cyan-500">
                                Golang
                            </button>
                        </div>
                        <ShareToSocialMedia />
                    </div>
                </div>

                <div className="w-full">
                    {!loading ? (
                        <CourseSection course={course} />
                    ) : (
                        <CardLoading />
                    )}
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;
