import { Bell, Search } from "lucide-react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="header">
        <h2>Hello Madhesh 👋</h2>
        <Bell size={24} />
      </div>

      <div className="search-box">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search services..."
        />
      </div>
    </div>
  );
}

export default Home;