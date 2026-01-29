import { Box, Container, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../featues/home/HomePage";
function App() {

  const location = useLocation();
  return (
    <Box sx={{ bgcolor: '#e6f4ff', minHeight: '100vh' }} >
      <CssBaseline />
      {location.pathname == '/' ? <HomePage /> : (
        <>
          <Navbar />
          <Container maxWidth='xl' sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}


    </Box>
  )
}

export default App
