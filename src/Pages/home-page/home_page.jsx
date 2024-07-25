import { Container, Typography } from "@mui/material";
// import { useTheme } from "@emotion/react";
// import { useEffect, useState } from "react";


function HomePage() {
 
  return (
    <Container>
      <Typography fontSize={20} >
        Truyện Hot
      </Typography>
      {/* <NovelGrid novels={hot_novels}></NovelGrid>
      <NovelTable novel_data={other_sources_hot_novel}></NovelTable> */}
    </Container>
  );
}

export default HomePage;