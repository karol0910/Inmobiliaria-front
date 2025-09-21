// components/__tests__/FilterForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import FilterForm from '../FilterForm';

describe('FilterForm', () => {
  const mockOnFilter = jest.fn();

  beforeEach(() => {
    mockOnFilter.mockClear();
  });

  test('renders all filter inputs', () => {
    render(<FilterForm onFilter={mockOnFilter} />);

    expect(screen.getByPlaceholderText('Nombre de la propiedad')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Dirección')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Precio mínimo')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Precio máximo')).toBeInTheDocument();
    expect(screen.getByText('Buscar Propiedades')).toBeInTheDocument();
  });

  test('calls onFilter with correct filters when form is submitted', () => {
    render(<FilterForm onFilter={mockOnFilter} />);

    fireEvent.change(screen.getByPlaceholderText('Nombre de la propiedad'), {
      target: { value: 'Casa' }
    });
    fireEvent.change(screen.getByPlaceholderText('Dirección'), {
      target: { value: 'Centro' }
    });
    fireEvent.change(screen.getByPlaceholderText('Precio mínimo'), {
      target: { value: '300000' }
    });
    fireEvent.change(screen.getByPlaceholderText('Precio máximo'), {
      target: { value: '600000' }
    });

    fireEvent.click(screen.getByText('Buscar Propiedades'));

    expect(mockOnFilter).toHaveBeenCalledWith({
      name: 'Casa',
      address: 'Centro',
      minPrice: '300000',
      maxPrice: '600000'
    });
  });
});