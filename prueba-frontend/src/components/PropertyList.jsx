import PropertyCard from './PropertyCard';

const PropertyList = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p>No se encontraron propiedades.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Propiedades Disponibles</h2>
      
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
    </div>
  );
};

export default PropertyList;