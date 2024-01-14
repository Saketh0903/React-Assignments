import React from "react";

function Login() {
  return (
    <div className="text-center">
      <h1 className="display-2 text-info ">Login</h1>
      <form action="" className="w-50 mx-auto mt-5">
        <input
          type="text"
          name=""
          id=""
          className="form-control mb-4"
          placeholder="Username"
        />
        <input
          type="text"
          name=""
          id=""
          className="form-control mb-4"
          placeholder="Email"
        />

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;