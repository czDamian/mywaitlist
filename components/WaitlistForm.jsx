"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

const WaitlistForm = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (enteredEmail) => {
    if (enteredEmail === "") {
      setError("The email cannot be empty");
      return false;
    } else if (!regex.test(enteredEmail)) {
      setError(`The email you entered is invalid`);
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    validateEmail(enteredEmail);
  };

  const submitEmail = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        setIsLoading(true);
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
          setSuccessMsg("Thank you for subscribing");
        } else {
          alert("Failed to subscribe");
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        alert("Failed to add to the database");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("You are not qualified!!");
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
        <div className="text-green-500 text-sm text-center">{successMsg}</div>
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex border border-green-400 rounded-md p-2 gap-2 w-80">
            <label htmlFor="email">
              <FaRegEnvelope className="text-2xl" />
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inherit outline-none w-full"
              onChange={handleChange}
              value={email}
              id="email"
            />
          </div>
          <button
            className="mx-2 border bg-gray-900 border-green-400 rounded-md text-white px-8 hover:bg-green-700 active:bg-green-800 w-fit py-3 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''}`"
            type="submit"
            disabled={isLoading}>
            {isLoading ? "Subscribing..." : "Join Waitlist"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default WaitlistForm;
