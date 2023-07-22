import { Box, Container } from "@mui/system";
import React from "react";
import AboutMe from "../Components/Home/AboutMe";
import Contact from "../Components/Home/Contact";
import Intro from "../Components/Home/Intro";
import Skills from "../Components/Home/Skills";
import Work from "../Components/Home/Work";
import Navbar from "../Components/Navigation/Navbar";

function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Work />
      <Contact />
    </Box>
  );
}

export default Home;
