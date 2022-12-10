import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";


function Home() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      position={"relative"} width="100%" height="90vh">
          <video
                autoPlay
                loop
                muted
                width={"100%"} height={"80%"} 
              >
              <source
                src="/background-video.mp4"
                type="video/mp4"
              />
      </video>
      <Typography
        fontFamily={"Dancing Script,cursive"}
        variant="h4"
        fontWeight="bold"
        textAlign={"center"}
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "white",
          background: "primary",
        }}
        mt={{ xs: 10, sm: 14 }}
      > Welcome To TECH-BLOG 
      </Typography>
      <Box width="100%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"quicksand"}
          fontWeight="bold"
          textAlign={"center"}
          variant="h6"
          padding={2}
        >
        STAY CURIOUS & CREATE YOU SPACE.
        </Typography>
        <Box margin="auto">
          <Button
            LinkComponent={Link}
            to="/blog"
            variant="contained"
          sx={{ ml: 2, mr: 2 }}>
            Start Reading
          </Button>
          </Box>
        </Box>
      </Box>
  );
}
export default Home

