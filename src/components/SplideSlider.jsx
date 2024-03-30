import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// npm i @splidejs/react-splide

export default () => {
  return (
    <div className="py-10 my-7 px-14 bg-black">
        <h1 className="text-white text-5xl text-center font-bold">SPLIDE SLIDER</h1>
      <Splide
        renderControls={() => (
          <div className="splide__arrows">
            <div
              className=" splide__arrow--prev absolute !left-0"
              role="button"
            ></div>
            <div className="splide__arrow--next" role="button"></div>
          </div>
        )}
        options={{
          arrows: true,
          rewind: true,
          type: "loop",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          pagination: true,
        }}
        className="!py-14"
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SplideSlide>
      </Splide>
    </div>
  );
};
