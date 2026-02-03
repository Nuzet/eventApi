import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore"
import { observer } from 'mobx-react-lite';

const Counter = observer(function Counter() {

    const { counter } = useStore()
    return (

        <Box display={'flex'} justifyContent={'space-between'}>
            <Box sx={{ width: '60%' }}>
                <Typography variant="h4" gutterBottom>{counter.title}</Typography>
                <Typography variant="h6"> Count is :{counter.count}</Typography>

                <ButtonGroup sx={{ my: 3 }}>
                    <Button onClick={() => counter.decrement()} variant="contained" color="error">-</Button>
                    <Button onClick={() => counter.increment()} variant="contained" color="success">+</Button>
                    <Button onClick={() => counter.increment(5)} variant="contained" color="primary">+ 5 </Button>
                </ButtonGroup>
            </Box>
            <Paper sx={{ width: '40%', p: 4 }}>
                <Typography variant="h5">Counter events: ({counter.eventCount})</Typography>
                <List>
                    {counter.events.map((event, index) => (
                        <ListItemText key={index}>{event}</ListItemText>
                    ))}
                </List>
            </Paper>

        </Box>

    )
});

export default Counter