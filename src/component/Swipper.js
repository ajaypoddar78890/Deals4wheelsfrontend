import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Swipper() {
  const containerStyle = {
    maxWidth: "124rem",
    padding: "2rem 1rem",
    margin: "0 auto",
    background: "#Cfdede",
  };

  const headingStyle = {
    padding: "1rem 0",
    fontSize: "3.5rem",
    textAlign: "center",
  };

  const swiperContainerStyle = {
    height: "52rem",
    padding: "2rem 0",
    position: "relative",
  };

  const swiperSlideStyle = {
    width: "37rem",
    height: "42rem",
    position: "relative",
  };

  const swiperSlideImgStyle = {
    width: "37rem",
    height: "42rem",
    borderRadius: "2rem",
    objectFit: "cover",
  };

  const sliderControlerStyle = {
    position: "relative",
    bottom: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sliderArrowIconStyle = {
    fontSize: "2rem",
    color: "#222224",
  };

  const swiperPaginationStyle = {
    position: "relative",
    width: "15rem",
    bottom: "1rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Premium Cars </h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={swiperContainerStyle}
      >
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1566024164372-0281f1133aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwZXJjYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwZXJjYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJjYXJ8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1635975229704-0a420e777a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1cGVyY2FyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1622944030363-960e29c29d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHN1cGVyY2FyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1617654116840-2339cba5f959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHN1cGVyY2FyfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1547672932-b1c871beeef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxzdXBlcmNhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1634636208509-63bcd2a1b13f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxzdXBlcmNhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>
        <SwiperSlide style={swiperSlideStyle}>
          <img
            src={
              "https://images.unsplash.com/photo-1627440829335-b42fba2a15dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxzdXBlcmNhcnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="slide_image"
            style={swiperSlideImgStyle}
          />
        </SwiperSlide>

        {/* Add other slides with similar styles */}
        <div style={sliderControlerStyle}>
          <div
            className="swiper-button-prev slider-arrow"
            // style={sliderArrowStyle}
          >
            <ion-icon className style={sliderArrowIconStyle}></ion-icon>
          </div>
          <div
            className="swiper-button-next slider-arrow"
            // style={sliderArrowStyle}
          >
            <ion-icon
              name="arrow-forward-outline"
              style={sliderArrowIconStyle}
            ></ion-icon>
          </div>
          <div
            className="swiper-pagination"
            style={swiperPaginationStyle}
          ></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Swipper;
