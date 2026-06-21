import BottomNav from "../components/BottomNav";

function Services() {
  const services = [
    {
      name: "Electrician",
      rating: 4.8,
      price: "₹300/hr"
    },
    {
      name: "Plumber",
      rating: 4.7,
      price: "₹250/hr"
    },
    {
      name: "Cleaner",
      rating: 4.9,
      price: "₹200/hr"
    }
  ];

  return (
    <div>
      <h1>Services</h1>

      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.name}</h3>
          <p>⭐ {service.rating}</p>
          <p>{service.price}</p>
          <button>Book Now</button>

          
        </div>
      ))}

      <BottomNav />
    </div>
  );
}

export default Services;