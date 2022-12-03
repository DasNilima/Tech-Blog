import * as React from 'react';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from "@material-ui/core/Typography";


function Home() {
  return (
    <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
      <Card sx={{ minHeight: '700px', width: 500,  margin: "auto",mt: 4, padding: 2,}}>
          <CardCover>
            <video
                autoPlay
                loop
                muted
              >
              <source
                src="/background-video.mp4"
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent >
            <Typography
                variant="h5"
                align="center"
                color="primary"
              mt={{ xs: 12, sm: 18 }}
              >
                Welcome To TECH-BLOG
              </Typography>
          </CardContent>
      </Card>
      </Box>
  );
}
export default Home
