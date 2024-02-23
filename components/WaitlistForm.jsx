"use client";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setSuccessMsg("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("api/emails", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to create Email!");
      }

      setSuccessMsg("Thank you for subscribing");
    } catch (error) {
      console.error("Error submitting email:", error);
      setError("Form is closed at the moment");
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (enteredEmail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return regex.test(enteredEmail);
  };

  return (
    <section
      id="waitlist"
      className="max-w-[800px] mx-auto p-4 rounded-lg flex flex-col md:flex-row justify-center gap-2 items-center bg-gradient-to-br from-slate-900 to-slate-950 mb-20">
      <div className="p-4 text-center md:text-left">
        <p className="text-3xl mb-2 font-bold">GM Fren!</p>
        <p>
          Subscribe to get exclusive access to groundbreaking features and
          innovations
        </p>
      </div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        {successMsg && (
          <div className="text-green-500 text-sm text-center">{successMsg}</div>
        )}
        <div className="flex justify-center items-center flex-col gap-2">
          <div className="flex border rounded-md p-2 gap-2 w-80">
            <label htmlFor="email">
              <FaRegEnvelope className="text-2xl" />
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-inherit outline-none w-full"
              onChange={handleChange}
              value={formData.email}
              id="email"
              name="email"
            />
          </div>
          <button
            className="mx-2 border bg-gray-900 border-green-400 rounded-md text-white px-8 hover:bg-green-700 active:bg-green-800 w-fit py-3"
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
