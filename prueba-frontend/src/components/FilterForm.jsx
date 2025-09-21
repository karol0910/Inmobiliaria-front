import { useState } from 'react';

const FilterForm = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      if ((name === 'minPrice' || name === 'maxPrice') && value !== '') {
      if (!/^\d*$/.test(value)) {
        return;
      }
    }
    
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
      if ((name === 'minPrice' || name === 'maxPrice') && value !== '') {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        setFilters(prev => ({ ...prev, [name]: numericValue.toString() }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Buscar Propiedad</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre de la propiedad"
          value={filters.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={filters.address}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        <input
          type="text"
          name="minPrice"
          placeholder="Precio mínimo"
          value={filters.minPrice}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
        <input
          type="text"
          name="maxPrice"
          placeholder="Precio máximo"
          value={filters.maxPrice}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        />
      </div>
      <div className="text-center mt-6">
        <button 
          type="submit" 
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105"
        >
          Buscar Propiedades
        </button>
      </div>
    </form>
  );
};

export default FilterForm;