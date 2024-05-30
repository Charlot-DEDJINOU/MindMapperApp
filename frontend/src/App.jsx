import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Footer from "./components/commons/Footer";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ChartsHistogram from "./components/ChartsHistogram";
import { UserContext } from "./context/context";

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

function Content() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col min-h-screen">
      {user?.is_admin === "a5b1c4d3f2" && (
        <header className="h-16 w-full bg-primary text-white text-xl flex justify-center items-center font-bold">
          Bienvenue {user.firstname + " " + user.lastname}
        </header>
      )}
      <main className="flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/:id_link" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/detail" element={<ChartsHistogram />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
