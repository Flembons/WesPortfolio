import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Film from "./pages/Film";
import BR2TB from "./pages/BR2TB";
import Burp from "./pages/Burp";
import Documentary from "./pages/Documentary";
import Promos from "./pages/Promos";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="film">
          <Route index element={<Film />} />
          <Route path="br2tb" element={<BR2TB />} />
          <Route path="burp" element={<Burp />} />
        </Route>
        <Route path="documentary" element={<Documentary />} />
        <Route path="promos" element={<Promos />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
