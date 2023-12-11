"use client";
import email from "../asset/email.svg";
import Image from "next/image";

const WaitlistForm = () => {
  const validateEmail = (e) => {
    e.preventDefault();
    alert("You are not qualified!!!");
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={validateEmail}>
        <div className="flex justify-center items-center flex-col md:flex-row ">
          <div className="flex border border-white rounded-md p-2 gap-2 w-80 md:w-96">
            <label htmlFor="email" className="bg-white">
              <Image src={email} height={32} width={32} alt="email" />
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inherit outline-none w-full "
              name="email"
              id="email"
            />
          </div>
          <button
            className="mx-2 border bg-green-400 border-green-400 rounded-md text-black px-8 md:px-12 hover:bg-green-700 active:bg-green-800 w-fit my-2 md:my-0 py-3"
            type="submit">
            Join Waitlist
          </button>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
