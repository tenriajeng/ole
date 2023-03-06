import React, { useEffect } from "react";

import Navigation from "./components/navigation";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { authentication } from "./store";
import authService from "./service/authService";
import { Cookies } from "react-cookie";

function App() {
    const dispatch = useDispatch();
    const cookies = new Cookies();

    const getAuthUser = () => {
        authService
            .authenticateUser()
            .then((response) => {
                console.log(response);
                dispatch(authentication.setAuthenticate(response));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (cookies.get("auth_token")) {
            getAuthUser();
        }
    }, []);

    return (
        <div>
            <Helmet>
                <title>Vite+React!</title>
                <meta name="description" content="this meta description." />
                <style>{"body { background-color: #10172a; }"}</style>
            </Helmet>
            <Navigation />
        </div>
    );
}

export default App;
