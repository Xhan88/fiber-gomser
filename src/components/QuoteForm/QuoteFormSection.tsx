import { Send } from "lucide-react";

const QuoteFormSection = () => {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#061b31]"
    >
      {/* Fondo decorativo derecho */}
      <div className="absolute inset-y-0 right-0 hidden w-[34%] lg:block">
        <img
          src="/images/products/fibras-relleno.jpg"
          alt=""
          className="h-full w-full object-cover object-left"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061b31] via-[#061b31]/35 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[30%_46%_24%] lg:items-center lg:px-12 xl:px-16">
        
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
            ¿Necesitas una cotización?
            <br />
            Estamos para{" "}
            <span className="text-blue-500">
              ayudarte
            </span>
          </h2>

          <p className="mt-5 max-w-[340px] text-sm leading-6 text-white/80">
            Completa el formulario y nos pondremos en contacto contigo a la
            brevedad.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="h-11 rounded-sm bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="company"
            placeholder="Empresa"
            className="h-11 rounded-sm bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono / WhatsApp"
            className="h-11 rounded-sm bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="h-11 rounded-sm bg-white px-4 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="product"
            defaultValue=""
            className="h-11 rounded-sm bg-white px-4 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2"
          >
            <option value="" disabled>
              Producto de interés
            </option>

            <option value="fibras">
              Fibras para relleno
            </option>

            <option value="guata">
              Guata laminada
            </option>

            <option value="geotextiles">
              Geotextiles
            </option>

            <option value="capitonados">
              Capitonados
            </option>

            <option value="ultrasonico">
              Servicio ultrasónico
            </option>

            <option value="acolchado">
              Guata para acolchado
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Cuéntanos qué necesitas..."
            rows={4}
            className="resize-none rounded-sm bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 sm:col-span-2"
          />

          <button
            type="submit"
            className="flex h-11 items-center justify-center gap-2 rounded-sm bg-blue-600 text-xs font-bold uppercase text-white transition-colors duration-300 hover:bg-blue-700 sm:col-span-2"
          >
            <Send size={15} />
            Enviar solicitud
          </button>
        </form>

        {/* Empty column */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};

export default QuoteFormSection;