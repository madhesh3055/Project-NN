import "./ServiceCard.css";

interface Props {
  title: string;
  rating: number;
  price: string;
}

function ServiceCard({ title, rating, price }: Props) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>⭐ {rating}</p>
      <p>{price}</p>
      <button>Book Now</button>

      <ServiceCard
  title="Electrician"
  rating={4.8}
  price="₹300/hr"
/>

<ServiceCard
  title="Plumber"
  rating={4.7}
  price="₹250/hr"
/>

<ServiceCard
  title="Cleaner"
  rating={4.9}
  price="₹200/hr"
/>
    </div>
  );
}

export default ServiceCard;