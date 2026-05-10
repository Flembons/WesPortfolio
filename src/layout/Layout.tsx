import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main
        className="flex flex-col flex-1 bg-linear-to-b from-site-bg to-site-border p-4"
      >
        <Outlet />
      </main>
    </div>
  );
}
