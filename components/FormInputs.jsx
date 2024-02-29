import { FaRegEnvelope } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

export const AddressInput = ({ value, onChange }) => {
  return (
    <div className="flex border rounded-md p-2 gap-2 w-80">
      <label htmlFor="address">
        <FaWallet className="text-2xl" />
      </label>
      <input
        type="text"
        placeholder="Enter your iotex wallet address"
        className="bg-inherit outline-none w-full"
        onChange={onChange}
        value={value}
        id="address"
        name="address"
      />
    </div>
  );
};

export const EmailInput = ({ value, onChange }) => {
  return (
    <div className="flex border rounded-md p-2 gap-2 w-80">
      <label htmlFor="email">
        <FaRegEnvelope className="text-2xl" />
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-inherit outline-none w-full"
        onChange={onChange}
        value={value}
        id="email"
        name="email"
      />
    </div>
  );
};

export const PointInput = ({ value, onChange }) => {
  return (
    <input
      type="hidden"
      className=""
      onChange={onChange}
      value={value}
      id="points"
      name="points"
    />
  );
};
