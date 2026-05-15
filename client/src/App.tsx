import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import FloatingVideo from "./components/FloatingVideo";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PremierEvent from "./pages/PremierEvent";
import Podcast from "./pages/Podcast";
import Testimonials from "./pages/Testimonials";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/premier-event"} component={PremierEvent} />
      <Route path={"/podcast"} component={Podcast} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [location] = useLocation();
  const isHomePage = location === "/";

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          {isHomePage && <FloatingVideo />}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
