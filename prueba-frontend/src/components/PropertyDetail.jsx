import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPropertyById } from '../services/api';
import PropertyTraces from './PropertyTraces';
import PropertyImages from './PropertyImages';


const PropertyDetail = ({ id }) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error('Error al cargar la propiedad:', error);
        alert('No se pudo cargar la propiedad.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Cargando...</div>;
  }

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Propiedad no encontrada.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-yellow-500 hover:underline mb-4 inline-block">
        ← Volver a la lista
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={property.image || "https://via.placeholder.com/800x400"}
          alt={property.name}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.name}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Dirección</h3>
              <p className="text-gray-900">{property.address}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Precio</h3>
              <p className="text-green-600 text-xl font-bold">${property.price.toLocaleString()}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Dueño</h3>
              <p className="text-gray-900">{property.ownerName}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-700">Código Interno</h3>
              <p className="text-gray-900">{property.codeInternal || 'N/A'}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">
              Esta propiedad ofrece un espacio ideal para familias o inversionistas. 
              Ubicada en una zona privilegiada, cuenta con todas las comodidades modernas.
            </p>
          </div>
          <PropertyImages propertyId={property.id} />

          <PropertyTraces propertyId={property.id} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;