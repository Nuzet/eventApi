import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, Button } from "@mui/material";

type Props ={
    openForm: () => void;
}

export default function Navbar({openForm}: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #0d1b2a 0%, #1b3a4f 60%, #3a5f7a 100%)'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography variant="h4" fontWeight='bold'>Events</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }} >
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Events
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                About
                            </MenuItem>
                            <MenuItem sx={{ fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                Contact
                            </MenuItem>
                        </Box>
                        <Button size="large" variant="contained" onClick={openForm} color="warning" sx={{
                            backgroundColor: '#ba890e',
                            color: '#09183a',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#f59e0b',
                                boxShadow: '0 0 20px rgba(251, 191, 36, 0.6)',
                            },
                            
                        }}>Create new</Button>
                    </Toolbar>
                </Container>

            </AppBar>
        </Box>
    )
}
