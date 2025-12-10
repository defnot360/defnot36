import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: "🏠", text: "Home", link: "/home" },
    { icon: "📦", text: "Product", link: "/product" },
    { icon: "⚙️", text: "Settings", link: "/settings" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-[#0f1b2c] text-white h-screen transition-all duration-300 overflow-hidden relative z-20`}
    >
      <div className="p-4">
        <h2
          className={`text-2xl font-bold whitespace-nowrap transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          FrozenPOS
        </h2>
      </div>

      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex items-center gap-3 py-3 px-4 hover:bg-gray-700 rounded-md"
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className={`text-md whitespace-nowrap transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.text}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
