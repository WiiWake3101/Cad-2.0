import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faBrush,
  faWrench,
  faTruckPickup,
  faBroom,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";
import "./service.css";

function ServiceCard({ icon, heading, text }) {
  return (
    <div className="column mt-40px">
      <div className="card">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="row">
      <ServiceCard
        icon={faHammer}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <ServiceCard
        icon={faBrush}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <ServiceCard
        icon={faWrench}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <ServiceCard
        icon={faTruckPickup}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <ServiceCard
        icon={faBroom}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
      <ServiceCard
        icon={faPlug}
        heading="Service Heading"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque."
      />
    </div>
  );
}

export default function Services() {
  return (
    <div className="mt-10px">
      <ServicesSection />
    </div>
  );
}
