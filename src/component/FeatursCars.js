import React from "react";
import { Link } from "react-router-dom";

const FeatursCars = () => {
  return (
    <div class="flex  flex-col items-center justify-center h-full  bg-gray-100">
      <h1 class="  text-5xl  italic border-b-4   sm:text-center sm:text-xl lg:text-3xl text-red-500 font-serif mt-10 shadow-2xl ">
        FEATURED CARS
      </h1>
      <div class="flex flex-wrap justify-center  gap-10 ">
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVycmFyaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                La Farari 2019
              </h2>
              <p class="text-gray-700 text-lg">
                This is one of the highly specs black edition produced in the
                history. this Produced 900BHp with Its v12 Engine
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 12.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://images.unsplash.com/photo-1584902645120-f86567d892b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHN1cGVyY2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Buggati Chiron Pur Sport
              </h2>
              <p class="text-gray-700 text-lg">
                This is One of the fastes production Car with w16 Engine which
                produced 1500 HP which make it speed upto 500KMPH ..
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 120.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://www.supercars.net/blog/wp-content/uploads/2020/10/koenigsegg-agera-rs_100560715_h.jpg"
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Koinegsegg Agera RS
              </h2>
              <p class="text-gray-700 text-lg">
                This Car become the first ever Fastest production car which
                clears 0-400 in 28 sec which make it worlds fastest car
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 90.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/story/hero_image/2005-pagani-zonda-f-coupe-red-1001x565-%281%29.jpg"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Pagani ZONDA R
              </h2>
              <p class="text-gray-700 text-lg">
                This one of the pagani most brutal and powerfull cars ever made
                with full carbon fiver and exlent v12 engine that produce insane
                power
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 144.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/47278/bmw-m8-right-front-three-quarter15.jpeg?q=75"
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">BMW M8 2023</h2>
              <p class="text-gray-700 text-lg">
                BMW m8 has v8 engine which produced 699 BHP and 800NM of TORK..
                full carbon fiber body and absulte speed
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 3.5 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://wallpaperaccess.com/full/1489213.jpg"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Mercedes-Benz AMG GT
              </h2>
              <p class="text-gray-700 text-lg">
                Mercedes-Benz and AMG, with a 4.0 L twin-turbocharged V8 engine
                that produces 456 HP. The latest version, the GT-R, produces 577
                HP.
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 9.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://wallpaperaccess.com/thumb/151851.jpg"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Lamborghini Veneno SP
              </h2>
              <p class="text-gray-700 text-lg">
                The Lamborghini Veneno high-performance sports car t The car has
                a 6.5-liter aspirated V12 engine and a top speed of 355 km/h
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 18.1 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://www.mansory.com/sites/default/files/styles/1800x1200_smaller_car_slider/public/2023-01/tom03116-hdr.jpg?itok=b4yl6KmK"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Lamborghini Urus
              </h2>
              <p class="text-gray-700 text-lg">
                Mansory Addition Urus black and silver color amazing featur and
                engine that produces 700 BHP and 700NM tork
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 7.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://media.gettyimages.com/id/1383830263/photo/lewis-hamilton-of-great-britain-driving-the-mercedes-amg-petronas-f1-team-w13-runs-wide.jpg?s=612x612&w=0&k=20&c=vnBCFNxuTVlEaWEbgYF4uasEMsGcCxgW--egGGhjXa0="
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Mercedes Benz Formula 1
              </h2>
              <p class="text-gray-700 text-lg">
                IT has inline 6 Engine which produce 790 BHP which has 900 TORK
                Moderb cumbtion Engine has latest teck and full carbon fiver
                body
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 120.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc2xhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                Tesla model S Roadstar
              </h2>
              <p class="text-gray-700 text-lg">
                Tesla model s has 4 quad bettary power to each wheel that
                produce the 300 BHP .. faste Electric Vehicle also giving the
                worlds power and contribute for non pollution world
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 4.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80   mx-4 my-6">
          <div class="bg-gray-300 rounded-lg shadow-lg">
            <img
              class="object-cover w-full h-64 rounded-t-lg"
              src="https://images.unsplash.com/photo-1617654112368-307921291f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmVycmFyaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="product"
            />
            <div class="p-4">
              <h2 class="text-xl font-bold mb-4  text-red-600">
                La Farari 2019
              </h2>
              <p class="text-gray-700 text-lg">
                This is one of the highly specs black edition produced in the
                history. this Produced 900BHp with Its v12 Engine
              </p>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold text-xl">RS. 12.3 CR</span>
                <Link to={"/message/123"}>
                  <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* .. */}
      </div>
    </div>
  );
};

export default FeatursCars;
