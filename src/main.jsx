import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<App />
				<Router />
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
