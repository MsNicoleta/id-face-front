import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange("signout")}
          className="text-lg font-semibold text-black underline py-1 px-4 cursor-pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-end">
        <p
          onClick={() => onRouteChange("signin")}
          className="text-lg font-semibold text-black underline py-1 px-4 cursor-pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="text-lg font-semibold text-black underline py-1 px-4 cursor-pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
