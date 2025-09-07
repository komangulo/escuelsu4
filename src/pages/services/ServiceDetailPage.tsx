import { useParams } from 'react-router-dom';
import { getServiceById } from '@/data/services';
import { ServiceDetailCard } from '@/components/ServiceDetailCard';

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId) {
    return <div>Servicio no encontrado</div>;
  }

  const service = getServiceById(serviceId);

  if (!service) {
    return <div>Servicio no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-darker py-12">
      <ServiceDetailCard service={service} />
    </div>
  );
};

export default ServiceDetailPage;
