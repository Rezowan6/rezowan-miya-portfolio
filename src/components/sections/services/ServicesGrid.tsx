import { services } from "../../../config/services";
import AnimatedItem from "../../animations/AnimatedItem";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <AnimatedItem key={service.id} delay={index * 70}>
          <ServiceCard service={service} />
        </AnimatedItem>
      ))}
    </div>
  );
}
