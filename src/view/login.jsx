import { useRef, useState } from "react";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../service/authService";
import { authentication } from "../store/index";

function Login() {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();

    const inputStyle =
        "flex h-12 w-full items-center rounded-lg bg-slate-800 px-4 text-sm font-normal text-gray-200 outline outline-1 outline-transparent focus:outline-cyan-500";
    const labelStyle = "mb-1 block text-sm font-light text-white";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        authService
            .login({ email: "test@example.com", password: "password" })
            .then((response) => {
                const date = new Date();
                date.setDate(date.getDate() + 30);

                cookies.set("auth_token", response.access_token, {
                    expires: date,
                    path: "/",
                });
                navigate("/");
                dispatch(authentication.setAuthenticate(response));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="flex w-1/3 flex-col">
                <h1 className="text-xl font-medium text-white">
                    Masuk keakun anda
                </h1>
                <div className="mb-6">
                    <span className="font-light text-gray-400">
                        Tidak punya akun ?{" "}
                    </span>
                    <span className="cursor-pointer text-blue-500">Daftar</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className={labelStyle}>
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Email"
                            ref={emailRef}
                            className={inputStyle}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className={labelStyle}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            ref={passwordRef}
                            className={inputStyle}
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <span className="text-sm text-white">
                                Ingat saya
                            </span>
                            <span className="text-sm text-white">
                                Forgot Password?
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="flex h-10 w-full items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-normal capitalize text-gray-200 outline outline-1 hover:outline-cyan-500"
                        >
                            log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
