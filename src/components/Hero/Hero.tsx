import { Download, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[430px] overflow-hidden bg-cover bg-center lg:min-h-[520px]"
      style={{
        backgroundImage: "url('/images/heroempresa.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#03111f] via-[#03111f]/80 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1440px] items-center px-6 py-16 lg:min-h-[520px] lg:px-12 xl:px-16">
        <div className="max-w-[650px]">
          <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]">
            FABRICAMOS
            <br />
            SOLUCIONES TEXTILES
            <br />
            QUE{" "}
            <span className="text-[#1684ff]">
              INSPIRAN
            </span>
          </h1>

          <p className="mt-6 max-w-[540px] text-[15px] font-medium leading-7 text-white/90 sm:text-base">
            Especialistas en fibras, guata laminada, geotextiles,
            capitonados y servicios ultrasónicos para diferentes
            industrias en México.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[#087cff] px-6 text-xs font-bold uppercase text-white transition-all duration-300 hover:bg-[#006be0]"
            >
              <MessageCircle size={18} />

              Escríbenos por WhatsApp
            </a>

            <a
              href="/catalogo-fiber-gomser.pdf"
              download
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border border-white/70 bg-black/20 px-6 text-xs font-bold uppercase text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-950"
            >
              <Download size={18} />

              Descargar catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;