import { Link, useParams } from "react-router-dom";

function CourseMaterials({ courseSection }) {
    let { slug } = useParams();

    return courseSection.course_materials.map(
        (course_material, keyMaterials) => {
            return (
                <Link
                    key={course_material.slug}
                    to={`/course/${slug}/${course_material.slug}`}
                    className="text-sm"
                >
                    <div className="flex w-full items-center justify-between py-3 text-gray-200 shadow-sm shadow-slate-600 hover:cursor-pointer hover:text-cyan-300">
                        <div>
                            <span className="text-sm text-gray-300">
                                {keyMaterials + 1}.
                            </span>

                            {` ${course_material.name}`}
                        </div>
                        <div className="rounded-full bg-slate-800 p-1.5">
                            <span>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    className="h-4 w-4 fill-slate-100"
                                >
                                    <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>
            );
        }
    );
}

export default CourseMaterials;
