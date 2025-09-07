import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export const SEO = ({
  title = 'Academia de Sumisas - Aprende y Descubre el Mundo del BDSM',
  description = 'La mejor academia de sumisas en línea. Aprende sobre sumisión, BDSM y relaciones de poder de forma segura, consensuada y profesional.',
  keywords = 'academia de sumisas, sumisión, BDSM, relaciones de poder, dominación, sumisa, dominatrix, cursos de sumisión, entrenamiento de sumisas, comunidad BDSM',
  url = 'https://tudominio.com',
  image = 'https://tudominio.com/images/og-image.jpg'
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Academia de Sumisas" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
