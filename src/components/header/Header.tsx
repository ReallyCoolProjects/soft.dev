import React, { Children } from "react";
import Drawer from "./Drawer";
import { openHamburger } from "../features/commonstate";
import { useDispatch, useSelector } from "react-redux";
import RoundedBtn from "../resuable/RoundedBtn";
const Header = () => {
  let dispatch = useDispatch();
  let links = ["article", "publish", "sign in"];
  let list = Children.toArray(
    links.map((link: string) => {
      return (
        <li>
          <a href="#">{link}</a>
        </li>
      );
    })
  );
  let props = { name: "Sign Up", links: list, primary: '#13ff83', hover: '#5ceea0' };
  return (
    <header className="flex justify-between items-center p-2 px-4 relative">

        <span
          onClick={() => dispatch(openHamburger("flip"))}
          className="fa-solid fa-bars text-2xl mr-4 cursor-pointer"
        ></span>
        <h1 className="text-2xl">soft.dev</h1>

      <nav className="list-none hidden">{list}</nav>
      <div className="pt-2">
        <RoundedBtn {...props} />
      </div>
      <Drawer {...props} />
    </header>
  );
};

export default Header;
