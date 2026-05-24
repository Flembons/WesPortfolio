import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Info from "./pages/Info";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col bg-linear-to-b from-site-bg to-site-border">
        <section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <Home />
        </section>
        <section id="work" className="px-4">
          <Work />
        </section>
        <section id="info-section" className="py-16 px-4">
          <Info />
          <div id="info" className="h-px scroll-mt-16" aria-hidden="true" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
