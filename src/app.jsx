import React from "react";
import { Router, Link } from "wouter";
import { HelmetProvider } from 'react-helmet-async';

/**
* This code defines the react app
*
* Imports Helmet provider for the page head
* Imports the router functionality to provide page navigation
* Defines the App Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <main role="main" className="wrapper">
          <div className="content">
            <PageRouter />
          </div>
        </main>
        <div className="footer">
          <a href="https://github.com/aripollak/tomato-or-cannabis">App source</a>
        </div>
      </Router>
    </HelmetProvider>
  );
}
