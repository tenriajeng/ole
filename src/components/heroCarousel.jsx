import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Carousel } from "flowbite-react";

function HeroCarousel({ courses }) {
    return (
        <div className="mt-4 flex w-screen content-center justify-center">
            <div className="w-10/12">
                <div className="h-56 sm:h-96 xl:h-96 2xl:h-96">
                    <Carousel>
                        {courses.map((course) => {
                            return (
                                <img
                                    key={course.slug}
                                    src={`https://picsum.photos/id/1${course.id}/800/400`}
                                    alt={course.name}
                                />
                            );
                        })}
                    </Carousel>
                </div>
                {/* <Swiper
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
                </Swiper> */}
            </div>
        </div>
    );
}
export default HeroCarousel;
