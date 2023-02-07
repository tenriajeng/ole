import React, { useEffect, useState } from "react";

import Navigation from "./components/navigation";
import Card from "./components/card";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import CardLoading from "./components/cardLoading";
import HeroCarousel from "./components/heroCarousel";

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
			<HeroCarousel topics={topics} />

			<div className="w-screen flex justify-center flex-wrap">
				<div className="w-11/12 flex items-center justify-between mt-4">
					<span className="text-2xl font-semibold text-indigo-500">Trend</span>
					<span className="text-base font-semibold text-indigo-500 hover:cursor-pointer hover:underline">See All</span>
				</div>
				<div className="w-11/12 mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
					{!loading ? (
						topics.map((topic, key) => {
							if (key < 4) {
								return <Card key={topic.slug} topic={topic} />;
							}
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
