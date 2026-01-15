import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react"
import Navbar from "./Navbar";
import ActivityBord from "../../featues/activities/daschboard/ActivityBoard";
function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false)



  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

    return () => { }
  }, [])

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
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

  const handleSumbitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
    } else {
      const newActivity = {...activity,id: activities.length.toString()};
      setSelectedActivity(newActivity);
      setActivities([...activities, newActivity]);
    }
    setEditMode(false);
  }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(x => x.id !== id))
  }


  return (
    <Box sx={{ bgcolor: '#e6f4ff' }} >
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityBord
          activities={activities}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSumbitForm}
          deleteActivity={handleDelete} />

      </Container>

    </Box>
  )
}

export default App
