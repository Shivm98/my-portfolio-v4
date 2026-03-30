"use client";

import portfolio from "@/content/portfolio.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";

export default function PortfolioApp() {
  return (
    <>
      <Navbar data={portfolio} />
      <HomePage data={portfolio} />
      <Footer data={portfolio} />
    </>
  );
}
