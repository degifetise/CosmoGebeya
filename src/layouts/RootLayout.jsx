import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col gap-10 min-h-screen bg-slate-50 text-gray-800">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
