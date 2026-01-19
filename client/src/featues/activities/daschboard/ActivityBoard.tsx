import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    selectedActivity: Activity | undefined;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
}
export default function ActivityBord({ activities,
    cancelSelectActivity,
    selectActivity,
    selectedActivity,
    openForm,
    closeForm,
    editMode}: Props) {

    return (
        <Grid container spacing={5} >
            <Grid size={7}>
                <ActivityList activities={activities}
                    selectActivity={selectActivity}
                />
            </Grid>
            <Grid size={4}>
                {selectedActivity && !editMode && <ActivityDetails
                    selectedActivity={selectedActivity}
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}

                />
                }
                {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity}
                ></ActivityForm>}

            </Grid>
        </Grid>
    )
}
