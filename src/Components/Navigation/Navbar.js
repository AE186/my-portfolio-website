import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const [bgcolor, setBgcolor] = useState("transparent");

  const listenScrollEvent = (e) => {
    if (window.scrollY < window.innerHeight - 100) {
      setBgcolor("transparent");
    } else {
      setBgcolor("primary.main");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const navBtnStyle = { cursor: "pointer", fontWeight: "500" };

  function handleOptChange(e) {
    setSelected(e.target.id);
  }

  return (
    <Box
      sx={{
        bgcolor: bgcolor,
        color: "white",
        height: "15vh",
        width: "100%",
        position: "fixed",
        zIndex: "100"
      }}
    >
      <Container sx={{ display: "flex", gap: 8, py: 4 }}>
        <Typography
          id="home"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "home" ? "secondary.main" : ""
          }}
          onClick={handleOptChange}
        >
          Home
        </Typography>
        <Typography
          id="about"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "about" ? "secondary.main" : ""
          }}
          onClick={handleOptChange}
        >
          About
        </Typography>
        <Typography
          id="technologies"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "technologies" ? "secondary.main" : ""
          }}
          onClick={handleOptChange}
        >
          Technologies
        </Typography>
        <Typography
          id="projects"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "projects" ? "secondary.main" : ""
          }}
          onClick={handleOptChange}
        >
          Projects
        </Typography>
        <Typography
          id="contact"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "contact" ? "secondary.main" : ""
          }}
          onClick={handleOptChange}
        >
          Contact
        </Typography>
      </Container>
    </Box>
  );
}

export default Navbar;
