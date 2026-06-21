import { Home, Wrench, Users, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/home">
        <Home size={20} />
      </NavLink>

      <NavLink to="/services">
        <Wrench size={20} />
      </NavLink>

      <NavLink to="/community">
        <Users size={20} />
      </NavLink>

      <NavLink to="/profile">
        <User size={20} />
      </NavLink>
    </div>
  );
}

export default BottomNav;