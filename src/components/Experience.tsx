const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "WEALTH MANAGEMENT",
      image: "image/Icon awesome-bitbucket.png",
      read: "READ MORE",
    },
    {
      id: 2,
      title: "WEALTH MANAGEMENT",
      image: "image/Icon awesome-bitbucket.png",
      read: "READ MORE",
    },
    {
      id: 3,
      title: "WEALTH MANAGEMENT",
      image: "image/Icon awesome-bitbucket.png",
      read: "READ MORE",
    },
  ];
  return (
    <div className="bg-darker pt-20  pb-40   text-white w-full ">
      <div className="w-lg flex  flex-col mx-auto gap-5">
        <h1 className="text-md text-center">REAL-WORLD EXPERIENCE</h1>
        <p className="text-light text-center">
          The best business consulting firm you can count on!
        </p>
        <div className="flex md:flex-col  gap-5 w-full m-auto my-20 ">
          {experienceData.map((data) => (
            <div
              className=" flex flex-col  bg-black w-full py-14  "
              key={data.id}
            >
              <div className="w-lg  items-center mx-auto">
                <h1 className="w-half ">{data.title}</h1>
                <div className="flex justify-between items-center ">
                  <p className="text-light">{data.read}</p>
                  <img className="w-xsm md:w-sm" src={data.image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-10">
          <span className="block w-96 bg-white border-b "></span>
          <p>MEET THE PARTNERS</p>
          <span className="block w-96 bg-white  border-b"></span>
        </div>
        <div className="flex justify-between w-full ">
          <img
            className="border-stroke p-4 bg-darkest"
            src="./image/Icon awesome-arrow-left.png"
            alt=""
          />
          <img
            className="border-stroke p-4 bg-darkest"
            src="./image/Icon awesome-arrow-right.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
