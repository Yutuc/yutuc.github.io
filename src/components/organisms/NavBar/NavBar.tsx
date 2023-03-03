import React from "react";
import Logo from "../../../assets/logos/logo.png";
import { Link } from "react-router-dom";
export interface AppHeaderProps {
  navAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavBar({}: AppHeaderProps) {
  return (
    <div>
      <header className="flex justify-center mt-3 mb-3">
        <Link to="/" className="w-1/6">
          <img src={Logo} alt="Health101 Services Logo" />
        </Link>
      </header>
      <div className="flex justify-evenly bg-secondaryBlue p-5">
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white font-bold sm:xl md:text-2xl align-middle"
          to="/"
        >
          Home
        </Link>
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white font-bold sm:xl md:text-2xl align-middle"
          to="/about"
        >
          About
        </Link>
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white font-bold sm:xl md:text-2xl align-middle"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white font-bold sm:xl md:text-2xl align-middle"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-white font-bold sm:xl md:text-2xl align-middle"
          to="/careers"
        >
          Careers
        </Link>
      </div>
    </div>
  );
}
