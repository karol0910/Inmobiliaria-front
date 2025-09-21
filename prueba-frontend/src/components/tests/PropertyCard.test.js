import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PropertyCard from '../PropertyCard';

const mockProperty = {
  id: '1',
  name: 'Casa en Centro',
  address: 'Av. Principal 456',
  price: 1850000,
  image: 'https://inmobiliariasantamariavera.com/images/fwre/properties/160/502257788_725235216632520_2422236283229673141_n.jpg',
  ownerName: 'Juan Pérez'
};

describe('PropertyCard', () => {
  test('renders property information correctly', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    expect(screen.getByText('Casa en Centro')).toBeInTheDocument();
    expect(screen.getByText('Av. Principal 456')).toBeInTheDocument();
    expect(screen.getByText('$1,850,000')).toBeInTheDocument();
    expect(screen.getByText('Ver detalles →')).toBeInTheDocument();
  });

  test('displays property image', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    const img = screen.getByAltText('Casa en Centro');
    expect(img).toHaveAttribute('src', 'https://inmobiliariasantamariavera.com/images/fwre/properties/160/502257788_725235216632520_2422236283229673141_n.jpg');
  });

  test('has link to property detail page', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={mockProperty} />
      </MemoryRouter>
    );

    const link = screen.getByText('Ver detalles →');
    expect(link).toHaveAttribute('href', '/property/1');
  });
});