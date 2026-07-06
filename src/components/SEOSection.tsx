import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function SEOSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const services = [
    {
      title: 'Marketing Digital e Inteligencia Artificial',
      description:
        'Estrategia de contenido, generación de posts y vídeos con IA, copywriting, calendarios editoriales, automatización de publicaciones, analítica y crecimiento de redes sociales para marcas, empresas y perfiles personales.',
      keywords: ['marketing digital', 'marketing con IA', 'contenido para redes sociales', 'automatización de marketing', 'gestión de redes sociales', 'crecimiento de marca'],
    },
    {
      title: 'Marca Personal e Influencer Marketing',
      description:
        'Posicionamiento y crecimiento de marcas personales, creadores de contenido e influencers: estrategia, contenido, storytelling y gestión de colaboraciones con marcas.',
      keywords: ['marca personal', 'personal branding', 'influencer marketing', 'crecimiento de perfil', 'gestión de creadores', 'colaboraciones con marcas'],
    },
    {
      title: 'Publicidad y Branding',
      description:
        'Desarrollo de identidad de marca, diseño de logotipos e identidad visual, campañas publicitarias, anuncios, vídeos publicitarios y expositivos para productos, marcas y eventos.',
      keywords: ['branding', 'identidad visual', 'diseño de marca', 'publicidad digital', 'campañas publicitarias', 'vídeos publicitarios'],
    },
    {
      title: 'Producción de Videoclips',
      description:
        'Producción audiovisual completa de videoclips musicales: preproducción, grabación, dirección de arte, edición, color y postproducción.',
      keywords: ['producción de videoclips', 'videoclip musical', 'producción audiovisual', 'dirección de fotografía', 'edición de vídeo', 'postproducción'],
    },
    {
      title: 'Contenido para Eventos Musicales y Festivales',
      description:
        'Cobertura y producción de contenido para conciertos, festivales y eventos musicales: aftermovies, recap, contenido para redes y material promocional del evento.',
      keywords: ['eventos musicales', 'festivales', 'aftermovie', 'cobertura de eventos', 'contenido de festival', 'producción para conciertos'],
    },
    {
      title: 'Producciones Cinematográficas',
      description:
        'Apoyo en producción de proyectos cinematográficos y audiovisuales: producción ejecutiva, dirección de arte, rodaje y postproducción.',
      keywords: ['producción cinematográfica', 'producción audiovisual', 'rodaje', 'dirección de arte', 'cine independiente'],
    },
    {
      title: 'Diseño y Montaje de Espacios',
      description:
        'Creación de conceptos, decoración y montaje físico para locales de ocio, espacios comerciales y conceptos emergentes.',
      keywords: ['decoración de locales', 'montaje de espacios', 'diseño de conceptos', 'locales de ocio', 'ambientación de eventos'],
    },
    {
      title: 'Escenografía y Producción de Eventos',
      description:
        'Diseño y montaje de escenografía y decorados para eventos musicales, fiestas temáticas y experiencias en vivo, incluyendo producción integral del evento.',
      keywords: ['escenografía de eventos', 'producción de eventos', 'decorados para eventos musicales', 'montaje escénico', 'diseño de experiencias'],
    },
  ];

  const disciplines = [
    {
      category: 'Marketing & IA',
      features: [
        'Estrategia de contenido con inteligencia artificial',
        'Gestión y automatización de redes sociales',
        'Analítica y reporting de crecimiento',
        'Posicionamiento de marca personal e influencers',
      ],
    },
    {
      category: 'Publicidad & Branding',
      features: [
        'Identidad de marca y diseño visual',
        'Campañas publicitarias 360',
        'Vídeos publicitarios y expositivos',
        'Dirección de arte para producto y marca',
      ],
    },
    {
      category: 'Producción Audiovisual',
      features: [
        'Videoclips musicales',
        'Contenido para festivales y eventos en vivo',
        'Producciones cinematográficas',
        'Edición, color y postproducción',
      ],
    },
    {
      category: 'Espacios & Eventos',
      features: [
        'Decoración y montaje de locales de ocio',
        'Escenografía para eventos musicales',
        'Conceptos emergentes y experiencias',
        'Producción integral del evento',
      ],
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-6 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-300 border border-gray-800 hover:border-pink-500/50 group"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">ℹ️</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-1">
                Todos nuestros servicios en detalle
              </h3>
              <p className="text-gray-400 text-sm">
                {isExpanded ? 'Haz clic para ocultar' : 'Haz clic para ver el detalle de marketing, producción y eventos'}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-pink-500 transition-transform group-hover:scale-110" />
          ) : (
            <ChevronDown className="w-6 h-6 text-pink-500 transition-transform group-hover:scale-110" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-8 space-y-12 animate-fadeIn">
            {/* Services Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Servicios de Marketing, Producción y Eventos
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-pink-500 mb-3">{service.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disciplines Section */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                Nuestras Cuatro Disciplinas
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {disciplines.map((discipline) => (
                  <div
                    key={discipline.category}
                    className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-fuchsia-500/50 transition-all duration-300"
                  >
                    <h4 className="text-lg font-bold text-fuchsia-400 mb-4">{discipline.category}</h4>
                    <ul className="space-y-2">
                      {discipline.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-sm text-gray-300">
                          <span className="text-pink-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Áreas de Trabajo</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Agencia Creativa', 'Marketing Digital', 'Inteligencia Artificial', 'Redes Sociales',
                  'Marca Personal', 'Influencer Marketing', 'Branding', 'Identidad Visual',
                  'Publicidad', 'Campañas Publicitarias', 'Vídeos Publicitarios', 'Producción Audiovisual',
                  'Videoclips', 'Cine', 'Producción Cinematográfica', 'Postproducción',
                  'Eventos Musicales', 'Festivales', 'Aftermovie', 'Cobertura de Eventos',
                  'Decoración de Espacios', 'Locales de Ocio', 'Escenografía', 'Montaje de Eventos',
                  'Conceptos Emergentes', 'Dirección de Arte', 'Storytelling', 'Contenido Digital',
                  'Growth Marketing', 'Content Creator', 'Community Management', 'Automatización IA',
                ].map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-pink-500/50 hover:text-pink-400 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center py-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
                The INFAMA Creative es una agencia creativa especializada en marketing digital e
                inteligencia artificial, publicidad y branding, producción audiovisual de videoclips
                y proyectos cinematográficos, contenido para eventos musicales y festivales, y diseño
                y montaje de espacios y decorados para locales de ocio y conceptos emergentes.
                Trabajamos tanto con marcas y productos como con marcas personales e influencers que
                buscan crecer y posicionarse.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
