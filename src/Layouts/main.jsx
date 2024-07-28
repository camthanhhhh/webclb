import { Box } from "@mui/material";

function Main({ children }) {
  return (
    <Box
      component="main"
      //flexGrow={1}
      // minHeight={1000}
      display="flex"
      flexDirection="column"
      py="0px"
    >
      {children}
    </Box>
  );
}
export default Main;