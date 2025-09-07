import { useEffect, useState } from "react";
import { close, menu } from "../../assets";
import { Link } from "react-router-dom";

const list = [
  {
    id: "templates",
    title: "Templates",
    path: "resume",
  },
  {
    id: "features",
    title: "Features",
    path: "features",
  },
  {
    id: "about",
    title: "About",
    path: "about",
  },
  {
    id: "contact",
    title: "Contact",
    path: "contact",
  },
];
const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky ${
        scrolled
          ? "bg-black/40 text-balck/70 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      } sm:px-16 px-8 flex justify-between items-center top-0 z-20`}
    >
      <Link to="/">
        <div className="realtive flex gap-2">
          <img src="./src/assets/AIR.png" alt="Logo" className="w-12 h-10" />

          <p className="text-2xl font-bold pt-1 hover:text-[#00FFFF]/80">
            <span className="text-[#00FFFF]">|</span> AI Resume
          </p>
        </div>
      </Link>
      <div>
        <ul className="list-none hidden sm:flex  gap-8 w-full">
          {list.map((item) => (
            <Link to={`/${item.path}`}>
              <li
                key={item.id}
                className={`font-semibold hover:underline cursor-pointer hover:text-[#00FFFF]/80`}
                onClick={() => setActive(!active)}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="hidden sm:flex gap-4">
        <Link to="/resume">
          <button className="w-full bg-transparent  border-2 border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black  p-2 rounded-xl px-4 font-semibold">
            Get Started
          </button>
        </Link>
        {/* <Link to="/signup">
          <button className="w-full bg-[#00FFFF] border-2 border-[#00FFFF] text-black hover:bg-transparent hover:text-[#00FFFF]  p-2 rounded-xl px-4 font-semibold">
            Signup
          </button>
        </Link> */}
      </div>
      {/* Mobile View */}

      <div className="sm:hidden">
        <button
          className="p-2"
          onClick={() => setToggle(!toggle)}
          aria-expanded={toggle}
          aria-label="Toggle menu"
        >
          <img src={toggle ? close : menu} alt="" className="w-6 h-6" />
        </button>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full right-0 mt-2 mx-4 p-6 rounded-xl text-black bg-white/90 backdrop-blur-sm
            shadow-xl transition-all duration-300 origin-top
            ${
              toggle
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col gap-4">
            {list.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left font-semibold px-2 py-1 rounded transition-colors
                    ${
                      active === item.id
                        ? "text-[#00FFFF] bg-[#00FFFF]/10"
                        : "hover:text-[#00FFFF]"
                    }`}
                  onClick={() => {
                    setActive(item.id);
                    setToggle(false);
                  }}
                  aria-current={active === item.id ? "page" : undefined}
                >
                  {item.title}
                </button>
              </li>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button
                className="w-full py-2 font-semibold rounded-xl transition-all
                hover:bg-[#00FFFF]  border-2 border-[#00FFFF] text-black"
              >
                Login
              </button>
              <button
                className="w-full py-2 font-semibold rounded-xl transition-all
                bg-[#00FFFF] text-black hover:bg-transparent hover:text-[#00FFFF] border-2 border-[#00FFFF]"
              >
                Sign up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
