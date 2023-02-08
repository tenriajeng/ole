import { Route, Routes } from "react-router-dom";
import Article from "../view/article";
import Home from "../view/home";

function Router() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/article" element={<Article />} />
			<Route path="/subscription" element={<Article />} />
		</Routes>
	);
}

export default Router;
