import React, { Suspense } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const LoginPage = React.lazy(() => import("../pages/Auth/LoginView"));
// const ProfilePage = React.lazy(() => import('./views/ProfilePage'));
// const FriendsPage = React.lazy(() => import('./views/FriendsPage'));

const RouteList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default RouteList;
