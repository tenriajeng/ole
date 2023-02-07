function Card({ topic }) {
	return (
		<div className="border-solid border border-indigo-600 w-full rounded-xl mb-2 overflow-hidden">
			<img src={topic.image} className="w-full" />
			<div className="p-2">
				<h1 className="">{topic.name}</h1>
			</div>
		</div>
	);
}

export default Card;
