// import { Typography } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import { useEffect, useState } from "react";
import './home_page.css'
import { Box } from '@mui/material';


function HomePage() {
 
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'min-content',
          overflowX: 'auto',
        }}
      >
        <img src="/Home.png" alt="home" style={{ marginRight: '0px' }} />
        
      </Box>

    </>
  );
}

export default HomePage;