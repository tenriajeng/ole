import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./modal";
import AvatarDropdown from "./avatarDropdown";
import { PlusIcon } from "@heroicons/react/24/solid";
import ModalCreateCourse from "./course/modalCreateCourse";
import { Tooltip } from "flowbite-react";

function Navigation() {
    let [isOpen, setIsOpen] = useState(false);
    let [modalCreateCourseIsOpen, setModalCreateCourseIsOpen] = useState(false);
    const globalAuth = useSelector((state) => state.authReducer.authenticate);

    function openModal() {
        setIsOpen(true);
    }

    function openModalCreateCourse() {
        setModalCreateCourseIsOpen(true);
    }

    const menuStyle =
        "font-medium text-sm text-gray-100 hover:cursor-pointer hover:text-cyan-500";
    const brandStyle =
        "flex items-center text-2xl text-cyan-400 font-semibold hover:cursor-pointer";

    return (
        <>
            <div className="flex h-16 w-screen items-center justify-center bg-slate-900 shadow-sm shadow-slate-600/50 ">
                <div className="flex w-10/12 justify-between">
                    <div className="flex w-6/12 items-center justify-start space-x-10">
                        <Link to="/" className={brandStyle}>
                            <img
                                className="mx-1"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="brand"
                            />
                            <span>VLAB</span>
                        </Link>
                        <Link to={"/course"} className={menuStyle}>
                            Course
                        </Link>
                        <Link to={"/article"} className={menuStyle}>
                            Article
                        </Link>
                    </div>
                    <div className="flex w-4/12 items-center justify-end space-x-2">
                        <button
                            type="button"
                            onClick={openModal}
                            className="flex h-9 w-5/12 items-center rounded-lg bg-slate-900 px-3 text-sm font-normal text-gray-200 outline outline-1 hover:outline-cyan-500"
                        >
                            <svg
                                className="mr-2 h-5 w-5"
                                viewBox="0 0 1024 1024"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
                            </svg>
                            <span className="capitalize">Search ...</span>
                        </button>
                        {globalAuth ? (
                            <>
                                <Tooltip content="Create Course" style="dark">
                                    <button
                                        onClick={openModalCreateCourse}
                                        type="button"
                                        className="flex h-9 items-center justify-between rounded-lg bg-slate-900 px-2 text-sm font-normal text-gray-200 outline outline-1 hover:outline-cyan-500"
                                    >
                                        <PlusIcon className="h-5 w-5" />
                                    </button>
                                </Tooltip>
                                <AvatarDropdown />
                            </>
                        ) : (
                            <>
                                <Link
                                    to={"login"}
                                    className="flex h-9 items-center rounded-lg bg-slate-900 px-3 text-sm font-normal capitalize text-gray-200 outline outline-1 hover:outline-cyan-500"
                                >
                                    log in
                                </Link>
                                <button className="flex h-9 items-center rounded-lg bg-slate-900 px-3 text-sm font-normal capitalize text-gray-200 outline outline-1 hover:outline-cyan-500">
                                    sign Up
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Modal onOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
            <ModalCreateCourse
                onOpen={modalCreateCourseIsOpen}
                onClose={() =>
                    setModalCreateCourseIsOpen(!modalCreateCourseIsOpen)
                }
            />
        </>
    );
}

export default Navigation;
