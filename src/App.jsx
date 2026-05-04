import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Inscription } from "./pages/Inscription";
import { Connexion } from "./pages/Connexion";
import { Mode } from "./pages/Mode";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { isConnected } from "./assets/functions/connected";
import { Normal } from "./pages/Normal";
import { PaysProvider } from "./context/PaysContext";

function App() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route
            path="/mode"
            element={
              <ProtectedRoute isConnected={isConnected}>
                <Mode />
              </ProtectedRoute>
            }
          />
          <Route
            element={
              <PaysProvider>
                <Outlet />
              </PaysProvider>
            }
          >
            <Route path="/mode-normal" element={<Normal />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
