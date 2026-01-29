import { FilterList, Event } from "@mui/icons-material";
import { Box, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import Calendar from "react-calendar"

export default function ActivityFilters() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, borderRadius: 3 }}>
            <Paper sx={{ borderRadius: 3, p: 3 }}>
                <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" sx={{ display: 'flex', mb: 1, alignItems: 'center' , color:'#3a5f7a' }}>
                        <FilterList sx={{ mr: 1 }}/>
                        Filters
                    </Typography>
                    <MenuList>
                        <MenuItem>
                            <ListItemText primary='All events' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary='I am going' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemText primary='I am hosting' />
                        </MenuItem>
                    </MenuList>
                </Box>
            </Paper>
            <Box component={Paper} sx={{ width: '100%', p: 3, borderRadius: 3 }}>
                <Typography variant="h6" 
                sx={{ display: 'flex', alignItems: 'center', mb: 1 , color:'#3a5f7a'}}>
                    <Event sx={{ mr: 1 }} />
                    Select date
                </Typography>
                <Calendar />
            </Box>
        </Box>
    )
}
