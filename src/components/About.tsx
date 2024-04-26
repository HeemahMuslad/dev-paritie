import { useState } from "react";

const About = () => {
  const aboutData = [
    {
      comment:
        "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
      name: "Todd Higgins",
      title: "CUSTOMER",
    },
    {
      comment:
        "Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor",
      name: "Todd Higgins",
      title: "CUSTOMER",
    },
  ];
  const consultData = [
    {
      image: "./image/brainstorming.png",
      no: "420",
      title: "CONSULTING SOLUTIONS",
    },
    {
      image: "./image/brainstorming.png",
      no: "420",
      title: "CONSULTING SOLUTIONS",
    },
    {
      image: "./image/brainstorming.png",
      no: "420",
      title: "CONSULTING SOLUTIONS",
    },
    {
      image: "./image/brainstorming.png",
      no: "420",
      title: "CONSULTING SOLUTIONS",
    },
  ];
  const businessData = [
    {
      title: "BUSINESS GROWTH",
    },
    {
      title: "BUSINESS GROWTH",
    },
    {
      title: "BUSINESS GROWTH",
    },
  ];
  return (
    <>
      <section className="bg-secondary w-full py-10  text-white">
        <div className="flex md:flex-col w-lg mx-auto gap-5">
          <div className="w-xsm  md:w-full flex flex-col gap-7  mx-auto ">
            <h1 className="text-md w-lg md:w-full sm:text-xs  text-black  font-bold">
              WHAT THEY ARE TALKING ABOUT?
            </h1>
            <p className="text-light">Trusted by more than 4,200 customers</p>
            <div className="flex gap-3 w-full ">
              <img
                className="border-stroke p-4 rounded-full bg-white"
                src="./image/Icon awesome-arrow-left.png"
                alt=""
              />
              <img
                className="border-stroke p-4 rounded-full bg-white"
                src="./image/Icon awesome-arrow-right.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex sm:flex-col gap-5 w-full mx-auto  ">
            {aboutData.map((data) => (
              <div className=" flex flex-col py-5   bg-white shadow-lg w-full   ">
                <div className="w-lg flex flex-col gap-2   mx-auto">
                  <p className="text-light">{data.comment}</p>
                  <p className="text-primary font-bold ">{data.name}</p>
                  <p className="text-light">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-darkest   py-20 md:pb-0">
        <div className="flex flex-col items-center   ">
          <div className="w-lg md:mb-10 ">
            <div className="w-full mx-auto grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 items-center text-white gap-5 justify-center  ">
              {consultData.map((data) => (
                <div className="flex w-full flex-col items-center gap-2">
                  <img className="bg-black p-3" src={data.image} alt="" />
                  <p className="font-bold text-2xl">{data.no}</p>
                  <p className=" text-center">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-lg absolute shadow-lg -bottom-20  md:relative md:bottom-0   mx-auto bg-white p-5 ">
            <div className=" flex md:flex-col  w-full items-center ">
              {businessData.map((data) => (
                <div className="w-full py-10  bg-secondary shadow-xl hover:bg-white mb-3 hover:text-primary transition duration-150 ease-in-out ">
                  <p className="font-bold  text-center">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
