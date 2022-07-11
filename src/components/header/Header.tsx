import React, { Children } from "react";
import Drawer from "./Drawer";
import { openHamburger } from "../features/commonstate";
import { useDispatch, useSelector } from "react-redux";
import RoundedBtn from "../resuable/RoundedBtn";
import { Link } from "react-router-dom";
const Header = () => {
  let dispatch = useDispatch();
  let links = [ "publish","github", "about us", "sign in"];
  let list = Children.toArray(
    links.map((link: string) => {
      return (
        <li>
          <a href="#" className="capitalize" >{link}</a>
        </li>
      );
    })
  );
  let props = { name: "Sign Up", links: list };
  return (
    <header className="flex justify-between items-center p-2 px-4">

        <span
          onClick={() => dispatch(openHamburger("flip"))}
          className="fa-solid fa-bars text-2xl mr-4 cursor-pointer"
        ></span>
        <h1 className="text-2xl">soft.dev</h1>

      <nav className="list-none hidden">{list}</nav>
      <div className="pt-2">
      <Link to="/signup"><RoundedBtn action={"Sign up"} primary= {"green"} hover= {"[#95de18]"} /> </Link>
       {/* <Link to="/signup"><button className="bg-[#13ff83] py-3 px-4 rounded-full font-bold" >Sign Up </button></Link> */}
      </div>
      <Drawer {...props} />
    </header>
  );
};

export default Header;
