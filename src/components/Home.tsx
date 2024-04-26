import Header from "./Header";
const Home = () => {
  
  return (
    <>
      <div className="bg-dark text-white ">
        <Header
          
        />
        <div
          className="w-lg pt-20 pb-40 gap-50 flex  
        mx-auto "
        >
          <div className="w-lg flex-col flex gap-5 sm:w-full">
            <p className="bg-solid w-xsm sm:w-full text-center">Welcome to Codeshaper</p>
            <h1 className=" text-xl lg:text-lg  sm:text-sm sm:w-full  font-bold leading-tight w-half text-wrap ">
              CONSULTING FOR EVERY BUSINESS
            </h1>
            <a href="#">
              <button className="bg-primary transition duration-150 hover:bg-darker ease-in-out  py-2 w-xsm sm:w-full">DISCOVER MORE </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
