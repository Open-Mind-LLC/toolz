import React, { Suspense } from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const LoginPage = React.lazy(() => import("../pages/Auth/LoginView"));
const RegisterPage = React.lazy(() => import("../pages/Auth/RegisterView"));
const ResetPasswordPage = React.lazy(() =>
  import("../pages/Auth/ResetPasswordView")
);
const Sidebar = React.lazy(() =>
  import("../components/Sidebar/sidebar")
);


// const ProfilePage = React.lazy(() => import('./views/ProfilePage'));
// const FriendsPage = React.lazy(() => import('./views/FriendsPage'));

const RouteList = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPage />} />
          <Route
            path="/account/password-reset/"
            element={<ResetPasswordPage />}
          />
        </Routes>
      </Router>
      <Sidebar />
    </Suspense>
  );
};

export default RouteList;
