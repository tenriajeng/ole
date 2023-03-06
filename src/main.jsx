import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                    <Router />
                </BrowserRouter>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
