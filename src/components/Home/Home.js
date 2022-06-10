import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "../Card/Card";
import Login from "../Login/Login";
import Register from "../Registration/Registration";
import Profile from "../Profile/Profile";
import Destination from "../Destination/Destination/Destination";
import ForgotPassword from "../ForgotPasword/ForgotPassword";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InputShow from "../Destination/InputShow/InputShow";
import DestinationAuthProvider from "../Destination/DestinationAuth/DestinationAuth";
import Congratulations from "../Congratulations/Congratulations";

const Home = () => {
  return (
    <DestinationAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route exact path="/home" element={<Card />} />

          <Route element={<ProtectedRoute path="/destination" />}>
            <Route path="/destination/:text" element={<Destination />} />
          </Route>

          <Route element={<ProtectedRoute path="/profile" />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<ProtectedRoute path="/login" />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<ProtectedRoute path="/register" />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<ProtectedRoute path="/confirm" />}>
            <Route path="/confirm" element={<InputShow />} />
          </Route>

          <Route element={<ProtectedRoute path="/congratulations" />}>
            <Route path="/congratulations" element={<Congratulations />} />
          </Route>

          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </DestinationAuthProvider>
  );
};

export default Home;
