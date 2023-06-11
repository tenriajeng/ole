import { Link } from "react-router-dom";

function Breadcrumb({ name, slug }) {
    return (
        <div className="mt-1 flex w-full items-center justify-center bg-slate-900/50 py-3 shadow-sm shadow-slate-600/50">
            <div className="mb-1.5 flex w-10/12 items-center justify-between">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link
                                to={"/"}
                                className="ml-1 text-sm font-medium text-gray-100 hover:text-cyan-500 md:ml-2"
                            >
                                OLE
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 stroke-0 text-gray-100"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <Link
                                    to={"/course"}
                                    className="ml-1 text-sm font-medium text-gray-100 hover:text-cyan-500 md:ml-2"
                                >
                                    Course
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 stroke-0 text-gray-100"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="ml-1 text-sm font-light text-gray-100 md:ml-2">
                                    {name}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
                {/* <span className="text-white">a</span> */}
            </div>
        </div>
    );
}

export default Breadcrumb;
