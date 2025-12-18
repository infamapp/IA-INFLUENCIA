import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-pink-500/20 px-4 py-2 rounded-full border border-pink-500/30">
              <Zap className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-medium text-pink-500">
                Plataforma Todo-en-Uno para Creadores
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Automatiza tu
              <span className="block bg-gradient-to-r from-pink-500 to-fuchsia-400 bg-clip-text text-transparent">
                Crecimiento Digital
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Potencia tu presencia en redes sociales con IA avanzada. Crea contenido viral,
              automatiza tu estrategia y convierte seguidores en ingresos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-fuchsia-400 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Comenzar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="group bg-gray-900 border-2 border-pink-500/50 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5 text-pink-500" />
                <span>Ver Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="flex items-center space-x-2 text-pink-500 mb-1">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">10x</span>
                </div>
                <p className="text-sm text-gray-400">Más Engagement</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-fuchsia-400 mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">50k+</span>
                </div>
                <p className="text-sm text-gray-400">Creadores</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-pink-500 mb-1">
                  <Zap className="w-5 h-5" />
                  <span className="text-2xl font-bold text-white">5h</span>
                </div>
                <p className="text-sm text-gray-400">Ahorradas/Día</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-500 to-fuchsia-400 rounded-2xl p-8 shadow-2xl shadow-pink-500/50">
              <div className="bg-white rounded-xl p-6 space-y-4">
                {/* Simulated Dashboard Preview */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-fuchsia-400 rounded-full" />
                    <div>
                      <div className="h-3 w-24 bg-gray-200 rounded" />
                      <div className="h-2 w-16 bg-gray-100 rounded mt-2" />
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-green-100 text-green-600 rounded-lg text-sm font-semibold">
                    Activo
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <div className="h-2 w-16 bg-gray-200 rounded" />
                      <div className="h-6 w-20 bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded" />
                    </div>
                  ))}
                </div>

                <div className="h-32 bg-gradient-to-t from-pink-100 to-fuchsia-50 rounded-lg" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm font-semibold">+245%</p>
                  <p className="text-xs text-gray-500">Crecimiento</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-pink-500" />
                <div>
                  <p className="text-sm font-semibold">IA Activa</p>
                  <p className="text-xs text-gray-500">Optimizando</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
