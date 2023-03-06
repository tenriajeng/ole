import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import CardLoading from "../../components/cardLoading";
import CourseSection from "../../components/course/courseSection";
import courseService from "../../service/courseService";

function CourseMaterialPage() {
    let { slug, slugMaterial } = useParams();
    const globalCourse = useSelector((state) => state.courseReducer.course);
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getSingleCourse() {
        if (globalCourse) {
            setCourse(globalCourse);
            setLoading(false);
        } else {
            courseService
                .getCourseBySlug(slug)
                .then((data) => {
                    setCourse(data.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    return null;
                });
        }
    }

    useEffect(() => {
        getSingleCourse();
    }, []);

    const url =
        "https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/post_video/56abb495275870e7b10dcc3f5d1c4b7e/Sematoform---Feed.mp4";

    const plyrProps = {
        type: "video",
        title: "Example title",
        sources: [
            {
                src: url,
                type: "video/mp4",
                size: 720,
            },
            {
                src: url,
                type: "video/mp4",
                size: 1080,
            },
        ],
    };

    return (
        <div className="flex w-screen flex-wrap justify-center">
            {!loading ? (
                <Breadcrumb name={course.name} slug={course.slug} />
            ) : (
                ""
            )}
            <div className="mt-4 grid w-10/12 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2">
                    <div className="sticky top-5">
                        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                            <Plyr source={plyrProps} />
                        </div>
                        <div>
                            {!loading ? (
                                <h1 className="mt-2 text-2xl text-white">
                                    {course.name}
                                </h1>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
                <div>
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

export default CourseMaterialPage;
