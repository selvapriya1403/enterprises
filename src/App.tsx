import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Admin from "./pages/admin";
import FacilityManager from "./pages/facilityManager";
// import Advocate from "./pages/advocate";
import LoginPage from "./pages/loginPage";
import BookAppointment from "./pages/bookAppointment";
import SignupPage from "./pages/signUp";
import Contact from "./pages/contact";

// Protected route wrapper
const RequireAuth: React.FC<{ isAuthenticated: boolean; children: React.ReactNode }> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" replace /> : <SignupPage />}
        />

        {/* Protected dashboard and nested routes */}
        <Route
          path="/*"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Dashboard onLogout={handleLogout} />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="facilityManager" element={<FacilityManager />} />
          {/* <Route path="advocate" element={<Advocate />} /> */}
          <Route path="book-appointment" element={<BookAppointment />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
