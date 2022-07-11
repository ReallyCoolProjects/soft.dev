import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoundedBtn from "../../../resuable/RoundedBtn";
import { IoChevronBackOutline } from "react-icons/io5";
import { is } from "immer/dist/internal";

export default function EmailSignup() {
  const info = { email: "", name: "", username: "", password: "", bio: "" };
  const [formValues, setFormValues] = useState(info);
  const [formErrors, setFormErrors] = useState({ email: "", name: "", username: "", password: "", bio: "" });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };


  const validateForm = (value: any) => {
    const errors = { email: "", name: "", username: "", password: "", bio: "" };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const pass = /^[A-Za-z]\w{7,14}$/;
    if (!value.username) {
      errors.username = "Username is required!";
    }
    if (!value.password) {
      errors.password = "Password is required!";
    }
    else if(!pass.test(value.password)){
      errors.password = "password must include one uppercase letter, one lowercase letter, and must be at least 8 characters long";
    }
    if (!value.name) {
      errors.name = "Name is required!";
    }
    if (!value.bio) {
      errors.bio = "Bio is required!"; 
    }
    if (!value.email) { 
      errors.email = "Email is required!";
    }
    else if (!regex.test(value.email)){
      errors.email = "Email is not a valid email format!";
    }
    return errors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
  };
  return (
    <div className="h-screen flex flex-col items-center gap-y-20 py-20">
      <span className="relative">
        <h1 className="text-4xl font-bold">Sign up with email</h1>{" "}
        <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10" />{" "}
      </span>
      
      <form className="mx-8" onSubmit={handleSubmit}>
      <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
        <input
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="text"
          
          name="name"
          placeholder="Ex: John Doe"
          value={formValues.name}
        />
        <p className="text-red-600 text-sm">{formErrors.name}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            
            name="username"
            placeholder="Ex: JDoe"
            value={formValues.username}
          />
          <p className="text-red-600 text-sm">{formErrors.username}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            
            name="email"
            placeholder="Email"
            value={formValues.email}
          />
          <p className="text-red-600 text-sm">{formErrors.email}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            
            name="password"
            placeholder="Password"
            value={formValues.password}
          />
           <p className="w-4/5 m-auto text-center text-red-600 text-xs">{formErrors.password}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          ></label>
          <textarea
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            
            name="bio"
            placeholder="Tell us something about yourself..."
            value={formValues.bio}
          />
          <p className="text-red-600 text-sm">{formErrors.bio}</p>
        </div>
        <div className="mt-10 text-center">
          <button
            className="text-white border-solid rounded-full text-black px-5 py-2.5 bg-green hover:bg-${props.hover} focus:outline-none focus:ring-4 font-medium text-center mr-1 mb-2"
            type="submit"
          >
            Sign up
          </button>
        </div>

        <Link to="/signup">
          {" "}
          <div className="text-neutral-400 flex flex-row items-center gap-x-1">
            <IoChevronBackOutline size="16px" />
            <p className="back">Back</p>{" "}
          </div>
        </Link>
      </form>
      <p className="terms_and_policy text-center w-3/5 text-xs text-grey">
        By clicking “Sign Up” you agree to Soft.dev Terms of Service and
        acknowledge that Soft.dev Privacy Policy applies to you.
      </p>
    </div>
  );
}
