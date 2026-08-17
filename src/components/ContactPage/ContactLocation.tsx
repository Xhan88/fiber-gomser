const ContactLocation = () => {
    return (
      <section className="bg-white px-6 pb-16 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
  
          {/* Heading */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Nuestra ubicación
            </h2>
  
            <div className="mt-4 h-[2px] w-12 bg-blue-600" />
  
            <p className="mt-4 text-sm leading-6 text-slate-600 md:text-base">
              Visítanos en nuestra planta de producción en Tepatitlán de Morelos,
              Jalisco.
            </p>
          </div>
  
          {/* Google Maps */}
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
            <iframe
              title="Ubicación de Fiber Gomser"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.439474535053!2d-102.7994997256362!3d20.773501196498668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842928239d3fdb8d%3A0x74305e59713ec34d!2sFiber%20Gomser%2C%20Guata%2Ctextil%20no%20tejido%2C%20prolipopileno%20no%20tejido%2C%20guata!5e0!3m2!1ses!2smx!4v1786943415028!5m2!1ses!2smx"
              className="h-[330px] w-full border-0 md:h-[420px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
  
        </div>
      </section>
    );
  };
  
  export default ContactLocation;