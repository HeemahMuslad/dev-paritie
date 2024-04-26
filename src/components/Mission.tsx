import { useState } from "react";

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQA = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const q_aData = [
    {
      id: 1,
      no: "1.",
      ques: " THINK AHEAD AND BOOST YOUR BUSINESS?",
      ans: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 2,
      no: "2.",
      ques: "HOW CONSULTANCY EXPERTS WORK?",
      ans: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 3,
      no: "3.",
      ques: "WHAT IS THE BEST ADVICE FOR GROWTH?",
      ans: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 4,
      no: "4.",
      ques: "HOW TO IMPROVE YOUR BUSINESS?",
      ans: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
  ];
  const markData = [
    {
      checked: "Nsectetur cing elit.",
    },
    {
      checked: "Suspe ndisse suscipit sagittis leo.",
    },
    {
      checked: "Entum estibulum dignissim posuere.",
    },
    {
      checked: "If you are going to use a passage",
    },
    {
      checked: "If you are going to use a passage test data.",
    },
  ];
  return (
    <>
      <section className="bg-dark w-full py-10 text-white">
        <div className="w-xsm md:w-full flex flex-col gap-5 text-align items-center mx-auto ">
          <h1 className="text-md sm:text-xs text-center w-lg  font-bold">
            MISSION IS TO PROTECT YOUR BUSINESSES & MUCH MORE
          </h1>
          <a href="#">
            <button className="bg-primary p-2 transition duration-150 hover:bg-darker ease-in-out ">DISCOVER MORE </button>
          </a>
        </div>
      </section>
      <section>
        <div className="w-full mx-auto flex flex-col py-20 gap-5 items-center">
          <h1 className="text-md sm:text-xs text-black font-bold">QUESTION ANSWERS</h1>
          <p className="text-light ">
            We help our clients renew their business
          </p>
          <div className="w-lg flex md:flex-col gap-10   ">
            <div className="w-half md:w-full ">
              {q_aData.map((data, index) => (
                <div
                  key={data.id}
                  className={` flex flex-col bg-secondary p-5 mt-5 shadow-lg  ${
                    activeIndex === index ? "bg-white" : " bg-secondary"
                  }`}
                >
                  <div className="flex gap-3 items-center ">
                    <p className="text-primary font-bold">{data.no} </p>
                    <p className="font-bold w-xlg">{data.ques}</p>
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleQA(index)}
                    >
                      <span
                        className={`block w-3 mb-2 h-0.5 ${
                          activeIndex === index ? "bg-primary" : " bg-light"
                        } `}
                      ></span>
                      <span
                        className={`block w-3 rotate-90 -translate-y-2.5   h-0.5 ${
                          activeIndex === index
                            ? "  opacity-100 bg-primary "
                            : "bg-light opacity-0"
                        }

                       `}
                      ></span>
                    </div>
                  </div>

                  {activeIndex === index && <p>{data.ans}</p>}
                </div>
              ))}
            </div>
            <div className="w-half md:w-full sm:flex-col gap-3 sm:gap-10 flex items-end sm:items-start ">
              <div className="flex flex-col">{markData.map((data) => (
                <div className="flex gap-2 items-center">
                  <img
                    className="w-3 h-3"
                    src="./image/Icon feather-check.png"
                    alt=""
                  />
                  <p>{data.checked}</p>
                </div>
              ))}
              </div>
              <div className="flex flex-col items-center w-xxsm sm:w-half bg-primary text-white p-3"><h1 className="text-md font-bold">30</h1>
              <p className=" text-center font-bold">Years of Experience</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
