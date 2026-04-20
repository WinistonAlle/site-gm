import { BrowserRouter, Route, Routes } from "react-router-dom";
import BiscoitoDeQueijoPage from "./pages/BiscoitoDeQueijoPage";
import BroaPage from "./pages/BroaPage";
import HomePage from "./pages/HomePage";
import MassasDocesPage from "./pages/MassasDocesPage";
import PaoDeQueijoPage from "./pages/PaoDeQueijoPage";
import PaoFrancesPage from "./pages/PaoFrancesPage";

export default function App() {
  return (
    <BrowserRouter>
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
