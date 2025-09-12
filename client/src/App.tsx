import { useState } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";
import PageLoader from "@/components/PageLoader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
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
      <Router />
    </TooltipProvider>
  );
}

export default App;
