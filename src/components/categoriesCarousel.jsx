import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function CategoriesCarousel() {
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
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={20} slidesPerView={12} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
					{categories.map((category, key) => {
						return (
							<SwiperSlide key={key}>
								<button className="bg-indigo-100 text-indigo-500 hover:bg-indigo-500 hover:text-white text-xs font-normal rounded w-max px-2 py-1">CATEGORY {key}</button>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}
export default CategoriesCarousel;
