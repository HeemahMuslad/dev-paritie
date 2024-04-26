import { useState } from "react";

const Footer = () => {
  const successData = [
    {
      title: "HIGHEST SUCCESS RATES",
      text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
    {
      title: "WE BUILD EXPERIENCE",
      text: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
    },
  ];
  const listData = [
    {
      list: "If you are going to use a passage",
    },
    {
      list: "Lorem Ipsum you need to be sure",
    },
    {
      list: "There isn't anything embarrassing",
    },
    {
      list: "Hidden in the middle of text",
    },
  ];
  return (
    <>
      <section className="w-full pt-28  pb-8 ">
        <div className="w-lg gap-20 mx-auto flex md:flex-col">
          <div className="flex flex-col gap-10">
            {successData.map((data) => (
              <div className="flex gap-5  w-full items-start ">
                <img
                  className="p-3 bg-blue"
                  src="./image/Icon feather-check-circle.png"
                  alt=""
                />
                <div className="flex flex-col gap-5">
                  <p className="font-bold text-lg lg:text-md sm:text-xs">
                    {data.title}
                  </p>
                  <p className="text-light">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-10 w-full text-light">
            <p className="">
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form injected
              humour or randomised words which don't look believable.
            </p>
            <div className="flex flex-col gap-10">
              {listData.map((data) => (
                <div className="flex gap-5  w-full items-start ">
                  <div className="flex items-center gap-2">
                    <span className="block w-3 border-primary border-b-2"></span>{" "}
                    <p className="">{data.list}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-darker  py-20 text-light ">
        <div className="flex 2xl:flex-col 2xl:text-center w-lg mx-auto gap-5 mb-20 ">
          <div className="flex flex-col   gap-5 w-xxsm 2xl:w-full ">
            <p className="font-bold text-white">CreativeLogo</p>
            <p>
              Welcome to our consultancy agency. Lore ipsum simply text amet
              cing elit simply text amet cing elit.
            </p>
            <hr className="  border-light" />
            <div className="flex items-center 2xl:justify-center gap-3">
              <img src="./image/Icon awesome-phone-square-alt.png" alt="" />{" "}
              <p>+92 666 888 0000</p>
            </div>
            <div className="flex items-center gap-3 2xl:justify-center">
              <img src="./image/Icon material-email.png" alt="" />{" "}
              <a
                href="#"
                className="hover:text-white transition duration-150 ease-in-out"
              >
                needhelp@company.com
              </a>
            </div>{" "}
            <div className="flex 2xl:justify-center items-center gap-3">
              <img src="./image/Icon awesome-map-marker-alt.png" alt="" />{" "}
              <p>66 Broklyn Street New York, USA</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-sm 2xl:w-full ">
            <p className="font-bold text-white">EXPLORE</p>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              About
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Meet our Team
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Case Studies
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Latest News
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-5 w-sm mt-11 2xl:w-full">
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Support
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Terms of use
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Privacy & Policy
            </a>
            <a
              className="hover:text-white transition duration-150 ease-in-out"
              href="#"
            >
              Help
            </a>
          </div>
          <div className="flex flex-col gap-5 w-xsm 2xl:w-full">
            <p className="font-bold text-white ">NEWSLETTER</p>
            <div className="flex flex-col gap-5 bg-black p-5">
              <p>Subscribe for latest articles and resources</p>
              <div className="flex sm:flex-col p-2 w-full bg-white  justify-between items-center">
                <input className="sm:w-full" type="email" placeholder="Email Address" />
                <a  href="#">
                  <button className="bg-primary  sm:w-full transition duration-150 hover:bg-darker ease-in-out text-white p-2 ">
                    REGISTER
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-lg mx-auto border-light" />

        <div className="flex sm:flex-col gap-10 w-lg mx-auto  mt-20 items-center  justify-between">
          <p>© Copyright 2021 by Company</p>
          <div className="flex gap-2 mr-2 ">
            <a className="w-sm h-sm" href="#">
              <img src="./image/Icon feather-instagram.png" alt="" />
            </a>
            <a className="w-sm h-sm" href="#">
              <img src="./image/Icon ionic-logo-linkedin.png" alt="" />
            </a>
            <a className="w-sm h-sm" href="#">
              <img src="./image/Icon ionic-logo-twitter.png" alt="" />
            </a>
            <a className="w-sm h-sm" href="#">
              <img src="./image/Icon simple-facebook.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
