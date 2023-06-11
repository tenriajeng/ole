import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./modal";
import AvatarDropdown from "./avatarDropdown";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
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
                            className="flex h-9 w-6/12 items-center rounded-lg bg-slate-900 px-3 text-sm font-normal text-gray-200 outline outline-1 hover:outline-cyan-500"
                        >
                            <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
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
