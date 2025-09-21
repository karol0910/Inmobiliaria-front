import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProperties } from '../services/api';

const Properties = () => {
  const [activeTab, setActiveTab] = useState('venta');
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async (type) => {
    setLoading(true);
    try {
 
      const allProperties = await getProperties({});
      const filteredProperties = allProperties.filter(property => {
        if (type === 'venta') {
          return property.price >= 100000000;
        } else {
          return property.price < 100000000;
        }
      });
      
      setProperties(filteredProperties);
    } catch (error) {
      console.error('Error al cargar propiedades:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(activeTab);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Propiedades</h1>
          <p className="text-xl opacity-90">
            Porque sabemos que encontrar un lugar para vivir es muy importante, por eso en Inmobiliaria Santa María te asesoramos para que encuentres la mejor opción.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex border-b-2 border-gray-200 rounded-lg overflow-hidden max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab('venta')}
              className={`px-6 py-3 font-semibold transition duration-300 flex-1 text-center ${
                activeTab === 'venta'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Venta
            </button>
            <button
              onClick={() => setActiveTab('arriendo')}
              className={`px-6 py-3 font-semibold transition duration-300 flex-1 text-center ${
                activeTab === 'arriendo'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Arriendo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Cargando propiedades...</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                {activeTab === 'venta' ? 'Propiedades en Venta' : 'Propiedades en Arriendo'}
              </h2>
              
              {properties.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">
                    {activeTab === 'venta' 
                      ? 'No hay propiedades en venta disponibles en este momento' 
                      : 'No hay propiedades en arriendo disponibles en este momento'}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {properties.map((property) => (
                    <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-transform hover:scale-105 hover:shadow-xl">
                      <img
                        src={property.image || "https://via.placeholder.com/400x300"}
                        alt={property.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800">{property.name}</h3>
                        <p className="text-gray-600">{property.address}</p>
                        <p className="text-green-600 font-bold text-lg">${property.price.toLocaleString()}</p>
                        <Link 
                          to={`/property/${property.id}`} 
                          className="text-yellow-500 hover:text-yellow-600 font-semibold block mt-2"
                        >
                          Ver detalles →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
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

export default Properties;