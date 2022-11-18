import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <div>
    <ul className="header-cont">
      <Link className="heading" to="/">
        INVITATION
      </Link>
      <Link className="heading" to="/when">
        WHEN
      </Link>
      <Link className="heading" to="/where">
        WHERE
      </Link>
    </ul>
  </div>
);
export default Header;
