import Image from "next/image";
import Logo from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 md:container">
        <div className="flex items-center justify-between py-5">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgba(252,214,255,1),rgba(41,216,255,1),rgba(255,253,128,1),rgba(248,154,191,1),rgba(252,214,255,1))] blur-md"></div>
            <Image src={Logo} alt="Saas Logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex gap-6 items-center">
            <a
              href="#faqs"
              className="text-white text-opacity-60  hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#features"
              className="text-white text-opacity-60  hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#cta"
              className="text-white text-opacity-60  hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#cta"
              className="text-white text-opacity-60  hover:text-opacity-100 transition"
            >
              Help
            </a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
