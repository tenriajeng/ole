import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/card";
import CardLoading from "../components/cardLoading";
import HeroCarousel from "../components/heroCarousel";

function Home() {
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
		<>
			<HeroCarousel topics={topics} />
			<div className="w-screen flex justify-center flex-wrap">
				<div className="w-10/12 flex items-center justify-between mt-4">
					<span className="text-2xl font-semibold text-black">Trend</span>
					<span className="text-base font-semibold text-black hover:cursor-pointer hover:underline">See All</span>
				</div>
				<div className="w-10/12 mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
					{!loading ? (
						topics.map((topic, key) => {
							if (key < 4) {
								return <Card key={topic.slug} topic={topic} shadow={true} />;
							}
						})
					) : (
						<CardLoading />
					)}
				</div>
			</div>
		</>
	);
}

export default Home;
