import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />

      <main
        className="flex flex-col bg-linear-to-b from-site-bg to-site-border
       min-h-screen p-4"
      >
        <Outlet />
      </main>
    </>
  );
}
