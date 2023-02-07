import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Avatar() {
	const avatar = "https://sejawat.s3.ap-southeast-1.amazonaws.com/sejawat/avatars/4a8820cc6507849820d03deae55af243/adventurer.png";
	return <LazyLoadImage src={avatar} className="w-full" effect="blur" width="640" height="640" alt="avatar" />;
}

export default Avatar;
