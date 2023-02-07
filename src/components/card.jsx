import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ topic }) {
	const PlaceholderImage = "https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/avatars/4a8820cc6507849820d03deae55af243/adventurer.png";

	return (
		<div className="border-solid border border-indigo-600 w-full aspect-square rounded-xl mb-2 overflow-hidden">
			<LazyLoadImage src={topic.image} className="w-full" alt={topic.slug} PlaceholderSrc={PlaceholderImage} effect="blur" width="640" height="640" />
			{/* <div className="p-2">
				<h1 className="">{topic.name}</h1>
			</div> */}
		</div>
	);
}

export default Card;
