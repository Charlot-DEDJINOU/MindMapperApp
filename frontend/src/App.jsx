import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import Footer from "./components/commons/Footer"
import Header from "./components/commons/Header"
import Home from "./views/Home"
import NotFound from "./views/NotFound"

function App() {
  return (
    <React.StrictMode>
      <Router>
        <UserProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow mt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </UserProvider>
      </Router>
    </React.StrictMode>
  )
}

export default App