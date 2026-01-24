import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityBord() {

    return (
        <Grid container spacing={5} >
            <Grid size={7}>
                <ActivityList/>
            </Grid>
            <Grid size={4}>
                Events filters
            </Grid>
        </Grid>
    )
}
