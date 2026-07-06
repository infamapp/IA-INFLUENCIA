import { ArrowRight, CheckCircle2, Instagram, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium">Hablemos de tu proyecto</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Convirtamos tu idea
              <span className="block bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                en algo real
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Ya sea una campaña, un videoclip, el branding de tu marca o el montaje de un evento:
              cuéntanos qué necesitas y te proponemos cómo hacerlo.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                'Respuesta personalizada, sin formularios automáticos',
                'Presupuesto adaptado al alcance real del proyecto',
                'Un mismo equipo para lo digital y lo físico',
                'Producción propia, sin intermediarios',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-400 to-fuchsia-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/infamaproject"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-gray-200 hover:text-white pt-4 border-t border-white/10 w-full"
            >
              <Instagram className="w-5 h-5" />
              <span>@infamaproject</span>
            </a>
          </div>

          {/* Right Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cuéntanos tu idea</h3>
              <p className="text-gray-600">Te respondemos en persona, sin bots ni plantillas.</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Proyecto</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all">
                  <option>Selecciona una opción</option>
                  <option>Marketing Digital & IA</option>
                  <option>Publicidad & Branding</option>
                  <option>Producción Audiovisual / Videoclip</option>
                  <option>Espacios & Eventos</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cuéntanos tu idea</label>
                <textarea
                  placeholder="Danos un poco de contexto sobre tu proyecto..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Enviar</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Al enviar este formulario, aceptas que te contactemos sobre tu proyecto.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
