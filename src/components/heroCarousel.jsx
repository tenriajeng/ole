import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Carousel } from "flowbite-react";

function HeroCarousel({ courses }) {
    return (
        <div className="mt-4 flex w-screen content-center justify-center">
            <div className="w-10/12">
                <div className="h-80 sm:h-96 xl:h-96 2xl:h-96">
                    <Carousel>
                        {courses.map((course) => {
                            return (
                                <img
                                    className="object-fill"
                                    key={course.slug}
                                    src={`https://picsum.photos/id/1${course.id}/800/257`}
                                    alt={course.name}
                                />
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default HeroCarousel;
