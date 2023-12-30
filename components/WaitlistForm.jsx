"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

const WaitlistForm = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    setEmail(e.target.value);

    if (email === "") {
      setError("the email cannot be empty");
    } else if (!regex.test(email)) {
      setError(`the email "${email}"you entered is invalid `);
    } else {
      setError("");
    }
  };

  const submitEmail = (e) => {
    e.preventDefault();
    if (validateEmail(e)) {
      alert("You are  qualified!!!");
    } else {
      alert("You are not Qualified!!");
    }
  };
  return (
    <section
      id="waitlist"
      className="max-w-[800px] mx-auto p-4 rounded-lg flex flex-col md:flex-row justify-center gap-2 items-center bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="p-4 text-center md:text-left">
        <p className="text-3xl mb-2 font-bold">GM Fren!</p>
        <p>
          Subscribe to get exclusive access to groundbreaking features and
          innovations
        </p>
      </div>
      <form action="#" method="post" onSubmit={submitEmail}>
        <div className="text-red-500 text-sm text-center">{error}</div>

        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex border border-green-400 rounded-md p-2 gap-2 w-80">
            <label htmlFor="email" className="">
              <FaRegEnvelope className=" text-2xl" />
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inherit outline-none w-full "
              onChange={validateEmail}
              value={email}
              id="email"
            />
          </div>
          <button
            className="mx-2 border bg-gray-900 border-green-400 rounded-md text-white px-8 hover:bg-green-700 active:bg-green-800 w-fit py-3"
            type="submit">
            Join Waitlist
          </button>
        </div>
      </form>
    </section>
  );
};

export default WaitlistForm;
