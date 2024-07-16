import { Link } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="fontPoppins">
      <div className="bg-black py-3 text-center px-4 lg:px-5">
        <p className="text-sm text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <Link>
            <u className="font-semibold">ShopNow</u>
          </Link>
        </p>
      </div>
      <div className="border-b-2">
        <div className="container mx-auto  px-4 lg:px-5">
          <div className="flex justify-between items-center gap-4 py-4 md:py-5">
            <div className="text-2xl lg:text-4xl font-bold">
              <Link>
                <h2>
                  E-<span className="text-lime-600">Comm</span>
                  <span className="text-amber-500">erce</span>{" "}
                </h2>
              </Link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex justify-center items-center gap-6 text-base">
                <Link to="">
                  <div className="">
                    <li>Home</li>
                  </div>
                </Link>
                <Link to="">
                  <li>Contact</li>
                </Link>
                <Link to="">
                  <li>Home</li>
                </Link>
                <Link to="">
                  <li>Home</li>
                </Link>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="md:w-72 hidden lg:block">
                <div className="relative flex w-full flex-wrap items-stretch bg-slate-50">
                  <input
                    type="search"
                    className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="What are you looking for?"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                  {/* <!--Search button--> */}
                  <button
                    className="relative z-[2] flex items-center rounded-r bg-primary px-4 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    type="button"
                    id="button-addon1"
                  >
                    <CiSearch className="text-black" size={"20"} />
                  </button>
                </div>
              </div>
              <div className="block lg:hidden text-xl lg:text-2xl">
                <Link>
                  <CiSearch />
                </Link>
              </div>
              <Link className="text-xl lg:text-2xl">
                <CiHeart />
              </Link>
              <Link className="text-xl lg:text-2xl">
                <PiShoppingCartThin />
              </Link>
              <div className="block lg:hidden">
                <Link className=" text-xl lg:text-2xl">
                  <TbMenu2 />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
