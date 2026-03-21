"use client";

import portfolio from "@/content/portfolio.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";

export default function PortfolioApp() {
  // Theme toggle — we will restore this later (useState + useEffect on documentElement + toggleTheme).
  // const [isDark, setIsDark] = useState(true);
  // useEffect(() => { ... }, [isDark]);
  // const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <Navbar data={portfolio} />
      <HomePage data={portfolio} />
      <Footer data={portfolio} />
    </>
  );
}
