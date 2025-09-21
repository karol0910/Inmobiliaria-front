import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyImages = ({ propertyId }) => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:5214/api/propertyimage?idProperty=${propertyId}`);
        setImages(response.data);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchImages();
    }
  }, [propertyId]);

  if (loading) {
    return <div className="text-center py-4">Cargando galería...</div>;
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Galería de Imágenes</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={image.file}
              alt="Imagen de la propiedad"
              className="w-full h-32 md:h-40 object-cover hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;