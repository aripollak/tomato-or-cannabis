import React from "react";
import { HelmetProvider } from "react-helmet-async";
import "./styles/styles.css";
import Home from "./pages/home";

export default function App() {
  return (
    <HelmetProvider>
      <main role="main" className="wrapper">
        <div className="content">
          <Home />
        </div>
      </main>
      <div className="footer">
        <a href="https://github.com/aripollak/tomato-or-cannabis">App source</a>
      </div>
    </HelmetProvider>
  );
}
