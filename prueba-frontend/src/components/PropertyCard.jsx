import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 transition-transform hover:scale-105">
      <img
        src={property.image || "https://via.placeholder.com/400x300"}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{property.name}</h3>
        <p className="text-gray-600">{property.address}</p>
        <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
        <Link to={`/property/${property.id}`} className="text-yellow-600 hover:underline block mt-2">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;