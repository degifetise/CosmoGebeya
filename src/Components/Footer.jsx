import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
function Footer() {
  return (
    <div className="bg-white/95 backdrop-blur-md  border-t-1 border-blue-500 w-full py-4 px-6">
      <h2>Footer section</h2>
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Contact Channels</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" /> support@swiftshop.tech
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-500" /> +1 (555) 019-2834
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500" /> 100 Innovation Way,
            Suite 4
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
