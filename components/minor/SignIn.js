import { signIn } from "next-auth/client";

const SignIn = ({ name, desc }) => {
  return (
    <button
      className="-m-3 p-3 text-left block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}
    >
      <p className="text-base font-medium text-gray-900">{name}</p>
      <p className="mt-1 text-sm text-gray-500">{desc}</p>
    </button>
  );
};

export default SignIn;
