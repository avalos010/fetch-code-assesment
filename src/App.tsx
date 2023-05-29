import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Breeds from "./components/Breeds";
import Nav from "./components/Nav";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";
import FilterSidebar from "./components/FilterSidebar";
import useParams from "./hooks/useParams";

function App() {
  const { auth } = useContext(AuthContext);
  const { searchParams } = useParams();
  return (
    <main>
      <Nav />
      <div className="flex flex-row gap-5 flex-wrap">
        {auth && <FilterSidebar />}
        <Routes>
          <Route path="/" element={<Breeds />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>

      {!auth && (
        <Navigate
          to={{ pathname: "/login", search: searchParams.toString() }}
        />
      )}
    </main>
  );
}

export default App;
