
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AzureNetworking from "./pages/AzureNetworking";
import AzureIaaS from "./pages/AzureIaaS";
import AzurePaaS from "./pages/AzurePaaS";
import AzureSaaS from "./pages/AzureSaaS";
import AzureDevOps from "./pages/AzureDevOps";
import CompleteInterview from "./pages/CompleteInterview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/interview" element={<Index />} />
          <Route path="/azure-networking" element={<AzureNetworking />} />
          <Route path="/azure-iaas" element={<AzureIaaS />} />
          <Route path="/azure-paas" element={<AzurePaaS />} />
          <Route path="/azure-saas" element={<AzureSaaS />} />
          <Route path="/azure-devops" element={<AzureDevOps />} />
          <Route path="/complete-interview" element={<CompleteInterview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
