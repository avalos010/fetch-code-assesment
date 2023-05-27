import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Breeds from "./components/Breeds";
import Nav from "./components/Nav";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Breeds />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      {!auth && <Navigate to="/login" />}
    </main>
  );
}

export default App;
