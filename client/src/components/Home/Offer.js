import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";



const OfferSlider = () => {
  return (
    <>
      <div className="offer-section">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="img/offer/tt0.jpg" alt="offer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/offer/tt1.jpg" alt="offer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/offer/tt2.jpg" alt="offer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/offer/tt3.jpg" alt="offer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/offer/tt4.jpg" alt="offer1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="img/offer/tt5.jpg" alt="offer1" />
          </SwiperSlide>
        </Swiper>
        <h3> Discount Coupons </h3>
      </div>
    </>
  );
};

export default OfferSlider;
