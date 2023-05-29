import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Breeds from "./components/Breeds";
import Nav from "./components/Nav";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import FilterSidebar from "./components/FilterSidebar";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <main>
      <Nav />
      <div className="flex flex-row gap-5">
        {auth && <FilterSidebar />}
        <Routes>
          <Route path="/" element={<Breeds />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>

      {!auth && <Navigate to="/login" />}
    </main>
  );
}

export default App;
