import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Modal({ onOpen, onClose }) {
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
                    <div className="mt-32 flex min-h-full items-start justify-center text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex w-full max-w-xl transform items-center rounded-lg bg-slate-800 text-left align-middle shadow-xl transition-all">
                                <MagnifyingGlassIcon className="mx-2 h-6 w-6 text-gray-200" />

                                <input
                                    placeholder="Search ..."
                                    type="text"
                                    className="flex h-12 w-full items-center rounded-lg bg-slate-800 px-1 text-sm font-normal text-gray-200 outline outline-1 outline-transparent"
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;
