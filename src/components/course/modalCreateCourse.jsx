import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function ModalCreateCourse({ onOpen, onClose }) {
    const inputStyle =
        "flex h-12 w-full items-center rounded-lg bg-slate-800 px-4 text-sm font-normal text-gray-200 outline outline-1 outline-transparent focus:outline-cyan-500";
    const textAreaStyle =
        "flex h-32 w-full items-center rounded-lg bg-slate-800 p-4 text-sm font-normal text-gray-200 outline outline-1 outline-transparent focus:outline-cyan-500";
    const labelStyle = "mb-1 block text-sm font-light text-white";

    return (
        <Transition appear show={onOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className="flex min-h-full items-center justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex h-screen w-full transform flex-col items-center bg-slate-900 text-left align-middle shadow-xl transition-all">
                                <div className="flex h-16 w-full items-center justify-between bg-slate-900 px-2 py-4 shadow-sm shadow-slate-500/50">
                                    <span className="text-2xl text-white">
                                        Create Course
                                    </span>
                                    <button
                                        onClick={onClose}
                                        type="button"
                                        className="flex items-center rounded bg-slate-800 p-1 text-sm font-normal text-white outline outline-1 outline-white hover:outline-cyan-500"
                                    >
                                        <XMarkIcon className="h-4 w-4" />
                                    </button>
                                </div>

                                <div className="mt-5 flex h-full w-full items-center justify-center px-2">
                                    <div className="w-6/12 ">
                                        <div className="mb-4">
                                            <input
                                                id="title"
                                                type="text"
                                                placeholder="Title"
                                                className={inputStyle}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                id="description"
                                                type="text"
                                                placeholder="Description"
                                                className={textAreaStyle}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-16 w-full items-center justify-end bg-slate-900 px-2 ">
                                    <button
                                        onClick={onClose}
                                        type="button"
                                        className="flex w-20 items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5  text-sm font-normal text-white outline outline-1 outline-white hover:outline-cyan-500"
                                    >
                                        Next
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default ModalCreateCourse;
