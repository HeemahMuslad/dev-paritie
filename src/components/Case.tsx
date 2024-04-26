
const Case = () => {
  const caseData = [
    {
      id: 1,
      image: "./image/Icon metro-automobile.png",
      study: "THOUGHT LEADERSHIP",

      title: "BUSINESSES GROWTH",
    },
    {
      id: 2,
      image: "./image/Icon metro-automobile.png",
      study: "THOUGHT LEADERSHIP",

      title: "BUSINESSES GROWTH",
    },
    {
      id: 3,
      image: "./image/Icon metro-automobile.png",
      study: "THOUGHT LEADERSHIP",

      title: "BUSINESSES GROWTH",
    },
  ];
  return (
    <div className="bg-secondary  pt-60 md:pt-20  text-white w-full ">
      <div className="w-lg flex  flex-col mx-auto gap-5">
        <h1 className="text-md text-center text-black font-bold">NEW CASE STUDIES</h1>
        <p className="text-light text-center">
          We help our clients renew their business
        </p>
        <div className="flex md:flex-col gap-5 w-full mx-auto mb-20 ">
          {caseData.map((data) => (
            <div
              className=" flex flex-col justify-end p-5  h-80 bg-light w-full   "
              key={data.id}
            >
              <div className="w-lg flex flex-col gap-2   mx-auto">
                <img className="w-xsm md:w-sm" src={data.image} alt="" />
                <p className="font-sm">{data.study}</p>
                <p className="font-bold">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Case;
