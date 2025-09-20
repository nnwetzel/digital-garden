"use client";
import Navbar from "../../components/Navbar";
import MainLayout from "../../components/MainLayout";
import React from "react";

export default function Projects() {
  return (
    <>
      <Navbar />
      <MainLayout headline="Projects">
        <p>
          {/* Add your projects content here */}
          Here are some of my favorite projects. (Add project details below)
        </p>
      </MainLayout>
    </>
  );
}
