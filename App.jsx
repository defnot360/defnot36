import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import Dashboard from "./Pages/Dashboard";
import Product from "./Pages/Product";   

export default function App() {
  const [user, setUser] = useState(null);
  const [sidebarToggle, setSidebarToggle] = useState(true);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarToggle} />

      <div className="flex-1 flex flex-col">
        <Header setIsOpen={setSidebarToggle} />

        <main className="flex-1 bg-slate-200 p-6">
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/products" element={<Product />} /> {/* product page */}
          </Routes>
        </main>
      </div>
    </div>
  );
}