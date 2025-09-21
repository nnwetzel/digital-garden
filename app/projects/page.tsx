"use client";
import Navbar from "../../components/Navbar";
import PageLayout from "../../components/page-layout";
import React from "react";

export default function Projects() {
  return (
    <>
      <Navbar />
      <PageLayout headline="Projects">
        <p>
          {/* Add your projects content here */}
          Here are some of my favorite projects. (Add project details below)
        </p>
      </PageLayout>
    </>
  );
}
