import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col bg-black">
        <Home />
        <section id="work" className="px-4 mt-16">
          <Work />
        </section>
        <section id="info" className="px-4 mt-16 mb-8">
          <Info />
        </section>
      </main>
      <Footer />
    </div>
  );
}
