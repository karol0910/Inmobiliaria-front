import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyTraces = ({ propertyId }) => {
  const [traces, setTraces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTraces = async () => {
      try {
        const response = await axios.get(`http://localhost:5214/api/propertytrace?idProperty=${propertyId}`);
        setTraces(response.data);
      } catch (error) {
        console.error('Error al cargar:', error);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchTraces();
    }
  }, [propertyId]);

  if (loading) {
    return <div className="text-center py-4">Cargando historial...</div>;
  }

  if (traces.length === 0) {
    return <div className="text-center py-4 text-gray-600">No hay historial de transacciones.</div>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Historial de Transacciones</h3>
      <div className="space-y-4">
        {traces.map((trace) => (
          <div key={trace.id} className="bg-white p-4 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Fecha de Venta</p>
                <p className="font-semibold">{trace.dateSale}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Valor</p>
                <p className="font-semibold text-green-600">${trace.value.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Impuestos</p>
                <p className="font-semibold">${trace.tax.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Propiedad</p>
                <p className="font-semibold">{trace.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTraces;