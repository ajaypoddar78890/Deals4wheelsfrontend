import React from "react";
import Hero from "../component/Hero";
import { cards } from ".././Data";
import CatCards from "../component/CatCards";
import { Slider } from "infinite-react-carousel/lib";

import Swipper from "../component/Swipper";

const Home = () => {
  return (
    <div>
      <Hero />

      <Slider slidesToShow={5} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCards key={card.id} item={card} />
        ))}
      </Slider>
      <div className="features bg-blue-200 py-6 md:py-8 px-4 sm:px-6 lg:py-12 lg:px-8 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="left flex flex-col w-full md:w-1/2 md:pr-8 lg:pr-24">
              <h1 className="text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-red-500 mb-4  md:mb-6">
                What We Offer
              </h1>

              <div className="offer-container">
                <div className="offer-item mb-2 md:mb-3">
                  <h2 className="text-lg md:text-xl lg:text-2xl leading-tight font-medium text-gray-900 mb-1 md:mb-2">
                    Preowned Cars
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, nobis sapiente. Facere, expedita similique minus,
                    animi numquam quaerat ab error consequuntur eos, aliquid
                    neque. Fugit nam autem veritatis eaque?
                  </p>
                </div>

                <div className="offer-item mb-2 md:mb-3 ">
                  <h2 className="text-lg lg md:text-xl lg:text-2xl leading-tight font-medium text-gray-900 mb-1 md:mb-2">
                    Independent Platform
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, nobis sapiente. Facere, expedita similique minus,
                    animi numquam quaerat ab error consequuntur eos, aliquid
                    neque. Fugit nam autem veritatis eaque?
                  </p>
                </div>

                <div className="offer-item mb-2 md:mb-3">
                  <h2 className="text-lg md:text-xl lg:text-2xl leading-tight font-medium text-gray-900 mb-1 md:mb-2">
                    Premium Subscriptions
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, nobis sapiente. Facere, expedita similique minus,
                    animi numquam quaerat ab error consequuntur eos, aliquid
                    neque. Fugit nam autem veritatis eaque?
                  </p>
                </div>

                <div className="offer-item mb-2 md:mb-3">
                  <h2 className="text-lg md:text-xl lg:text-2xl leading-tight font-medium text-gray-900 mb-1 md:mb-2">
                    Direct Buy/Sell
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint, nobis sapiente. Facere, expedita similique minus,
                    animi numquam quaerat ab error consequuntur eos, aliquid
                    neque. Fugit nam autem veritatis eaque?
                  </p>
                </div>
              </div>
            </div>

            <div className="right w-full md:w-1/2">
              <img
                className="rounded-lg shadow-md mx-auto"
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/03/18132135/hero-image-mustang-1600x900.jpeg?tr=w-1366"
                alt="Car Image"
              />
            </div>
          </div>
        </div>
      </div>
      <Swipper />
    </div>
  );
};

export default Home;
