import { Disclosure } from "@headlessui/react";
import CourseMaterials from "./courseMaterials";

function CourseSection({ course }) {
    return course.course_sections.map((course_section) => {
        return (
            <div
                className="mb-2 block rounded-lg bg-cyan-800/25"
                key={course_section.slug}
            >
                <Disclosure>
                    <Disclosure.Button className="flex w-full justify-between px-3 py-3 text-gray-200 hover:cursor-pointer">
                        <span className="font-semibold">
                            {course_section.name}
                        </span>
                        <span className="font-light">
                            {course_section.course_materials.length} Lectures
                        </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mx-2 overflow-hidden text-gray-300">
                        <CourseMaterials courseSection={course_section} />
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        );
    });
}

export default CourseSection;
