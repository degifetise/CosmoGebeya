import React from "react";
import { ShoppingBag, ShieldCheck, Truck, Clock } from "lucide-react";
function About() {
  const values = [
    {
      icon: <ShoppingBag className="w-6 h-6 bg-blue-600 text-white" />,
      title: "Premium Quality",
      description:
        "We curate only the finest authentic gadgets and electronics to ensure reliability and satisfaction.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 bg-blue-600 text-white" />,
      title: "Secure Shopping",
      description:
        "Your trust is our priority. We offer 100% secure payment gateways and buyer protection.",
    },
    {
      icon: <Truck className="w-6 h-6 bg-blue-600 text-white" />,
      title: "Fast Delivery",
      description:
        "Getting your tech to your doorstep quickly and safely, anywhere in the region.",
    },
    {
      icon: <Clock className="w-6 h-6 bg-blue-600 text-white" />,
      title: "24/7 Tech Support",
      description:
        "Our dedicated technical team is always here to answer your setup and product questions.",
    },
  ];
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-20 font-sans">
      <section className="relative bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-2xl text-blue-600 font-semibold tracking-tight">
            Discover Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6 tracking-tight">
            {" "}
            Redefining Your Shopping Experience
          </h1>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              The story Behind Cosmo Gebeya
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve tech enthusiasts, professionals, and daily
              creators looking for verified equipment. We don't just sell
              electronics; we empower your digital workspace by ensuring
              authenticity, competitive pricing, and robust tech support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to streamline e-commerce infrastructure,
              Cosmo Gebeya started as a passion project to deliver cutting-edge
              consumer gadgets with an optimized user interface.
            </p>
          </div>

          <div className="bg-linear-to-br from-blue-600 to-indigo-700 h-64 md:h-80 rounded-2xl shadow-xl flex items-center justify-center p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-10 bg-[radial-gradient(#fff_1px, transparent)] [bg-size:16px_16px] pointer-events-none">
              <div className="flex items-center justify-center flex-col text-center z-10">
                <p className="text-5xl font-black mb-2">100%</p>
                <p className="text-blue-100 font-medium tracking-wide  text-sm">
                  Customer-Centric Focused
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Shop With Us?
            </h2>
            <p className="text-gray-500 mt-2">
              The pillars that define our service excellence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-12 h-12  bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-blue-600">
              10k+
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wider mt-1">
              Happy Clients
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-blue-600">
              500+
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wider mt-1">
              Premium Products
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-blue-600">
              24hr
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wider mt-1">
              Average Delivery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
