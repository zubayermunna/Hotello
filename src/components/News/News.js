import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Footer from "../Home/Shared/Footer/Footer";
import NewsItem from "./NewsItem";
import SmallRoom from "./SmallRoom";
const News = () => {
  const [news, setNews] = useState([]);
  const [smallRooms, setSmallRooms] = useState([]);
  useEffect(() => {
    fetch("deluxe.json")
      .then((res) => res.json())
      .then((data) => setSmallRooms(data));
  }, []);
  useEffect(() => {
    fetch(`news.json`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  return (
    <div className="w-full  flex flex-col  relative bgRoom">
      <div className="w-full flex h-80 justify-center  items-center ">
        <h1 className="text-4xl  py-24 mt-12 lg:mt-12 md:mt-12  lg:py-24 md:py-24 lg:pt-36 md:pt-36 text-white font-semibold">
          {" "}
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter
                .typeString("Update News")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Hotello New")
                .pauseFor(1000)
                .deleteAll()
                .typeString("News Portal ")
                .start();
            }}
          />
        </h1>
      </div>
      <div className="flex w-full h-fit justify-center">
        <div className="w-full relative h-fit justify-center md:justify-between  gap-12 py-10 bg-gray-100 flex flex-wrap md:flex-nowrap lg:flex-nowrap ">
          <div className="px-4 gap-4 flex flex-col">
            {news.map((news) => (
              <NewsItem name={news.name} detail={news.detail} img={news.img}>
                {" "}
              </NewsItem>
            ))}
          </div>
          <div>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input w-full input-bordered"
                />
                <button className="btn bg-orange-600 glass hover:bg-orange-600 btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-2 p-4 flex-col">
              <div className=" flex gap-2">
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
                <div className="w-28">
                  <img
                    className=" w-full"
                    src={
                      "https://pix10.agoda.net/hotelImages/5721/-1/253c84072ffabdf942b6df41413b2ec3.jpg?ca=6&ce=1&s=1024x768"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h1 className="text-2xl  font-semibold text-slate-600">ROOM</h1>
              <div className="">
                {smallRooms.map((room) => (
                  <SmallRoom room={room}> </SmallRoom>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default News;
