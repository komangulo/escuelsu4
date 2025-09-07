import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetailPage from "./pages/services/ServiceDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/blog/[id]";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <Layout 
                title="Academia de Sumisas - Aprende y Descubre el Mundo del BDSM"
                description="La mejor academia de sumisas en línea. Aprende sobre sumisión, BDSM y relaciones de poder de forma segura, consensuada y profesional."
              >
                <Index />
              </Layout>
            } />
            <Route path="/servicios/:serviceId" element={
              <Layout 
                title="Nuestros Servicios - Academia de Sumisas"
                description="Descubre nuestros servicios profesionales de formación en sumisión y BDSM. Cursos especializados para todos los niveles."
              >
                <ServiceDetailPage />
              </Layout>
            } />
            <Route path="/blog" element={
              <Layout 
                title="Blog - Escuela de Sumisas"
                description="Artículos y recursos sobre sumisión, BDSM y relaciones de poder. Aprende de expertos en la materia."
              >
                <BlogPage />
              </Layout>
            } />
            <Route path="/blog/:id" element={
              <Layout>
                <BlogPostPage />
              </Layout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <Layout 
                title="Página no encontrada - Escuela de Sumisas"
                description="La página que buscas no existe o ha sido movida."
              >
                <NotFound />
              </Layout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
