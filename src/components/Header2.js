import React from "react";

const Header2 = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Content Ql</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline mr-2">Sign In</a>
        <a className="btn btn-info">Sign Up</a>
      </div>
    </div>
  );
};

export default Header2;
