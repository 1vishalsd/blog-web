import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const postInputs = useState({
    name: "",
    username: "",
    password: "  ",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="text-3xl font-extrabold">Create an account </div>
          <div className="text-slate-400 flex">
            Already have a account
            <Link className="underline" to={"/signin"}>
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function labelledInput({ label, placeholder, onChange }: labelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
