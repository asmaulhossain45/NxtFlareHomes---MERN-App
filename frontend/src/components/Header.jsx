import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  const navLinks = [
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
    { title: "profile", link: "/profile" },
    { title: "sign in", link: "/signin" },
  ];

  return (
    <header className="bg-slate-100">
      <div className="relative flex justify-between items-center px-[5%] py-3">
        <Link to="/" className="text-2xl font-bold text-slate-700">
          NxtFlare
        </Link>

        <form className="hidden lg:flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-md">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className="bg-transparent focus:outline-none"
          />
          <FiSearch />
        </form>

        <ul className="hidden lg:flex items-center gap-3">
          {navLinks.map((links, index) => {
            const { title, link } = links;
            return (
              <Link
                to={link}
                key={index}
                className="capitalize text-lg font-medium text-slate-700"
              >
                {title}
              </Link>
            );
          })}
        </ul>

        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} />

          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute right-0 flex-col gap-4 bg-slate-100 mt-3 px-12 py-4 rounded-es-md duration-300`}
          >
            {navLinks.map((links, index) => {
              const { title, link } = links;
              return (
                <Link
                  to={link}
                  key={index}
                  className="capitalize text-lg font-medium text-slate-700"
                >
                  {title}
                </Link>
              );
            })}

            <form className="flex items-center gap-2 bg-slate-200 px-3 py-1 rounded-md">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search..."
                className="bg-transparent focus:outline-none"
              />
              <FiSearch />
            </form>
          </ul>
        </div>
      </div>
    </header>
  );
}
