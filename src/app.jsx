import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "./styles/app.css";
import Home from "./pages/home";

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <main role="main" className="flex-grow px-4 py-4 text-center">
          <Home />
        </main>
        <div className="border-t border-gray-200 bg-white px-4 py-3 text-center">
          <a
            href="https://github.com/aripollak/tomato-or-cannabis"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            App source
          </a>
        </div>
      </div>
    </HelmetProvider>
  );
}
