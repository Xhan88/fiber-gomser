import React from 'react';

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const UltrasonicServiceSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      text: 'Acabados más resistentes',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <line x1="19" y1="12" x2="5" y2="12" />
          <line x1="12" y1="22" x2="12" y2="2" />
          <line x1="22" y1="12" x2="2" y2="12" />
        </svg>
      ),
      text: 'Sin agujas ni hilos',
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-blue-700"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          <path d="M19.4 11a1.65 1.65 0 0 0 .33 1.82l.06.06a1.65 1.65 0 0 1 0 2.33l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 1-1.65 1.65h-.09a1.65 1.65 0 0 0-1.82.33l-.06.06a1.65 1.65 0 0 1-2.33 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33h-.09a1.65 1.65 0 0 1-1.65-1.65v-.09a1.65 1.65 0 0 0-.33-1.82l-.06-.06a1.65 1.65 0 0 1 0-2.33l.06-.06a1.65 1.65 0 0 0 .33-1.82v-.09A1.65 1.65 0 0 1 4.65 5h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a1.65 1.65 0 0 1 2.33 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 1 12 6.65v.09" />
        </svg>
      ),
      text: 'Mayor durabilidad y confort',
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Columna de Texto */}
        <div className="flex flex-col space-y-5">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-sm">
            SERVICIO ULTRASÓNICO
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
            Tecnología que une resistencia y calidad
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl">
            Contamos con maquinaria de pun-sonic o ultrasónico para ofrecer uniones fuertes, limpias y duraderas en cubre colchones, cubre salas y más productos textiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  {feature.icon}
                </div>
                <p className="text-gray-900 font-medium text-xs leading-snug">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#"
              className="inline-flex items-center space-x-3 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out uppercase text-xs tracking-wide"
            >
              <span>CONOCE MÁS DEL SERVICIO</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Columna de Imágenes */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {/* Imagen Principal */}
          <div className="col-span-1 aspect-square w-full">
            <img
              src="/images/services/ultrasonico-principal.png"
              alt="Maquinaria ultrasónica textil principal"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
          
          {/* Columna Derecha */}
          <div className="col-span-1 grid grid-rows-2 gap-3 aspect-square w-full">
            <div className="min-h-0 relative w-full h-full">
              <img
                src="/images/services/capitonado-textil.jpg"
                alt="Detalle de capitonado textil 1"
                className="w-full h-full object-cover rounded-xl shadow-sm absolute inset-0"
              />
            </div>
            <div className="min-h-0 relative w-full h-full">
              <img
                src="/images/services/capitonado2.jpg"
                alt="Detalle de capitonado textil 2"
                className="w-full h-full object-cover rounded-xl shadow-sm absolute inset-0"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UltrasonicServiceSection;