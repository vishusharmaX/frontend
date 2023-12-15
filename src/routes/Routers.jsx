import React from "react";
import Home from "./../pages/Home";
import Services from "./../pages/Services";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import Contact from "./../pages/Contact";
import Doctors from "./../pages/Doctors/Doctors";
import DoctorDetails from "./../pages/Doctors/DoctorDetails";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";

const Routers = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Routers;
