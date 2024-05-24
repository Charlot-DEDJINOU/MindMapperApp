import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Footer from "./components/commons/Footer";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ChartsHistogram from "./components/ChartsHistogram";

function App() {

  return (
    <React.StrictMode>
      <Router>
        <UserProvider>
          <div className="flex flex-col min-h-screen">
            <header className="h-16 w-full bg-primary text-white text-xl flex justify-center items-center font-bold">
                Explication Annagramme 
            </header>
            <main className="flex-grow flex items-center justify-center">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/user-question" element={<Home />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/detail" element={ <ChartsHistogram />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </UserProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;