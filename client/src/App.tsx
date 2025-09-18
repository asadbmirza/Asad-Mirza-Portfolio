import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";
import PageLoader from "@/components/PageLoader";

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
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <TooltipProvider>
      {isLoading && <PageLoader onComplete={handleLoadingComplete} />}
      <Toaster />
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </TooltipProvider>
  );
}

export default App;
