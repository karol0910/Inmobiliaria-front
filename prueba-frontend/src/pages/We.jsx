import { useState } from 'react';

const We = () => {
  const [activeTab, setActiveTab] = useState('mision');

  const content = {
    mision: {
      title: "Misión",
      description: "Contamos con los mejores profesionales capacitados y certificados que te ayudarán en la venta de tu propiedad."
    },
    vision: {
      title: "Visión",
      description: "Contamos con obreros expertos en la ciudad para que tu remodelación sea la mejor, te sentirás como en casa. Te aseguramos calidad y satisfacción en cada proyecto que emprendemos."
    },
    historia: {
      title: "Reseña Histórica",
      description: "Fundada en 2010, nuestra empresa ha crecido para convertirse en un referente en el sector inmobiliario. Contamos con un departamento jurídico responsable de cumplir el marco legal en los contratos suscritos, asegurando transacciones seguras y confiables para todos nuestros clientes."
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl opacity-90">
            Porque sabemos que encontrar un lugar para vivir es muy importante, por eso en Inmobiliaria Santa María te asesoramos para que encuentres la mejor opción.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex border-b-2 border-gray-200 rounded-lg overflow-hidden mb-8 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('mision')}
              className={`px-6 py-3 font-semibold transition duration-300 flex-1 text-center ${
                activeTab === 'mision'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Misión
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 font-semibold transition duration-300 flex-1 text-center ${
                activeTab === 'vision'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Visión
            </button>
            <button
              onClick={() => setActiveTab('historia')}
              className={`px-6 py-3 font-semibold transition duration-300 flex-1 text-center ${
                activeTab === 'historia'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Reseña Histórica
            </button>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{content[activeTab].title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{content[activeTab].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Mudarse nunca había sido tan cómodo</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Porque sabemos que encontrar un lugar para vivir es muy importante, en Inmobiliaria XYZ te asesoramos para que encuentres la mejor opción.
          </p>
        </div>
      </section>
    </div>
  );
};

export default We;