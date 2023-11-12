import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function LogoBanner() {
  const photos = [
    "/shopify.png",
    "/facebook.png",
    "/wordpress.png",
    "/mailchimp.png",
    "/google.png",
  ];
  return (
    <div className="bg-primary py-16 ">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        className=" w-[90%] sm:w-[85%]"
      >
        {photos.map((photo, index) => {
          return (
            <SwiperSlide key={index} className="mx-auto">
              <img
                src={photo}
                alt=""
                className="mx-auto w-8 sm:w-12 lg:w-14 xl:w-16 2xl:w-18
              "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
