import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { Lock, LogIn, Mail, ArrowBigLeft} from "lucide-react";
function Login() {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginUser(email, password);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="relative max-w-xl  sm:max-w-md mx-auto mt-16 p-2 md:p-6 bg-white md:border border-gray-400 mb-6 rounded-2xl shadow-2xs">
      <div className="absolute top-3 left-1 bg-blue-600 text-white rounded-xl p-2 outline-0  border-0">
        <Link to="/">
          {" "}
          <ArrowBigLeft className="animate-pulse " />
        </Link>
      </div>

      <div className="text-center mb-3 py-7">
        <LogIn className="w-10 h-10 text-blue-600 mx-auto mb-2" />

        <h2 className="text-2xl font-bold hover:animate-bounce duration-1000 text-blue-600">
          Welcome Back
        </h2>
      </div>

      {error && (
        <div className="mb-4 p-3 text-center border-b rounded border-red-600 text-red-600 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold uppercase text-gray-500"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 border border-gray-400 rounded-xl focus:outline-hidden focus:border-blue-700"
              placeholder="Enter your email address..."
            />
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-800" />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold uppercase text-gray-500"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 border border-gray-400 rounded-xl focus:outline-hidden focus:border-blue-700"
              placeholder="Enter your password..."
            />
       

            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-800" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white hover:bg-blue-800 py-3 text-xs transition rounded-2xl"
        >
          Login
        </button>
        <p className="text-center text-gray-500">
          Don't have an account{" "}
          <Link to="/register" className="text-blue-700 font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
