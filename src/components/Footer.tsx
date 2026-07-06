import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Servicios: ['Marketing & IA', 'Publicidad & Branding', 'Producción Audiovisual', 'Espacios & Eventos'],
    Producciones: ['Videoclips', 'Festivales & Eventos', 'Locales de Ocio', 'Campañas de Marca'],
    Empresa: ['Nosotros', 'Cómo Trabajamos', 'Contacto'],
    Legal: ['Términos', 'Privacidad', 'Cookies']
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/infamaproject', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mantente Actualizado
              </h3>
              <p className="text-gray-400">
                Novedades de nuestras producciones, eventos y proyectos de marca.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white"
                />
              </div>
              <button className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-4">
              <img src={`${import.meta.env.BASE_URL}image.png`} alt="The INFAMA Creative" className="h-10" />
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Agencia creativa de marketing digital e IA, publicidad, branding, producción
              audiovisual y diseño de espacios y eventos.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-600 hover:to-fuchsia-500 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} The INFAMA Creative. Todos los derechos reservados.
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
