import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react"
import Navbar from "./Navbar";
import ActivityBord from "../../featues/activities/daschboard/ActivityBoard";
import { useActivities } from "../../lib/hooks/useActivities";
function App() {

  
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)
  const {activities, isPending}  = useActivities();

  const handleSelectedActivity = (id: string) => {
    if (!activities) return;

    setSelectedActivity(activities!.find(x => x.id === id));
  }

  const handleCancelSelectedActivity = () => {
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectedActivity(id);
    else handleCancelSelectedActivity();
    setEditMode(true)
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }



  return (
    <Box sx={{ bgcolor: '#e6f4ff', minHeight:'100vh' }} >
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography>Loading</Typography>
        ) : (
          <ActivityBord
            activities={activities}
            selectActivity={handleSelectedActivity}
            cancelSelectActivity={handleCancelSelectedActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm} />
        )}


      </Container>

    </Box>
  )
}

export default App
