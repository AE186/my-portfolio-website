import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Intro() {
  return (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        background: `url(${require("../../assets/splash.png")})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <Container sx={{ mt: "auto" }}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              pb: 2,
              textTransform: "uppercase",
              WebkitTextStroke: "1.5px #fff",
              WebkitTextFillColor: "transparent"
            }}
          >
            Muhammad Saad
          </Typography>
          <Typography
            variant="h5"
            sx={{ pb: 2 }}
          >
            Fullstack Developer
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <a
              href="https://github.com/AE186"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="43"
                viewBox="0 0 44 43"
                fill="none"
                style={{ cursor: "pointer" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2502 41.6431C33.341 41.6431 42.3319 32.6522 42.3319 21.5614C42.3319 10.4706 33.341 1.47968 22.2502 1.47968C11.1593 1.47968 2.16846 10.4706 2.16846 21.5614C2.16846 32.6522 11.1593 41.6431 22.2502 41.6431ZM16.8824 38.7166C18.5775 39.2464 20.3805 39.5319 22.2502 39.5319C24.1075 39.5319 25.899 39.2502 27.5843 38.7271V34.3341C27.5848 33.6255 27.4441 32.9238 27.1704 32.2701C26.8967 31.6164 26.4956 31.0238 25.9903 30.5269C31.8893 29.4894 34.3577 25.8956 34.3577 21.6199C34.3577 19.5448 33.6674 17.6244 32.3118 16.0848C33.0777 13.7036 32.2844 11.6684 32.1036 11.2047C32.0948 11.182 32.0874 11.1631 32.0817 11.1481C29.8226 10.9431 27.4797 12.6249 27.0069 12.9847C25.6138 12.6082 24.0323 12.4032 22.2584 12.4032C20.4929 12.4032 18.9157 12.5998 17.5351 12.9722C17.3384 12.8174 14.8115 10.8594 12.3807 11.077C12.3762 11.0887 12.3705 11.103 12.3639 11.1196C12.1894 11.558 11.3535 13.6588 12.1757 16.0974C10.837 17.6328 10.155 19.5364 10.155 21.6073C10.155 25.8747 12.6067 29.4643 18.4889 30.5186C17.7861 31.2005 17.2757 32.0791 17.0372 33.0623C15.9453 33.3342 13.7906 33.6103 12.6862 31.9745C11.1591 29.7195 9.84125 28.8869 8.54848 29.5522C8.2615 29.8833 8.63265 30.1329 9.16038 30.4878C9.6328 30.8055 10.2307 31.2076 10.5943 31.8281C10.65 31.9199 10.7025 32.0788 10.7694 32.2811C11.1591 33.4607 12.0361 36.1152 16.8824 35.5474V38.7166Z"
                  fill="#928A97"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/saad-vohra/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="43"
                viewBox="0 0 43 43"
                fill="none"
                style={{ cursor: "pointer" }}
              >
                <g clip-path="url(#clip0_203_762)">
                  <path
                    d="M21.4914 0.997849C10.1343 0.997849 0.927734 10.2044 0.927734 21.5615C0.927734 32.9187 10.1343 42.1252 21.4914 42.1252C32.8486 42.1252 42.0551 32.9187 42.0551 21.5615C42.0551 10.2044 32.8486 0.997849 21.4914 0.997849ZM16.4576 30.0847H12.2935V16.6841H16.4576V30.0847ZM14.3498 15.039C13.0346 15.039 12.1842 14.1072 12.1842 12.9548C12.1842 11.7788 13.0603 10.8748 14.4034 10.8748C15.7464 10.8748 16.569 11.7788 16.5947 12.9548C16.5947 14.1072 15.7464 15.039 14.3498 15.039ZM31.6662 30.0847H27.502V22.6583C27.502 20.9296 26.8979 19.7558 25.3921 19.7558C24.2418 19.7558 23.5585 20.5505 23.2565 21.3152C23.1451 21.5872 23.1172 21.9728 23.1172 22.3562V30.0826H18.9509V20.9575C18.9509 19.2845 18.8974 17.8858 18.8417 16.6819H22.4596L22.6503 18.5434H22.7338C23.2822 17.6694 24.6252 16.3799 26.8722 16.3799C29.6119 16.3799 31.6662 18.2156 31.6662 22.1613V30.0847Z"
                    fill="#928A97"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_762">
                    <rect
                      width="42.841"
                      height="42.841"
                      fill="white"
                      transform="translate(0.0709229 0.14072)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </Box>
        </Box>
      </Container>
      <Container sx={{ mt: "auto", mb: 2 }}>
        <Typography variant="subtitle1">
          <FontAwesomeIcon
            icon={faAnglesDown}
            beat
          />{" "}
          Scroll
        </Typography>
      </Container>
    </Box>
  );
}

export default Intro;
