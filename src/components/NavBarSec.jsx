import React from "react";
import { useState } from "react";

const NavBarSec = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-[#5f9ea0] pb-[25px]">
        <h1 className=" bg-black text-center text-[#5f9ea0] py-[20px] text-[50px] font-bold">
          Navbar
        </h1>
        <div className="container mx-auto xl:max-w-[1239px] xl:px-3 px-6">
          <div className="flex items-center justify-between lg:mt-[41px] md:mt-[25px] mt-[16px] lg:pr-[76px]">
            <div className="flex items-center xl:gap-[138px] gap-[70px]">
              <div className="flex xl:gap-[65px] gap-[35px] items-center w-full">
                <h1 className=" cursor-pointer text-[32px] text-black !no-underline font-bold">
                  Logo
                </h1>

                <a
                  href="#services"
                  className="text-[15px] lg:block hidden ff_poppins font-semibold text-black no-underline whitespace-nowrap after:absolute relative after:transition-all after:duration-300 after:ease-linear after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:left-[11%] after:right-[89%] hover:after:right-[11%] after:bottom-[-4px]"
                >
                  Our Services
                </a>
              </div>
              <div className="flex items-center xl:gap-[33px] gap-[15px]">
                <a
                  href="#about"
                  className="ff_poppins lg:block hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
                >
                  About
                </a>
                <a
                  href="#blognews"
                  className="lg:block ff_poppins hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
                >
                  Blog&News
                </a>
                <a
                  href="#contact"
                  className="lg:block ff_poppins hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-[30px]">
              <a
                href="#account"
                className="lg:block ff_poppins hidden text-[15px] font-semibold text-black no-underline after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                Account
              </a>
              <div className="w-[1px] h-[19px] bg-[#DAD8D8] hidden lg:block"></div>
              <a
                href="tel:2349067322844"
                className="hidden no-underline lg:flex gap-[6px] items-center"
              >
                <p className="lg:block ff_poppins hidden mb-0 text-[16px] font-semibold text-black hover:text-[#B00000] transition-colors duration-300 ease-linear leading-[285%]">
                  +2349067322844
                </p>
              </a>
            </div>
            <ul
              className={`${
                nav ? "left-[-100%]" : "left-0"
              } lg:hidden flex max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-white max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen flex-col gap-6 items-center justify-center`}
            >
              <a
                onClick={() => setNav(!nav)}
                href="#services"
                className="text-[15px] ff_poppins font-semibold text-black no-underline whitespace-nowrap  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                Our Services
              </a>
              <a
                onClick={() => setNav(!nav)}
                href="#about"
                className="text-[15px] ff_poppins font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                About
              </a>
              <a
                onClick={() => setNav(!nav)}
                href="#blognews"
                className="text-[15px] ff_poppins font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                Blog&News
              </a>
              <a
                onClick={() => setNav(!nav)}
                href="#contact"
                className="text-[15px] ff_poppins font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                Contact
              </a>
              <a
                onClick={() => setNav(!nav)}
                href="#account"
                className="text-[15px] ff_poppins font-semibold text-black no-underline  after:absolute relative after:transition-all after:duration-300 after:ease-linear after:left-[11%] after:right-[89%] hover:after:right-[11%] after:h-[2px] after:rounded-[10px] after:bg-[#B00000] after:bottom-[-4px]"
              >
                Account
              </a>
              <a
                onClick={() => setNav(!nav)}
                href="tel:2349067322844"
                className="flex gap-[6px] no-underline items-center"
              >
                <p className="text-[16px] ff_poppins font-semibold text-black leading-[285%] hover:text-[#B00000] transition-colors duration-300 ease-linear">
                  +2349067322844
                </p>
              </a>
            </ul>
            <div
              onClick={() => setNav(!nav)}
              className="lg:hidden w-[27px] h-[21px] relative z-[7] flex justify-between flex-col"
            >
              <span
                className={`${
                  nav ? "" : "rotate-[50deg] translate-y-[15px]"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "hidden"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-7"></div>
    </>
  );
};

export default NavBarSec;
