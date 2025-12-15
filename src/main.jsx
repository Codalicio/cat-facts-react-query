import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatFacts from "./components/CatFacts.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <QueryClientProvider client={queryClient}>
      <CatFacts />
    </QueryClientProvider>
  </StrictMode>
);
