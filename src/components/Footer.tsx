const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo y descripción */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <span className="text-xl font-semibold text-white">Academia de Sumisas</span>
              </div>
              <p className="text-muted-foreground">
                Especialista en formación de sumisas y relaciones D/s. 
                Sesiones presenciales en Madrid y asesoramiento personalizado.
              </p>
            </div>
            
            {/* Enlaces rápidos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                    Cursos y Servicios
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Palabras clave SEO */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Coach BDSM", "Mentoría Sexual", "Dominación Femenina", 
                  "Cursos BDSM", "Talleres BDSM", "Empoderamiento Sexual",
                  "Iniciación BDSM", "Sex Coach Madrid", "Asesoría Sexual"
                ].map((keyword) => (
                  <span 
                    key={keyword}
                    className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Empoderamiento - Coach Sexualidad y Mentoría BDSM. 
              Todos los derechos reservados. | Madrid, España
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Servicios profesionales de coaching sexual, mentoría BDSM y asesoría en dominación femenina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;