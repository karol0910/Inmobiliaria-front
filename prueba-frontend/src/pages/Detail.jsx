import { useParams } from 'react-router-dom';
import PropertyDetail from '../components/PropertyDetail';

const Detail = () => {
  const { id } = useParams();
  return <PropertyDetail id={id} />;
};

export default Detail;