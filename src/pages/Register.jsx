import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBigLeft, Lock, Mail, PocketKnifeIcon, Road, RoadIcon, User, UserPlus } from "lucide-react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { registerUser } = useAuth();
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = registerUser(name, email, password);
    if (result.success) {
      if (
        name.trim().toLocaleLowerCase() === "admin" &&
        email.trim().toLocaleLowerCase() === "admin@gmail.com" &&
        password.trim().toLocaleLowerCase() === "12admin34"
      ) {
        navigate("/admin");
      } else if (role.trim().toLocaleLowerCase() === "customer") {
        navigate("/contact");
      }
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="group max-w-xl sm:max-w-md mx-auto mt-16 p-6 bg-slate-100 md:border border-gray-400 mb-6 rounded-2xl shadow-2xs relative">
      <div className="absolute top-3 left-1 bg-blue-600 text-white rounded-xl p-2 outline-0  border-0">
        <Link to="/">
          <ArrowBigLeft className="animate-pulse " />
        </Link>
      </div>

      <div className="text-center mb-3 py-7">
        <UserPlus className="w-10 h-10 text-blue-600 mx-auto mb-2" />
        <h2 className="group-hover:text-yellow-600 text-2xl font-bold hover:animate-bounce duration-1000 text-blue-600">
          Create Account
        </h2>
        <p className="group-hover:text-yellow-700 text-blue-500 text-xl font-bold">
          Join
          <span className="text-blue-900 px-2 font-extrabold">
            Cosmo-Gebeya
          </span>
          to engage with our products.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 text-center border-b rounded border-red-600 text-red-600 text-xs">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold uppercase text-gray-500"
          >
            Full name
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 border border-gray-400 rounded-xl focus:outline-hidden focus:border-blue-700"
              placeholder="Enter your full name..."
            />
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-800" />
          </div>
        </div>

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

        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-semibold uppercase text-gray-500"
          >
            Select Role
          </label>
          <select
            value={role}
            required
            onChange={(e) => setRole(e.target.value)}
            className="w-full py-2.5 pl-10 pr-4 appearance-none border border-gray-400 rounded-xl focus:outline-hidden focus:border-blue-700"
          >
            <option value=""></option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
          <RoadIcon className="absolute left-3 top-8 w-5 h-5 text-gray-800" />
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
          Create Account
        </button>
        <p className="text-center text-gray-500">
          Already have an account{" "}
          <Link to="/login" className="text-blue-700 font-bold">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
