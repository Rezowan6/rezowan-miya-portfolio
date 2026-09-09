import { services } from "../../../config/services";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}