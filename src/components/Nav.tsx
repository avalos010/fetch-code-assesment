import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

function Nav() {
  const { auth, handleLogOut } = useContext(AuthContext);

  useEffect(() => {
    console.log("nav", auth);
  }, [auth]);

  return (
    <nav className="bg-black text-white p-4 flex flex-row gap-4">
      <Link to="/">Breeds</Link>

      {auth ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Nav;
