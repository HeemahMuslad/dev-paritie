import { useState } from "react";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };
  return (
    <>
      <nav
        className="border-b  
      "
      >
        <div className="w-lg   text-white flex items-center gap-5  mx-auto 2xl:py-5">
          <div
            onClick={toggleMenu}
            className={`hamburger hover:bg-solid cursor-pointer hidden rounded ${
              isActive ? "active" : ""
            } w-auto p-1 border-none  `}
          >
            <span className="bar block bg-primary  w-7 my-1 mx-auto h-0.5"></span>
            <span className="bar block bg-primary  w-7 my-1 mx-auto h-0.5"></span>
            <span className="bar block bg-primary  w-7 my-1 mx-auto h-0.5"></span>
          </div>
          <div className=" w-full  flex items-center gap-2 2xl:justify-end">
            <div className="    border-r h-28 2xl:border-hidden 2xl:h-0   pr-2 flex   items-center  ">
              <span className="font-bold ">CreativeLogo</span>
            </div>
            <div
              className={` navLinks flex 2xl:flex-col 2xl:items-start  items-center justify-between w-lg ${
                isActive ? "active" : ""
              } `}
            >
              <ul className="flex   gap-2  text-white ">
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid transition delay-150 ease-in-out active:text-primary"
                >
                  <a href="#">HOME</a>
                </li>
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid active:text-primary"
                >
                  <a href="#">SERVICES</a>
                </li>
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid active:text-primary"
                >
                  <a href="#">PAGES</a>
                </li>
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid active:text-primary"
                >
                  <a href="#">CASE SHOP</a>
                </li>
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid active:text-primary"
                >
                  <a href="#">BLOG</a>
                </li>
                <li
                  onClick={closeMenu}
                  className="link hover:text-solid active:text-primary"
                >
                  <a href="#">CONTENT</a>
                </li>
              </ul>
              <div className=" social   items-center justify-center flex gap-2 2xl:pr-5 2xl:gap-10">
                <div className="flex gap-2  ">
                  <a onClick={closeMenu} className="w-sm h-sm" href="#">
                    <img src="./image/Icon feather-instagram.png" alt="" />
                  </a>
                  <a onClick={closeMenu} className="w-sm h-sm" href="#">
                    <img src="./image/Icon ionic-logo-linkedin.png" alt="" />
                  </a>
                  <a onClick={closeMenu} className="w-sm h-sm" href="#">
                    <img src="./image/Icon ionic-logo-twitter.png" alt="" />
                  </a>
                  <a onClick={closeMenu} className="w-sm h-sm" href="#">
                    <img src="./image/Icon simple-facebook.png" alt="" />
                  </a>
                </div>
                <div
                  onClick={closeMenu}
                  className="border-x h-28 2xl:border-hidden 2xl:h-0    flex px-2 items-center justify-center"
                >
                  <img src="./image/Icon feather-search.png" alt="" />
                </div>
                <div
                  className="flex 
            flex-col"
                >
                  <p>Need help?</p>
                  <p> +92 666 888 0000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
