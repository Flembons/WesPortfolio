import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="flex flex-col bg-site-bg min-h-screen p-4">
        <Outlet />
      </main>
    </>
  );
}
