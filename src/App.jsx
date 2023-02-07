import React, { useEffect, useState } from "react";

import Navigation from "./components/navigation";
import CategoriesCarousel from "./components/categoriesCarousel";
import Card from "./components/card";
import axios from "axios";

function App() {
	const [topics, setTopics] = useState([]);

	async function getTopics() {
		await axios
			.get("https://sejawat.co.id/api/v1/event")
			.then((data) => {
				setTopics(data.data.data);
				console.log(data.data.data);
			})
			.catch((err) => {
				console.log(err);
				return null;
			});
	}

	useEffect(() => {
		getTopics();
	}, []);

	return (
		<div>
			<Navigation />
			{/* <CategoriesCarousel /> */}
			<div className="w-screen flex justify-center">
				<div className="w-11/12 mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{topics.map((topic) => {
						return <Card key={topic.slug} topic={topic} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
