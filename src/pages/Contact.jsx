import { Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry was recorded successfully.");
  };

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Metadata Block */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-8">
            Got operational platform questions, custom order sizes, or bulk team
            procurement needs? Drop us a ping.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Email Operations
                </p>
                <p className="text-gray-700 font-medium">
                  taduCosmo37@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Hotline Channel
                </p>
                <p className="text-gray-700 font-medium">+251-373-2**-**</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase">
                  Business Response Hours
                </p>
                <p className="text-gray-700 font-medium">
                  Mon - Fri, 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Submission Panel */}
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xs">
          <h3 className="font-bold text-xl mb-4 text-gray-800">
            Send Direct Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Your Full Name
              </label>
              <input
                required
                type="text"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Email Address
              </label>
              <input
                required
                type="email"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                Message Body
              </label>
              <textarea
                required
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-blue-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition"
            >
              Dispatch Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
