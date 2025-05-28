import React from "react";
import { NavLink } from "react-router";

function ErrorPage() {
  return (
    <>
      <div>This is the error page.</div>
      <div>
        Oops! The page you are requesting doesn't exist. Here are some helpful
        links instead: Home About Work Side Projects
        <NavLink to="/"> Go Home</NavLink>
      </div>
    </>
  );
}

export default ErrorPage;
