import React from "react";
import {
  IoSettingsSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Tag from "../../resuable/Tag";
export default function Info() {
  return (
    <div className="p-3">
      <div className=" general flex flex-row items-center gap-4 w-full">
        <div className="image-container">
          <img
            className="w-20 h-20 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg"
            alt=""
          />
        </div>
        <div className="credentials">
          <h1 className="text-xl font-bold">moussa</h1>
          <p className="role text-sm">Software engineer</p>
        </div>
        <div className="settings ml-28">
          <Link to="/settings">
            <IoSettingsSharp size="24px" />
          </Link>
        </div>
      </div>
      <div className="introduction">
        <div className="stat flex flex-row justify-center gap-4 my-4">
          <p className="follower text-sm text-gray-500">12 artciles</p>
          <p className="follower text-sm text-gray-500">127 follower</p>
          <p className="following text-sm text-gray-500">54 following</p>
        </div>
        <div className="skills text-center">
          <Tag tech={"Javascript"} />
          <Tag tech={"React"} />
          <Tag tech={"Express js"} />
          <Tag tech={"Postgresql"} />
        </div>

        <p className="bio mx-1 text-center my-4">Hello world</p>
        <div className="socials flex flex-colomn justify-center items-center gap-x-3">
          <a href="https://github.com/ReallyCoolProjects" target="_blank">
            <IoLogoGithub size="24px" />
          </a>
          <a href="#">
            <IoLogoLinkedin size="24px" />
          </a>
          <a href="#">
            <IoLogoTwitter size="24px" />
          </a>
        </div>
      </div>
    </div>
  );
}
