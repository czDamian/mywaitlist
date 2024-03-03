"use client";
import { useState } from "react";
import { PointInput, EmailInput, AddressInput } from "./FormInputs";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    points: 50,
  });
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
        throw new Error("Failed to subscribe!");
      }
      setSuccessMsg(
        "You have successfully subscribed to the waitlist. Use your unique referral link to get more points. https://dappera.io#waitlist"
      );
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
      className="max-w-[800px] mx-auto p-4 md:p-6 rounded-lg flex flex-col md:flex-row justify-center gap-2 items-center bg-gradient-to-br from-slate-900 to-slate-950 mb-20">
      <div className="p-4 text-center md:text-left">
        <p className="text-3xl mb-2 font-bold">GM Fren!</p>
        <p className="mb-4">
          Subscribe to get exclusive access to groundbreaking features and
          innovations
        </p>

        {successMsg && (
          <div className="text-green-500 text-sm">{successMsg}</div>
        )}
      </div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center flex-col gap-2 my-4 sm:my-0">
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <EmailInput value={formData.email} onChange={handleChange} />
          <PointInput value={formData.points} onChange={handleChange} />
          <AddressInput value={formData.address} onChange={handleChange} />
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
