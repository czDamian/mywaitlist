"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

const WaitlistForm = () => {
  const regex = /^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setError('the email "' + email + '"you entered is invalid ');
    } else {
      setError("");
      return true;
    }
  };
  const submitEmail = (e) => {
    e.preventDefault();
    if (setEmail === true) {
      alert("You are  qualified!!!");
    } else {
      alert("dey whine yourself");
    }
  };
  return (
    <div>
      <form name="waitlist" action="#" method="post" onSubmit={submitEmail}>
        <div className="text-red-500 text-sm text-center">{error}</div>

        <div className="flex justify-center items-center flex-col md:flex-row ">
          <div className="flex border border-neutral-100 rounded-md p-2 gap-2 w-80 md:w-96">
            <label htmlFor="email" className="">
              <FaRegEnvelope className=" text-2xl" />
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inherit outline-none w-full "
              onChange={validateEmail}
              name="email"
              id="email"
            />
          </div>
          <button
            className="mx-2 border bg-gray-900 border-green-400 rounded-md text-white px-8 md:px-12 hover:bg-green-700 active:bg-green-800 w-fit my-2 md:my-0 py-3"
            type="submit">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
