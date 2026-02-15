import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Typography, Container, MenuItem, LinearProgress } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";


export default function Navbar() {

    const { uiStore } = useStore();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg, #0d1b2a 0%, #1b3a4f 60%, #3a5f7a 100%)',
                position: 'relative'
            }}>
                <Container maxWidth='xl'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                                <Group fontSize="large" />
                                <Typography variant="h4" fontWeight='bold'>Events</Typography>
                            </MenuItem>
                        </Box>
                        <Box sx={{ display: 'flex' }} >
                            <MenuItemLink to='/activities'>
                                Events
                            </MenuItemLink>
                            <MenuItemLink to='/createActivity'>
                                Create Event
                            </MenuItemLink>
                            <MenuItemLink to='/counter'>
                                Counter
                            </MenuItemLink>
                             <MenuItemLink to='/errors'>
                                Test Errors
                            </MenuItemLink>

                        </Box>
                        <MenuItem>
                            User Menu
                        </MenuItem>
                    </Toolbar>
                </Container>
                <Observer>
                    {() => uiStore.isLoading ? (
                        <LinearProgress
                            color="secondary"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 4

                            }}
                        />
                    ) : null}
                </Observer>
            </AppBar>
        </Box>
    )
}
