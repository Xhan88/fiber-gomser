import {
    Factory,
    FileText,
    Mail,
    MapPin,
    Phone,
  } from "lucide-react";
  
  import { FaWhatsapp } from "react-icons/fa";
  
  const ContactInfo = () => {
    return (
      <div>
        <h2 className="text-3xl font-extrabold text-slate-950">
          Información de contacto
        </h2>
  
        <div className="mt-4 h-[2px] w-12 bg-blue-600" />
  
        <div className="mt-7 space-y-7">
          {/* Phone */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Phone size={22} />
            </div>
  
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                Teléfono
              </h3>
  
              <a
                href="tel:+523787820033"
                className="mt-1 block text-sm text-slate-700 hover:text-blue-600"
              >
                +52 378 782 0033
              </a>
  
              <p className="mt-1 text-sm text-slate-500">
                Lunes a Viernes de 8:00 a.m. a 6:00 p.m.
              </p>
            </div>
          </div>
  
          {/* Email */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Mail size={22} />
            </div>
  
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                Correo electrónico
              </h3>
  
              <a
                href="mailto:ventas@fibergomser.com"
                className="mt-1 block text-sm text-slate-700 hover:text-blue-600"
              >
                ventas@fibergomser.com
              </a>
  
              <p className="mt-1 text-sm text-slate-500">
                Envíanos tu consulta o proyecto
              </p>
            </div>
          </div>
  
          {/* Address */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <MapPin size={22} />
            </div>
  
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                Dirección
              </h3>
  
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Camino a San José de Gracia 1000
                <br />
                Col. Las Trojes, Tepatitlán de Morelos
                <br />
                Jalisco, México
              </p>
            </div>
          </div>
  
          {/* Plant */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Factory size={22} />
            </div>
  
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                Planta de producción
              </h3>
  
              <p className="mt-1 text-sm text-slate-700">
                Tepatitlán de Morelos, Jalisco, México
              </p>
  
              <p className="mt-1 text-sm text-slate-500">
                Visitas con previa cita
              </p>
            </div>
          </div>
  
          {/* WhatsApp */}
          <div className="flex gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaWhatsapp size={23} />
            </div>
  
            <div>
              <h3 className="text-sm font-bold text-slate-950">
                WhatsApp
              </h3>
  
              <a
                href="https://wa.me/523787820033"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm text-slate-700 hover:text-blue-600"
              >
                +52 378 782 0033
              </a>
  
              <p className="mt-1 text-sm text-slate-500">
                Atención rápida por WhatsApp
              </p>
            </div>
          </div>
        </div>
  
        {/* Quote box */}
        <div className="mt-8 flex gap-5 rounded-xl bg-[#f2f5fb] p-6">
          <FileText
            size={37}
            strokeWidth={1.5}
            className="shrink-0 text-blue-600"
          />
  
          <div>
            <h3 className="font-bold text-slate-950">
              Solicita una cotización
            </h3>
  
            <p className="mt-2 max-w-[360px] text-sm leading-6 text-slate-600">
              ¿Necesitas una cotización personalizada? Envíanos los detalles de
              tu proyecto y te enviaremos una propuesta a la medida.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;