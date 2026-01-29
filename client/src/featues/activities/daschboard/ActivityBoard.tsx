import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";
import 'react-calendar/dist/Calendar.css'
export default function ActivityBord() {

    return (
        <Grid container spacing={5} >
            <Grid size={7}>
                <ActivityList/>
            </Grid>
            <Grid size={4}>
                <ActivityFilters/>
            </Grid>
        </Grid>
    )
}
