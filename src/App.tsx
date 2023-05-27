import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Breeds from "./components/Breeds";
import Nav from "./components/Nav";
import { useContext } from "react";
import { AuthContext } from "./providers/AuthProvider";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Breeds />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>

      {!auth && <Navigate to="/login" />}
    </>
  );
}

export default App;
