import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity;
    closeForm: () => void;
}

export default function ActivityForm({ activity,
    closeForm, }: Props) {

    const { updateActivity, createActivity } = useActivities();
    const handleSumbit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formDate = new FormData(event.currentTarget);

        const data: { [key: string]: FormDataEntryValue } = {}
        formDate.forEach((value, key) => {
            data[key] = value;
        })

        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        } else {
            await createActivity.mutateAsync(data as unknown as Activity);
            closeForm();
        }
    }

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography variant="h5" gutterBottom color="primary">
                Create new Activity
            </Typography>
            <Box component='form' onSubmit={handleSumbit} display='flex' flexDirection='column' gap={3} >
                <TextField name="title" label='Title' defaultValue={activity?.title}></TextField>
                <TextField name="description" label='Description' defaultValue={activity?.description} multiline rows={3}></TextField>
                <TextField name="category" label='Category' defaultValue={activity?.category}></TextField>
                <TextField name="date" label='Date'
                    defaultValue={activity?.date
                        ? new Date(activity.date).toISOString().split('T')[0]
                        : new Date().toISOString().split('T')[0]}
                    type="date"></TextField>
                <TextField name="city" label='City' defaultValue={activity?.city}></TextField>
                <TextField name="venue" label='Venue' defaultValue={activity?.venue}></TextField>
                <Box display='flex' justifyContent='end' gap={3}>
                    <Button color='inherit' onClick={closeForm}>Cancel</Button>
                    <Button type="submit"
                        color='success' variant="contained"
                        disabled={updateActivity.isPending || createActivity.isPending}
                    >Submit</Button>
                </Box>
            </Box>
        </Paper >
    )
}
