import { ReactNode } from "react";
import MainNav from "./MainNav";
import SEO from "./SEO";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ 
  children, 
  title = 'Academia de Sumisas - Aprende y Descubre el Mundo del BDSM',
  description = 'La mejor academia de sumisas en línea. Aprende sobre sumisión, BDSM y relaciones de poder de forma segura, consensuada y profesional.',
  keywords = 'academia de sumisas, sumisión, BDSM, relaciones de poder, dominación, sumisa, dominatrix, cursos de sumisión, entrenamiento de sumisas, comunidad BDSM'
}: LayoutProps) => {
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
      />
      <div className="min-h-screen bg-dark-surface text-white">
        <MainNav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
