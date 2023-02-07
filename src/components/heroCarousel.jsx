import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "./card";

function HeroCarousel({ topics }) {
	const categories = [
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
		"category",
	];

	return (
		<div className="w-screen flex content-center justify-center mt-4">
			<div className="w-11/12 ">
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={8} slidesPerView={6} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
					{topics.map((topic) => {
						return (
							<SwiperSlide key={topic.slug}>
								<Card topic={topic} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
export default HeroCarousel;
