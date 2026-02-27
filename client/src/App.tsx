import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      {/* Fallback to 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </TooltipProvider>
  );
}

export default App;
