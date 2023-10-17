import "./css/App.css";
import Navbar from "./components/Navbar";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Pic1 from "/pic1.png";
import Pic2 from "/pic2.png";
import Pic3 from "/pic3.png";
import btnlove from "/btn_love.png";
import btnfav from "/btn_fav.png";
import "./js/Splide";
import Part1 from "/partner1.png";
import Part2 from "/partner2.png";
import Part3 from "/partner3.png";
import Part4 from "/partner4.png";
import Part5 from "/partner5.png";
import Most1 from "/most1.png";
import Most2 from "/most2.png";
import Most3 from "/most3.png";
import Most4 from "/most4.png";
import Most5 from "/most5.png";
import Most6 from "/most6.png";
import cust from "/customer.png";
import cust1 from "/customer1.png";
import cust2 from "/customer2.png";
import cust3 from "/customer3.png";
import cust4 from "/customer4.png";
import cust5 from "/customer5.png";
import cust6 from "/customer6.png";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [changeFav, setState] = useState(false);
  const [changeFav1, setState1] = useState(false);
  const [changeFav2, setState2] = useState(false);

  const handleChange = () => {
    setState(!changeFav);
  };
  const handleChange1 = () => {
    setState1(!changeFav1);
  };
  const handleChange2 = () => {
    setState2(!changeFav2);
  };

  return (
    <div>
      <Navbar />
      <section
        className="carousel"
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <Splide
          options={{
            type: "loop",
            arrows: false,

            drag: "free",
            padding: "20.5%",
            autoplay: "playing",
            pauseOnFocus: false,
            pauseOnHover: false,
            width: "100vw",
          }}
          aria-label="image-focus"
          hasTrack={false}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="relative">
                <img src={Pic1} className="image-carousel z-10" alt="Image 1" />
                <button
                  type="button"
                  className="absolute top-[45px] right-[75px] z-20"
                >
                  <img
                    src={changeFav === true ? btnfav : btnlove}
                    className="btn-love"
                    alt=""
                    onClick={handleChange}
                  />
                </button>

                <div className="grid absolute bottom-10 left-20 text-white">
                  <p className="text-2xl w-8/12 font-medium mb-3">
                    Mountain Climbing at Kota Baru
                  </p>
                  <p className="font-light text-sm">Start from $4,900,000</p>
                </div>

                <a
                  href=""
                  className="button-resevation absolute bottom-[50px] p-2 bg-[#1F4AA8] text-white text-sm rounded-md right-20"
                >
                  Make a Reservation
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative">
                <img src={Pic2} className="image-carousel z-10" alt="Image 1" />
                <button
                  type="button"
                  className="absolute top-[45px] right-[75px] z-20"
                >
                  <img
                    src={changeFav1 === true ? btnfav : btnlove}
                    className="btn-love"
                    alt=""
                    onClick={handleChange1}
                  />
                </button>

                <div className="grid absolute bottom-10 left-20 text-white">
                  <p className="text-2xl w-8/12 font-medium mb-3">
                    Snorkeling with Manta in Belitung Island
                  </p>
                  <p className="font-light text-sm">Start from $73,000</p>
                </div>

                <a
                  href=""
                  className="button-resevation absolute bottom-[50px] p-2 bg-[#1F4AA8] text-white text-sm rounded-md right-20"
                >
                  Make a Reservation
                </a>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative">
                <img src={Pic3} className="image-carousel z-10" alt="Image 1" />
                <button
                  type="button"
                  className="absolute top-[45px] right-[75px] z-20"
                >
                  <img
                    src={changeFav2 === true ? btnfav : btnlove}
                    className="btn-love"
                    alt=""
                    onClick={handleChange2}
                  />
                </button>

                <div className="grid absolute bottom-10 left-20 text-white">
                  <p className="text-2xl w-8/12 font-medium mb-3">
                    Real Snowboarding at Alaska hills
                  </p>
                  <p className="font-light text-sm">Start from $28,000</p>
                </div>

                <a
                  href=""
                  className="button-resevation absolute bottom-[50px] p-2 bg-[#1F4AA8] text-white text-sm rounded-md right-20"
                >
                  Make a Reservation
                </a>
              </div>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </section>

      <section
        className="partner my-[70px]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div className="flex flex-row justify-center gap-[9rem]">
          <img src={Part1} className="image-partner" alt="" />
          <img src={Part2} className="image-partner" alt="" />
          <img src={Part3} className="image-partner" alt="" />
          <img src={Part4} className="image-partner" alt="" />
          <img src={Part5} className="image-partner" alt="" />
        </div>
      </section>

      <section className="most-people bg-[#F1F5FA] py-20 my-[70px]  px-36 grid  grid-flow-col gap-6 ">
        <div
          className="left-panel-text row-span-1 w-[289px]"
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <p className="text-4xl font-semibold">Most People Go In Summer</p>
        </div>
        <div
          className="left-panel-image row-span-3 mt-5 relative "
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <img src={Most1} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">Snow Hills</p>
            <p className="font-light">Jakarta, Indonesia</p>
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 relative"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <img src={Most2} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">Buck Kit</p>
            <p className="font-light">Parlay, Sammer</p>
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 mt-3 relative"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src={Most3} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">New Dream</p>
            <p className="font-light">Lembang, Surabayar</p>
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 relative"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <img src={Most4} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">Village</p>
            <p className="font-light">Puncak, Jakarta</p>
          </div>
        </div>
        <div
          className="row-span-2 col-span-1 mt-3 relative"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src={Most5} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">Itha Ly</p>
            <p className="font-light">Rumah Tua, Semarang</p>
          </div>
        </div>
        <div
          className="row-span-4 relative"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <img src={Most6} alt="" />
          <div className="absolute bottom-5 left-5 grid text-white">
            <p className="text-lg font-medium">Lake Silent</p>
            <p className="font-light">Bandung, Indonesia</p>
          </div>
        </div>
      </section>
      <section className="reviewer my-[70px] relative max-w-[97%]">
        <p
          className="text-center text-2xl font-medium text-[#222534] ml-10"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="linier"
        >
          Our Happy Customers
        </p>
        <div
          className="card-our-review grid place-content-center mt-12 ml-10"
          data-aos="flip-down"
          data-aos-duration="1000"
          data-aos-easing="linier"
        >
          <div className="card-header-photo border border-[#E7E7E7] rounded-full place-self-center -mb-12 z-20">
            <img src={cust} alt="" />
          </div>
          <div className="card-body text-center border border-[#E7E7E7] px-12 pt-16 pb-6 rounded-lg z-10">
            <p className="text-md mb-3">Anne Grande Latte</p>
            <p className="text-sm text-[#888AA2] font-light w-80">
              For me, traveling is like finding a new future that I might suit
              with. So, spending most of my time to travel was good choice.
            </p>

            <div className="flex justify-center space-x-1 pt-3">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <a href="" className="font-light text-sm text-blue-500 underline">
            View All Stories
          </a>
        </div>
        <div className="image-mixed">
          <div
            className="img-1 border border-[#E7E7E7] rounded-full absolute top-40 left-40"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="linier"
          >
            <img src={cust1} alt="" />
          </div>
          <div
            className="img-2 border border-[#E7E7E7] rounded-full absolute top-24 left-96"
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-easing="linier"
          >
            <img src={cust2} alt="" />
          </div>
          <div
            className="img-3 border border-[#E7E7E7] rounded-full absolute top-64 left-72"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="linier"
          >
            <img src={cust3} alt="" />
          </div>
          <div
            className="img-4 border border-[#E7E7E7] rounded-full absolute top-64 right-80"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-easing="linier"
          >
            <img src={cust4} alt="" />
          </div>
          <div
            className="img-5 border border-[#E7E7E7] rounded-full absolute top-28 right-64"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-easing="linier"
          >
            <img src={cust5} alt="" />
          </div>
          <div
            className="img-6 border border-[#E7E7E7] rounded-full absolute top-48 right-28"
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="linier"
          >
            <img src={cust6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
