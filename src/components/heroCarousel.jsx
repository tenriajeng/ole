import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
			<div className="w-10/12 ">
				<Swiper
					style={{
						"--swiper-navigation-color": "#000",
						"--swiper-pagination-color": "#000",
					}}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					navigation={true}
					modules={[Navigation, Autoplay]}
					className="mySwiper scroll-pl-52"
					spaceBetween={8}
					slidesPerView={6}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
				>
					{topics.map((topic) => {
						return (
							<SwiperSlide key={topic.slug}>
								<Card topic={topic} shadow={false} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
export default HeroCarousel;
