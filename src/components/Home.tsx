import Header from "./Header";
const Home = () => {
  return (
    <>
      <div className="bg-dark text-white ">
        <Header />
        <div
          className="w-md sm:w-lg pt-20 pb-40 gap-50 flex     mx-auto "
        >
          <div className="w-full flex-col flex gap-5 sm:w-full">
            <p className="bg-solid w-xxsm sm:w-full text-center">
              Welcome to Codeshaper
            </p>
            <h1 className=" text-xl lg:text-lg  sm:text-md sm:w-full  font-bold leading-none w-half text-wrap ">
              CONSULTING FOR EVERY BUSINESS
            </h1>
            <a href="#">
              <button className="bg-primary transition duration-150 hover:bg-darker ease-in-out  py-2 w-sm md:w-md ">
                DISCOVER MORE{" "}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
