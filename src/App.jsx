import React, { useEffect, useState } from "react";

import Navigation from "./components/navigation";
import CategoriesCarousel from "./components/categoriesCarousel";
import Card from "./components/card";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import CardLoading from "./components/cardLoading";

function App() {
	const [topics, setTopics] = useState([]);
	const [loading, setLoading] = useState(false);

	async function getTopics() {
		await axios
			.get("https://sejawat.co.id/api/v1/event")
			.then((data) => {
				setTopics(data.data.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
	}

	useEffect(() => {
		setLoading(true);
		getTopics();
	}, []);

	return (
		<div>
			<Helmet>
				<title>Vite+React!</title>
				<meta name="description" content="this meta description." />
			</Helmet>
			<Navigation />
			{/* <CategoriesCarousel /> */}
			<div className="w-screen flex justify-center">
				<div className="w-11/12 mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
					{!loading ? (
						topics.map((topic) => {
							return <Card key={topic.slug} topic={topic} />;
						})
					) : (
						<CardLoading />
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
