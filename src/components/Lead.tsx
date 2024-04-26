
const Lead = () => {
  const variationData = [
    {
      id: 1,
      no: "01",

      title: "GET PROFESSIONAL ADVICE",
      description:
        "There are many variations of available but the majority have suffered alteration.",
    },
    {
      id: 1,
      no: "02",

      title: "TRUSTED & PROFESSIONAL ",
      description:
        "There are many variations of available but the majority have suffered alteration.",
    },
  ];
  return (
    <>
      <div className="flex flex-col  items-center relative bg-white ">
        <div className="w-lg flex md:flex-col md:gap-10  mx-auto py-40 md:py-20 ">
          <div className="w-half md:w-full ">
            <img
              className="p-5 bg-primary"
              src="./image/Icon awesome-play.png"
              alt=""
            />
          </div>
          <div className="w-half gap-10 flex flex-col md:w-full ">
            <h1 className="text-md font-bold">WE'RE LEADING IN THE MARKET</h1>
            <p className="text-light">
              Lorem ipsum is simply free text dolor sit amet, consectetur notted
              adipisicing elit sed do eiusmod tempor incididunt ut labore et
              doloremagna aliqua lonm andhn.
            </p>
            <p className="text-primary">
              We have 35+ years of experience. We offer marketing and consulting
              services
            </p>
            <div>
              <div className="flex items-start w-xlg  rounded-full z-100 relative bg-secondary h-5">
                <div className="w-1xl bg-primary rounded-full h-5 "></div>
              </div>
              <div className="flex justify-between w-1xl">
                <p className="font-bold  ">CONSULTING</p>
                <p className="text-light">88%</p>
              </div>
            </div>
            <div>
              <div className="flex items-start w-xlg  rounded-full z-100 relative bg-secondary h-5">
                <div className="w-md bg-primary rounded-full h-5 "></div>
              </div>
              <div className="flex justify-between w-md">
                <p className="font-bold  ">ADVICES</p>
                <p className="text-light">68%</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className=" ">
                <img
                  className="p-3 bg-blue"
                  src="./image/Icon feather-phone-call.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-light">Have a question? Give us a call</p>
                <p>+92 666 888 0000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0  -left-10 rotate-12">
          <img src="public/image/Path 7.png" alt="" />
        </div>
        
        <div className="flex  w-lg absolute md:relative md:bottom-0  -bottom-24  shadow-lg mx-auto bg-white">
          <div className=" flex md:flex-col   w-full items-center ">
            {variationData.map((data) => (
              <div className="w-full shadow-lg">
                <div className=" flex mx-auto gap-5 py-10 w-lg    ">
                  <div>
                    <p className="p-3 bg-blue"> {data.no}</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="font-bold">{data.title}</p>
                    <p className="text-light">{data.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lead;
