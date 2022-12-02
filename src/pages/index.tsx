import { useEffect } from "react";
import { setTheme } from "../styles/theme";

export default function Home() {
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <div className="font-bold text-primary bg-primary">next.js boilerplate</div>
  );
}
