import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Nav() {
  const { auth, handleLogOut } = useContext(AuthContext);

  if (!auth) {
    //If not authenticated than just show the only unathenticated page available.
    return (
      <nav>
        <Link
          to="/login"
          className="bg-black text-white p-4 flex flex-row gap-4"
        >
          Login
        </Link>
      </nav>
    );
  }

  return (
    <nav className="bg-black text-white p-4 flex flex-row gap-4">
      <button onClick={handleLogOut}>Logout</button>
    </nav>
  );
}

export default Nav;
