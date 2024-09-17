import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <Link to="/signup" className="text-blue-600">Sign Up</Link>
    </div>
  );
}
