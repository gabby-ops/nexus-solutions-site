import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import IAAutomacao from "@/pages/IAAutomacao";
import ServicesPage from "@/pages/ServicesPage";
import PageNotFound from "@/lib/PageNotFound";
import WhatsAppFab from "@/components/WhatsAppFab";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/ia-automacao" element={<IAAutomacao />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <WhatsAppFab />
      </>
    </Router>
  );
}

export default App;
