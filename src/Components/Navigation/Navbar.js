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
        // bgcolor: "primary.main",
        bgcolor: bgcolor,
        color: "secondary.main",
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
            color: selected === "home" ? "secondary.selected" : ""
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
            color: selected === "about" ? "secondary.selected" : ""
          }}
          onClick={handleOptChange}
        >
          About
        </Typography>
        <Typography
          id="skills"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "skills" ? "secondary.selected" : ""
          }}
          onClick={handleOptChange}
        >
          Skills
        </Typography>
        <Typography
          id="work"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "work" ? "secondary.selected" : ""
          }}
          onClick={handleOptChange}
        >
          Work
        </Typography>
        <Typography
          id="contact"
          variant={"h6"}
          sx={{
            ...navBtnStyle,
            color: selected === "contact" ? "secondary.selected" : ""
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
