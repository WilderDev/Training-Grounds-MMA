import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      className="-m-3 p-3 text-left block rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
      onClick={() => signOut()}
    >
      <p className="text-base font-medium text-gray-900">Sign Out</p>
      <p className="mt-1 text-sm text-gray-500">Log out of your account</p>
    </button>
  );
};

export default SignOut;
