const Services = () => {

  const services = [
    {
      id: 'asesoria',
      title: "Asesoría Profesional",
      description: "Contamos con los mejores profesionales capacitados y certificados que te ayudarán en la venta de tu propiedad."
    },
    {
      id: 'remodelaciones',
      title: "Remodelaciones",
      description: "Contamos con obreros expertos en la ciudad para que tu remodelación sea la mejor, te sentirás como en casa. Te aseguramos calidad."
    },
    {
      id: 'patrimonio',
      title: "Gestión de Patrimonio",
      description: "Sabemos que quieres dejar tu patrimonio en buenas manos y con nosotros te aseguramos tu inversión y te asesoramos con tu propiedad."
    },
    {
      id: 'avaluos',
      title: "Avalúos Urbanos",
      description: "La empresa cuenta con los servicios profesionales en la ejecución de avalúos urbanos, teniendo vinculado para tal fin a un profesional certificado por el registro nacional de avaluadores y la lonja de propiedad raíz del Huila."
    },
    {
      id: 'seguros',
      title: "Seguros de Arrendamiento",
      description: "El propietario a través de la aseguradora o afianzadora puede y debe adquirir la póliza o fianza de servicios públicos y faltantes de inventario, que le permiten recuperar alguna deuda que hubiese quedado pendiente por el inquilino."
    },
    {
      id: 'legal',
      title: "Asesoría Legal",
      description: "La empresa cuenta con un departamento jurídico, responsable de cumplir el marco legal en los contratos suscritos por la empresa y con el fin de asegurar un documento elaborado correctamente en cuanto a información y datos."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Servicios</h1>
          <p className="text-xl opacity-90">
            Porque sabemos que encontrar un lugar para vivir es muy importante, por eso en Inmobiliaria Santa María Vera te asesoramos para que encuentres la mejor opción.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-yellow-600 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mudarse nunca había sido tan cómodo</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Porque sabemos que encontrar un lugar para vivir es muy importante, en Inmobiliaria Santa María Vera te asesoramos para que encuentres la mejor opción.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;