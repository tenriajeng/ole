import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Card({ topic, shadow }) {
	const PlaceholderImage = "https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/avatars/4a8820cc6507849820d03deae55af243/adventurer.png";

	shadow = shadow ? "shadow-lg hover:shadow-indigo-500/50" : "";

	return (
		<div className={`${shadow} w-full aspect-square rounded-xl overflow-hidden hover:cursor-pointer`}>
			<LazyLoadImage src={topic.image} className="w-full" alt={topic.slug} placeholderSrc={PlaceholderImage} effect="blur" width="640" height="640" />
		</div>
	);
}

export default Card;
