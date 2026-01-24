import { Box, Container, CssBaseline} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
function App() {

  return (
    <Box sx={{ bgcolor: '#e6f4ff', minHeight:'100vh' }} >
      <CssBaseline />
      <Navbar/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <Outlet/>
      </Container>

    </Box>
  )
}

export default App
