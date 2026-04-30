import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BiscoitoDeQueijoPage from "./pages/BiscoitoDeQueijoPage";
import BroaPage from "./pages/BroaPage";
import HomePage from "./pages/HomePage";
import MassasDocesPage from "./pages/MassasDocesPage";
import PaoDeQueijoPage from "./pages/PaoDeQueijoPage";
import PaoFrancesPage from "./pages/PaoFrancesPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useLayoutEffect(() => {
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (!hash) {
      scrollToTop();
      const frame = window.requestAnimationFrame(scrollToTop);
      const firstTimeout = window.setTimeout(scrollToTop, 120);
      const secondTimeout = window.setTimeout(scrollToTop, 360);
      const thirdTimeout = window.setTimeout(scrollToTop, 800);

      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(firstTimeout);
        window.clearTimeout(secondTimeout);
        window.clearTimeout(thirdTimeout);
      };
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timeout = 0;

    const scrollToHash = (): void => {
      const target = document.getElementById(targetId);
      if (!target) {
        attempts += 1;
        if (attempts < 8) {
          timeout = window.setTimeout(scrollToHash, 60);
        } else {
          scrollToTop();
        }
        return;
      }

      const headerOffset = window.innerWidth <= 640 ? 96 : 118;
      const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;
      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
    };

    const frame = window.requestAnimationFrame(scrollToHash);
    timeout = window.setTimeout(scrollToHash, 140);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/broa" element={<BroaPage />} />
        <Route path="/massas-doces" element={<MassasDocesPage />} />
        <Route path="/pao-frances" element={<PaoFrancesPage />} />
        <Route path="/biscoito-de-queijo" element={<BiscoitoDeQueijoPage />} />
        <Route path="/pao-de-queijo" element={<PaoDeQueijoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
