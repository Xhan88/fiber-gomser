import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  privacyAccepted: boolean;
}

const initialFormData: ContactFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  area: "",
  message: "",
  privacyAccepted: false,
};

const ContactForm = () => {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div className="rounded-xl bg-[#f8f9fb] p-7 lg:p-10">
      <h2 className="text-3xl font-extrabold text-slate-950">
        Envíanos tu mensaje
      </h2>

      <div className="mt-4 h-[2px] w-12 bg-blue-600" />

      <p className="mt-5 max-w-[500px] text-sm leading-6 text-slate-600">
        Completa el formulario y nos pondremos en contacto contigo lo antes
        posible.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <input
          type="text"
          required
          placeholder="Nombre completo *"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
          className="h-14 rounded-md border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        />

        <input
          type="text"
          placeholder="Empresa"
          value={formData.company}
          onChange={(e) =>
            setFormData({
              ...formData,
              company: e.target.value,
            })
          }
          className="h-14 rounded-md border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        />

        <input
          type="email"
          required
          placeholder="Correo electrónico *"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="h-14 rounded-md border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        />

        <input
          type="tel"
          required
          placeholder="Teléfono *"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="h-14 rounded-md border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
        />

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Área de interés *
          </label>

          <select
            required
            value={formData.area}
            onChange={(e) =>
              setFormData({
                ...formData,
                area: e.target.value,
              })
            }
            className="h-14 w-full rounded-md border border-slate-300 bg-white px-4 text-sm text-slate-700 outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="">
              Selecciona un área
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

            <option value="otro">
              Otro
            </option>
          </select>
        </div>

        <textarea
          required
          rows={6}
          placeholder="Mensaje *&#10;Cuéntanos sobre tu proyecto o requerimiento..."
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          className="resize-none rounded-md border border-slate-300 bg-white p-4 text-sm outline-none transition focus:border-blue-600 focus:ring-1 focus:ring-blue-600 sm:col-span-2"
        />

        <label className="flex items-start gap-3 text-sm text-slate-600 sm:col-span-2">
          <input
            type="checkbox"
            required
            checked={formData.privacyAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                privacyAccepted: e.target.checked,
              })
            }
            className="mt-1 h-4 w-4 accent-blue-600"
          />

          <span>
            Acepto el{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline"
            >
              tratamiento de mis datos personales
            </a>
            . *
          </span>
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex min-h-[50px] items-center justify-center gap-6 rounded-full bg-blue-600 px-8 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Enviar mensaje
            <ArrowRight size={17} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;