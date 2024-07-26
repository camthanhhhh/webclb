import { Container, Typography } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import { useEffect, useState } from "react";
import './home_page.css'


function HomePage() {
 
  return (
    <Container>
      <Typography fontSize={20} >
        <img src="/Home.png" size="width: 100%" alt="Home" className="home-image" />
      </Typography>
      
      {/* <NovelGrid novels={hot_novels}></NovelGrid>
      <NovelTable novel_data={other_sources_hot_novel}></NovelTable> */}
    </Container>
  );
}

export default HomePage;