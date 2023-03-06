import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardImage from "./cardImage";

function HeroCarousel({ courses }) {
    return (
        <div className="mt-4  flex w-screen content-center justify-center">
            <div className="w-10/12">
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
                    slidesPerView={2}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {courses.map((course) => {
                        return (
                            <SwiperSlide key={course.slug}>
                                <CardImage
                                    course={course}
                                    rounded={"rounded-xl"}
                                    shadow={false}
                                    aspectRatio={"aspect-video"}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
export default HeroCarousel;
