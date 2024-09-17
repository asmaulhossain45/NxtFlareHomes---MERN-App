import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-96 mx-auto mt-12 md:mt-16 lg:mt-20 px-[5%] md:px-0">
      <h1 className="text-center text-3xl font-bold uppercase mb-6">Sign Up</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          className="border p-3 rounded-md focus:outline-none"
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          className="border p-3 rounded-md focus:outline-none"
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border p-3 rounded-md focus:outline-none"
        />

        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm Password"
          className="border p-3 rounded-md focus:outline-none"
        />

        <input
          type="submit"
          value="sign up"
          className="w-full bg-slate-700 text-white border p-3 font-medium rounded-md focus:outline-none uppercase hover:opacity-90 disabled:opacity-70 duration-300"
        />

        <button className="w-full bg-red-700 text-white border p-3 font-medium rounded-md focus:outline-none uppercase hover:opacity-90 duration-300">
          continue with google
        </button>
      </form>

      <h1 className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </h1>
    </div>
  );
}
