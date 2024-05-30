import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Footer from "./components/commons/Footer";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { UserContext } from "./context/context";
import Authenticated from "./views/Authenticated";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <UserProvider>
          <Content />
        </UserProvider>
      </Router>
    </React.StrictMode>
  );
}

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
      if (localStorage.getItem('user') == null) {
          navigate('/login');
      }
  }, [navigate]);
  return children;
};

function Content() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col min-h-screen">
      {user?.is_admin === "a5b1c4d3f2" && localStorage.getItem('user') == null && (
        <header className="h-16 w-full bg-primary text-white text-xl flex justify-center items-center font-bold">
          Bienvenue {user.firstname + " " + user.lastname}
        </header>
      )}
      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Authenticated />} />
          <Route path="/response/:id_link" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {
        user.firstname !== undefined && <Footer />
      }
    </div>
  );
}

export default App;
