import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import MainNavigation from './shared/components/Navigation/MainNavigation.jsx';
import Footer from './shared/components/Footer/Footer.jsx';

import Home from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import ManageQuestions from "./pages/ManageQuestions.jsx";
import Profile from './pages/Profile.jsx';
import Questions from './pages/Questions.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/manage-questions" element={<ManageQuestions></ManageQuestions>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/questions" element={<Questions></Questions>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
