import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";
import React from "react";

function NotFoundFrame() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-accent">404</h1>
      <h2 className="text-4xl font-semibold text-primary mt-4 mb-2">
        Page Not Found
      </h2>
      <p className="text-secondary mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}

export default NotFoundFrame;
